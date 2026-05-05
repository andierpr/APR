import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Zap, Users, Award, Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Backend", items: [".NET", "C#", "ASP.NET Core", "PHP", "APIs REST"] },
    { category: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3", "Bootstrap"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "Firebird"] },
    { category: "Methodologies", items: ["Scrum", "SOLID", "Clean Code", "Design Patterns"] },
  ];

  const experience = [
    {
      title: "Coordenador de Sistemas e TI | Tech Lead",
      company: "Rede Agafarma de Farmácias",
      period: "Jun 2023 - Abr 2025",
      description: "Liderança técnica em desenvolvimento de sistemas corporativos, integração de plataformas e migração de sistemas legados para TOTVS Protheus.",
      highlights: ["Migração completa de sistema legado", "Integração entre sistemas corporativos", "Redução de falhas operacionais"],
    },
    {
      title: "Analista de Sistemas | Desenvolvedor Full Stack",
      company: "Rede Agafarma de Farmácias",
      period: "Maio 2013 - Jun 2023",
      description: "Desenvolvimento e manutenção de sistemas corporativos para uma das maiores redes de farmácias independentes do Rio Grande do Sul.",
      highlights: ["10 anos de experiência", "Ciclo completo de desenvolvimento", "Suporte em ambiente de produção"],
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Especialista em desenvolvimento de sistemas complexos com foco em backend e integração de APIs.",
    },
    {
      icon: Zap,
      title: "Integração de Sistemas",
      description: "Experiência em integração de plataformas corporativas (TOTVS Protheus, Trier, HOS).",
    },
    {
      icon: Users,
      title: "Tech Lead",
      description: "Liderança técnica de equipes e coordenação de projetos de grande impacto.",
    },
    {
      icon: Award,
      title: "Boas Práticas",
      description: "Profundo conhecimento em SOLID, Clean Code e Design Patterns.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="text-2xl md:text-3xl font-bold text-gradient" style={{ fontFamily: '"Playfair Display", serif' }}>
            APR
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#about" className="text-sm md:text-base hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#skills" className="text-sm md:text-base hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#experience" className="text-sm md:text-base hover:text-primary transition-colors">
              Experiência
            </a>
            <a href="#contact" className="text-sm md:text-base hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663044336620/9koUP46pHDMdgjqB4LT8Do/hero-background-bT7B7iVPNU52Yy9Tw3zEjJ.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <Badge variant="outline" className="border-primary/50 text-primary">
                Desenvolvedor Full Stack
              </Badge>
            </div>
            
            <h1 className="mb-6 leading-tight">
              Andier Prates Ramos
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Especialista em desenvolvimento de sistemas corporativos, integração de plataformas e liderança técnica. Com mais de uma década de experiência, transformo requisitos complexos em soluções escaláveis e performáticas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Ver Portfólio <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Baixar Currículo
              </Button>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border/50 flex flex-wrap gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência em TI</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">9.0/10</div>
                <p className="text-sm text-muted-foreground">Nota de Recrutamento</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Projetos Entregues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-t border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="mb-6">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Sou um desenvolvedor Full Stack com foco em backend, especializado em construção de APIs de alta performance e integração de sistemas corporativos complexos. Minha trajetória profissional é marcada pela evolução contínua e pela capacidade de adaptar-me a novos desafios.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Na Rede Agafarma, liderava a transformação digital de sistemas legados, coordenava equipes técnicas e garantia a qualidade de soluções que impactavam toda a operação. Meu compromisso é entregar não apenas código, mas soluções que agregam valor real ao negócio.
              </p>
              <div className="flex gap-4">
                <a href="mailto:andier.prattes@gmail.com" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a href="https://linkedin.com/in/andierprattes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663044336620/9koUP46pHDMdgjqB4LT8Do/tech-stack-visual-AaQG45JsvGetL4mugqWJGa.webp"
                alt="Tech Stack"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 md:py-32 bg-muted/50 border-t border-border/50">
        <div className="container">
          <h2 className="text-center mb-16">Destaques Profissionais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 border-t border-border/50">
        <div className="container">
          <h2 className="mb-16">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <Badge key={sidx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-muted/50 border-t border-border/50">
        <div className="container">
          <h2 className="mb-16">Experiência Profissional</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hidx) => (
                    <Badge key={hidx} variant="outline">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 border-t border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663044336620/9koUP46pHDMdgjqB4LT8Do/leadership-visual-oMGWDiGHdkE5xBQ3nZBfrR.webp"
                alt="Leadership"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="mb-6">Liderança Técnica</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Como Tech Lead e Coordenador de Sistemas, minha responsabilidade vai além do código. Coordeno equipes, defino arquiteturas, e garanto que cada projeto atinja seus objetivos de negócio.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Minha experiência inclui:
              </p>
              <ul className="space-y-3">
                {[
                  "Migração completa de sistema legado para ERP TOTVS Protheus",
                  "Integração entre sistemas corporativos (Trier, HOS, TOTVS)",
                  "Modernização de processos internos e automação",
                  "Definição de arquitetura e boas práticas de desenvolvimento",
                  "Liderança de equipes multidisciplinares",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/50">
        <div className="container text-center">
          <h2 className="mb-8">Avaliação de Recrutamento</h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">9.0/10</div>
            <p className="text-lg text-muted-foreground mb-8">
              Perfil altamente qualificado para posições de desenvolvimento Full Stack, liderança técnica e coordenação de sistemas em empresas que buscam inovação e eficiência em tecnologia.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">9.5/10</div>
                <p className="text-sm text-muted-foreground">Experiência Técnica</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">9.0/10</div>
                <p className="text-sm text-muted-foreground">Liderança e Gestão</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">9.0/10</div>
                <p className="text-sm text-muted-foreground">Boas Práticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-border/50">
        <div className="container text-center">
          <h2 className="mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e desafios. Entre em contato para discutir como posso contribuir para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:andier.prattes@gmail.com" className="gap-2">
                <Mail className="w-4 h-4" />
                Enviar Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/andierprattes" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="w-4 h-4" />
                Conectar no LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Andier Prates Ramos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="mailto:andier.prattes@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/andierprattes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
