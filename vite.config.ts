import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// CONFIG
// =============================================================================

const ROOT = import.meta.dirname;
const LOG_DIR = path.join(ROOT, ".manus-logs");
const MAX_LOG_SIZE = 1 * 1024 * 1024;
const TRIM_TARGET = Math.floor(MAX_LOG_SIZE * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

// =============================================================================
// LOG UTILS
// =============================================================================

const ensureLogDir = () => {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
};

const trimLogFile = (filePath: string) => {
  if (!fs.existsSync(filePath)) return;

  const stats = fs.statSync(filePath);
  if (stats.size <= MAX_LOG_SIZE) return;

  try {
    const lines = fs.readFileSync(filePath, "utf-8").split("\n");
    const result: string[] = [];
    let size = 0;

    for (let i = lines.length - 1; i >= 0; i--) {
      const lineSize = Buffer.byteLength(lines[i] + "\n");
      if (size + lineSize > TRIM_TARGET) break;

      result.unshift(lines[i]);
      size += lineSize;
    }

    fs.writeFileSync(filePath, result.join("\n"), "utf-8");
  } catch {
    // silencioso por design
  }
};

const writeLog = (source: LogSource, entries: unknown[]) => {
  if (!entries?.length) return;

  ensureLogDir();
  const file = path.join(LOG_DIR, `${source}.log`);

  const formatted = entries.map(
    (e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`
  );

  fs.appendFileSync(file, formatted.join("\n") + "\n");
  trimLogFile(file);
};

// =============================================================================
// PLUGIN: DEBUG COLLECTOR
// =============================================================================

const manusDebugPlugin = (): Plugin => ({
  name: "manus-debug-collector",

  transformIndexHtml(html) {
    if (process.env.NODE_ENV === "production") return html;

    return {
      html,
      tags: [
        {
          tag: "script",
          attrs: {
            src: "/__manus__/debug-collector.js",
            defer: true,
          },
          injectTo: "head",
        },
      ],
    };
  },

  configureServer(server: ViteDevServer) {
    server.middlewares.use("/__manus__/logs", (req, res, next) => {
      if (req.method !== "POST") return next();

      const send = (status: number, body: unknown) => {
        res.writeHead(status, { "Content-Type": "application/json" });
        res.end(JSON.stringify(body));
      };

      const handle = (payload: any) => {
        writeLog("browserConsole", payload.consoleLogs);
        writeLog("networkRequests", payload.networkRequests);
        writeLog("sessionReplay", payload.sessionEvents);

        send(200, { success: true });
      };

      const body = (req as any).body;

      if (body && typeof body === "object") {
        try {
          handle(body);
        } catch (e) {
          send(400, { success: false, error: String(e) });
        }
        return;
      }

      let raw = "";

      req.on("data", (chunk) => (raw += chunk));
      req.on("end", () => {
        try {
          handle(JSON.parse(raw));
        } catch (e) {
          send(400, { success: false, error: String(e) });
        }
      });
    });
  },
});

// =============================================================================
// PLUGIN: STORAGE PROXY
// =============================================================================

const manusStoragePlugin = (): Plugin => ({
  name: "manus-storage-proxy",

  configureServer(server: ViteDevServer) {
    server.middlewares.use("/manus-storage", async (req, res) => {
      const key = req.url?.replace(/^\//, "");
      if (!key) {
        res.writeHead(400);
        return res.end("Missing storage key");
      }

      const base = process.env.BUILT_IN_FORGE_API_URL?.replace(/\/+$/, "");
      const token = process.env.BUILT_IN_FORGE_API_KEY;

      if (!base || !token) {
        res.writeHead(500);
        return res.end("Storage proxy not configured");
      }

      try {
        const url = new URL("v1/storage/presign/get", base + "/");
        url.searchParams.set("path", key);

        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          res.writeHead(502);
          return res.end("Storage backend error");
        }

        const data = await response.json();
        if (!data?.url) {
          res.writeHead(502);
          return res.end("Invalid signed URL");
        }

        res.writeHead(307, {
          Location: data.url,
          "Cache-Control": "no-store",
        });

        res.end();
      } catch {
        res.writeHead(502);
        res.end("Storage proxy error");
      }
    });
  },
});

// =============================================================================
// VITE CONFIG
// =============================================================================

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginManusRuntime(),
    manusDebugPlugin(),
    manusStoragePlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(ROOT, "client/src"),
      "@shared": path.resolve(ROOT, "shared"),
      "@assets": path.resolve(ROOT, "attached_assets"),
    },
  },

  envDir: ROOT,

  root: path.resolve(ROOT, "client"),

  build: {
    outDir: path.resolve(ROOT, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
    strictPort: false,

    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],

    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});