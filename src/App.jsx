import { useState } from "react";

// ==========================================================
// PORTFÓLIO – LUCAS (React + Tailwind)
// Perfil: Estudante de ADS + Design • Foco em criação de sites (WordPress/Elementor, Landing Pages, Performance, SEO)
// Como personalizar rapidamente:
// 1) Edite os dados nas CONSTS abaixo (projects, services, steps, skills, education).
// 2) Procure por TODO e troque por números/links reais.
// 3) Rode: npm run dev | Build: npm run build | Publique: Vercel/Netlify
// ==========================================================

/*************************
 * Componentes básicos
 *************************/
function Container({ children, className = "" }) {
  return <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>;
}

function Kicker({ children }) {
  return (
    <p className="uppercase tracking-widest text-[11px] md:text-xs text-gray-500">{children}</p>
  );
}

function Title({ children }) {
  return <h2 className="text-3xl md:text-4xl font-semibold mt-2">{children}</h2>;
}

function Subtitle({ children }) {
  return <p className="text-gray-600 mt-3 leading-relaxed">{children}</p>;
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {kicker && <Kicker>{kicker}</Kicker>}
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full px-3 py-1 text-sm border border-gray-300">{children}</span>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

/*************************
 * Cards
 *************************/
function ProjectCard({ cover, title, year, stack = [], summary, outcomes = [], link, repo }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow bg-white">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img src={cover} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <p className="text-gray-600">{summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {stack.map((s, i) => (
            <Badge key={i}>{s}</Badge>
          ))}
        </div>
        {outcomes?.length > 0 && (
          <details className="pt-1" open={open} onToggle={() => setOpen(!open)}>
            <summary className="cursor-pointer select-none text-sm text-gray-700 hover:text-black">Ver resultados ✦</summary>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              {outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </details>
        )}
        <div className="flex gap-3 pt-2">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-300 hover:border-black transition">
              Visitar site ↗
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-300 hover:border-black transition">
              Código (GitHub)
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ name, price, features = [] }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-1">{price}</p>
      <ul className="mt-4 space-y-2 text-gray-700">
        {features.map((f, j) => (
          <li key={j} className="flex gap-2 items-start"><span>✔️</span><span>{f}</span></li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ step, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <p className="text-sm text-gray-500">Etapa</p>
      <h4 className="font-semibold mt-1">{step}</h4>
      <p className="text-gray-700 mt-2">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <p className="italic text-gray-700">“{quote}”</p>
      <p className="mt-3 text-sm text-gray-500">— {name}, {role}</p>
    </div>
  );
}

/*************************
 * DADOS (edite aqui)
 *************************/
const skills = {  
  cms: ["WordPress", "Elementor", "WooCommerce"],
  perf: ["Core Web Vitals", "SEO técnico", "Otimização de imagens (WebP/AVIF)", "PageSpeed Insights"],
  design: ["Figma", "UI/UX", "Identidade Visual", "Criação de Landing Pages", "Edição no Canva"],
  ops: ["Hospedagem e Domínio", "Configuração de SSL", "Google Analytics", "Meta Pixel", "Gestão de Plugins"],
};
export const projects = [
  {
    cover: `${import.meta.env.BASE_URL}images/KVOLT-SITE.png`,
    title: "Kvolt Energia",
    year: "2025",
    stack: ["WordPress", "Elementor", "Responsivo", "UX", "SEO"],
    filters: ["WordPress", "Elementor", "SEO", "UI/UX"], // ← topo
    summary: "Landing page para apresentar serviços e transmitir confiança, com design responsivo e comunicação clara.",
    outcomes: ["Tempo de carregamento ~1.2s mobile", "Estrutura focada em captação de leads", "Melhoria de credibilidade visual"],
  link: "https://kvolt.com.br/" 
  },
 {
  cover: `${import.meta.env.BASE_URL}images/AURORA-SITE.png`,
  title: "Aurora Soluções Ambientais",
  year: "2025",
  stack: ["WordPress", "Elementor", "Performance", "SEO", "Identidade Visual"],
  filters: ["WordPress", "Elementor", "Performance", "SEO", "Branding"],
  summary: "Site institucional para empresa de soluções ambientais, com identidade vibrante, responsividade e performance.",
  outcomes: [
    "LCP ~1.8s em 4G",
    "SEO on-page (títulos, descrições, canonical)",
    "Presença digital consistente com o setor"
  ],
  link: "https://aurorasolucoesambientais.com.br/" 
},
  {
    cover: `${import.meta.env.BASE_URL}images/PIANGERS-SITE.png`,
    title: "Piangers Engenharia",
    year: "2024",
    stack: ["WordPress", "Elementor", "Performance", "Acessibilidade"],
    filters: ["WordPress", "Elementor", "Performance", "UI/UX"],
    summary: "Site institucional sofisticado, alinhado à identidade da marca, com foco em usabilidade.",
    outcomes: ["PageSpeed 90+ (Desktop)", "CLS < 0.05", "Formulários mais engajadores"],
  link: "https://piangers.eng.br/" 
  },
  {
    cover: `${import.meta.env.BASE_URL}images/CAPA-LOGO.png`,
    title: "Criação de Logos e Paletas",
    year: "2024",
    stack: ["React", "UI/UX", "Responsivo"],
    filters: ["Branding", "UI/UX"],
    summary: "Exploração de identidade visual com logos, paletas e aplicações.",
    outcomes: ["Guia visual coeso", "Aplicações consistentes em mídias", "Melhor reconhecimento de marca"]
  },
  {
    cover: `${import.meta.env.BASE_URL}images/CAPA-VIDEO.png`,
    title: "Vídeo Institucional Empresarial",
    year: "2025",
    stack: ["Produção Audiovisual", "Tailwind", "Vite"],
    filters: ["Audiovisual", "Branding"],
    summary: "One-page para portfólio audiovisual e captação via formulário.",
    outcomes: ["Tempo de navegação maior", "Apresentação clara de cases", "Captação via CTA"]
  },
  {
    cover: `${import.meta.env.BASE_URL}images/CAPA-REDSIGN.png`,
    title: "Redesign de Instagram",
    year: "2024",
    stack: ["WordPress", "Copy", "Pixel/Analytics"],
    filters: ["Marketing", "Branding"],
    summary: "Reestruturação de Instagram/LinkedIn/Facebook focada em consistência e conversão.",
    outcomes: ["Feed consistente", "CTA claro", "Mensuração via Pixel/Analytics"]
  },
  {
    cover: `${import.meta.env.BASE_URL}images/CAPA-CRIACAOPOSTS.png`,
    title: "Criação de Posts para Redes Sociais",
    year: "2024",
    stack: ["WordPress", "Copy", "Pixel/Analytics"],
    filters: ["Marketing", "Branding"],
    summary: "Artes e textos para engajamento e fortalecimento da identidade digital.",
    outcomes: ["Calendário editorial", "Aumento de engajamento", "Mensuração por métricas"]
  },
  {
    cover: `${import.meta.env.BASE_URL}images/LINKTREE-CAPA.png`,
    title: "Linktree Personalizado",
    year: "2024",
    stack: ["WordPress", "Copy", "Pixel/Analytics"],
    filters: ["Marketing", "UI/UX"],
    summary: "Página de links customizada para centralizar contatos e redes.",
    outcomes: ["Mais cliques em canais chave", "Melhor UX mobile", "Rastreamento de links"]
  },
  {
    cover: `${import.meta.env.BASE_URL}images/CAPA-IDENTIDADEVISUAL.png`,
    title: "Identidade Visual",
    year: "2024",
    stack: ["WordPress", "Branding"],
    filters: ["Branding", "UI/UX"],
    summary: "Sistemas visuais consistentes: tipografia, paleta, grid e aplicações.",
    outcomes: ["Uniformidade em materiais", "Reconhecimento da marca", "Base sólida para campanhas"]
  }
];

const services = [
  {
    name: "Site WordPress Completo",
    price: "a partir de R$ 2.500",
    features: [
      "Tema leve + Elementor",
      "Páginas essenciais (Home, Sobre, Serviços, Contato)",
      "Integração com WhatsApp",
      "SEO on-page básico"
    ],
  },
  {
    name: "Landing Page de Conversão",
    price: "a partir de R$ 1.200",
    features: [
      "Copy orientada a CTA",
      "Teste A/B simples",
      "Pixel/Analytics",
      "Entrega rápida"
    ],
  },
  {
    name: "Loja WooCommerce (E-commerce)",
    price: "a partir de R$ 3.500",
    features: [
      "Catálogo, carrinho e checkout",
      "Integração de pagamento",
      "Otimização de velocidade",
      "Treinamento de uso"
    ],
  },
  {
    name: "Performance & SEO Técnico",
    price: "sob consulta",
    features: [
      "Meta PageSpeed 85+",
      "Imagens em next-gen",
      "Minificação e cache",
      "Core Web Vitals"
    ],
  },
  {
    name: "Identidade Visual (Logo + Paleta + Guia)",
    price: "a partir de R$ 1.500",
    features: [
      "Conceito e variações de logo",
      "Paleta e tipografia",
      "Aplicações (mockups)",
      "Mini brand guide em PDF"
    ],
  },
  {
    name: "Redesign de Instagram (Kit Social)",
    price: "a partir de R$ 690",
    features: [
      "Grade visual e destaques",
      "Templates editáveis",
      "Padrões de capa/Stories",
      "Guia de uso rápido"
    ],
  },
  {
    name: "Criação de Posts para Redes Sociais",
    price: "a partir de R$ 600/mês",
    features: [
      "Pacote de artes + copy",
      "Calendário básico",
      "Padronização visual",
      "Entrega em PNG/MP4"
    ],
  },
  {
    name: "Linktree Personalizado",
    price: "a partir de R$ 250",
    features: [
      "Página de links no seu domínio",
      "Botões e ícones personalizados",
      "Pixel/Analytics",
      "Foco em mobile"
    ],
  },
  {
    name: "Vídeo Institucional (Edição/Apresentação)",
    price: "sob consulta",
    features: [
      "Roteiro e estrutura",
      "Edição e trilha",
      "Versão para site/Instagram",
      "Thumbnail e título"
    ],
  },
];

const steps = [
  { step: "1. Descoberta", desc: "Briefing com o cliente, definição de público, objetivos e referências." },
  { step: "2. Protótipo", desc: "Wireframes e identidade visual no Figma." },
  { step: "3. Implementação", desc: "Criação do site no WordPress com Elementor e plugins essenciais." },
  { step: "4. Performance", desc: "Otimização de velocidade, SEO técnico e Core Web Vitals." },
  { step: "5. Lançamento", desc: "Configuração de hospedagem, domínio, SSL e Google Analytics." },
];

const education = [
  { period: "Atual", title: "SO (Sistemas de Informação)", where: "Faculdade" },
  { period: "Atual", title: "Design Gráfico (estudos complementares)", where: "Cursos livres / prática" },
  { period: "Base", title: "Criação de sites WordPress/Elementor", where: "Projetos próprios e estudos" },
];

const testimonials = [
  { quote: "Entrega rápida e comunicação clara. Nosso site ficou profissional e leve.", name: "Cliente A", role: "Pequeno negócio" },
  { quote: "A landing teve ótimo desempenho no mobile e melhorou os leads.", name: "Cliente B", role: "Projeto de captação" },
];

/*************************
 * APP
 *************************/
export default function App() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = [
  "Todos",
  "WordPress",
  "Elementor",
  "Performance",
  "SEO",
  "UI/UX",
  "Branding",
  "Audiovisual",
  "Marketing",
];
  const filtered = projects.filter((p) => {
    if (activeFilter === "Todos") return true;
    return p.stack.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 scroll-smooth">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <Container className="py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold">Lucas • Web Developer</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projetos" className="hover:opacity-70">Projetos</a>
            <a href="#servicos" className="hover:opacity-70">Serviços</a>
            <a href="#processo" className="hover:opacity-70">Processo</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#sobre" className="hover:opacity-70">Sobre</a>
            <a href="#contato" className="hover:opacity-70">Contato</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Pedir orçamento</a>
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="pt-14 pb-10 md:pt-24 md:pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Kicker>Criação de Sites • WordPress • Landing Pages</Kicker>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-3">
                Transformo <span className="underline decoration-4 decoration-pink-500">ideias</span> e <span className="underline decoration-4 decoration-orange-500">em experiências digitais.</span> 
              </h1>
              <p className="text-gray-600 mt-5 max-w-xl">
                Estudante de Sistemas de informação + Design. Foco em WordPress/Elementor, performance (Core Web Vitals) e SEO técnico.
                Transformo marcas em experiências digitais com conversão e velocidade.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#projetos" className="rounded-xl px-5 py-3 bg-black text-white hover:opacity-90">Ver projetos</a>
                <a href="#contato" className="rounded-xl px-5 py-3 border border-gray-300 hover:border-black">Pedir orçamento</a>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6">
  <Metric label="Projetos entregues" value="15+" />
  <Metric label="Clientes satisfeitos" value="10+" />
  <Metric label="Tempo de experiência" value="2 anos" />
</div>
            </div>
          
          </div>
        </Container>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-14">
        <Container>
          <SectionHeader
            kicker="Portfólio"
            title="Projetos em destaque"
            subtitle="Projetos desenvolvidos em WordPress/Elementor, design acadêmico. Use os filtros para visualizar exemplos por stack e área de atuação"/>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 text-sm border transition ${activeFilter===f?"bg-black text-white border-black":"border-gray-300 hover:border-black"}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>

          {/* Template de Estudo de Caso */}
          <div className="mt-14 p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold">Template de Estudo de Caso</h3>
            <ol className="list-decimal ml-5 mt-4 space-y-2 text-gray-700">
              <li><strong>Contexto:</strong> Quem é o cliente? Qual problema?</li>
              <li><strong>Objetivos:</strong> Conversão, velocidade, SEO, usabilidade.</li>
              <li><strong>Processo:</strong> Descoberta → Wireframe → Design → Implementação → QA → Lançamento.</li>
              <li><strong>Stack:</strong> Tema, plugins essenciais, integrações e otimizações técnicas.</li>
              <li><strong>Métricas:</strong> LCP, INP, CLS, PageSpeed (Mobile/Desktop).</li>
              <li><strong>Resultado:</strong> O que melhorou (números concretos).</li>
              <li><strong>Aprendizados:</strong> O que faria diferente e por quê.</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-14">
        <Container>
          <SectionHeader kicker="Como eu ajudo" title="Serviços" subtitle="Planos flexíveis para diferentes momentos do seu negócio."/>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-14">
        <Container>
          <SectionHeader kicker="Como trabalho" title="Processo de criação" subtitle="Transparência e foco em resultado do briefing ao lançamento."/>
          <div className="grid md:grid-cols-5 gap-6 mt-8">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} />
            ))}
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-14">
        <Container>
          <SectionHeader kicker="Competências" title="Skills & Ferramentas" subtitle="Baseadas nos meus estudos de Sistemas de informação + Design e prática em projetos reais."/>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            
            <div className="rounded-2xl border border-gray-200 p-5 bg-white"><h4 className="font-semibold mb-3">CMS</h4><div className="flex flex-wrap gap-2">{skills.cms.map((s,i)=><Badge key={i}>{s}</Badge>)}</div></div>
            <div className="rounded-2xl border border-gray-200 p-5 bg-white"><h4 className="font-semibold mb-3">Performance/SEO</h4><div className="flex flex-wrap gap-2">{skills.perf.map((s,i)=><Badge key={i}>{s}</Badge>)}</div></div>
            <div className="rounded-2xl border border-gray-200 p-5 bg-white"><h4 className="font-semibold mb-3">Design</h4><div className="flex flex-wrap gap-2">{skills.design.map((s,i)=><Badge key={i}>{s}</Badge>)}</div></div>
            <div className="rounded-2xl border border-gray-200 p-5 bg-white"><h4 className="font-semibold mb-3">Operação</h4><div className="flex flex-wrap gap-2">{skills.ops.map((s,i)=><Badge key={i}>{s}</Badge>)}</div></div>
          </div>
        </Container>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-14">
        <Container>
          <SectionHeader kicker="Quem sou" title="Sobre o Lucas" subtitle="Estudante de Sistemas de Informação + Design. Foco em criação de sites, UI e performance."/>
          <div className="grid md:grid-cols-3 gap-8 mt-8 items-start">
            <div className="md:col-span-2 space-y-4 text-gray-700">
              <p>
                Gosto de transformar ideias em experiências digitais simples e rápidas.
                Trabalho com WordPress/Elementor para entregar valor rápido.
                Meu foco é conversão, velocidade e clareza de conteúdo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((e, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 p-4 bg-white">
                    <p className="text-xs text-gray-500">{e.period}</p>
                    <p className="font-semibold mt-1">{e.title}</p>
                    <p className="text-sm text-gray-600">{e.where}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                <h4 className="font-semibold">Destaques</h4>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Core Web Vitals como critério de layout</li>
                  <li>• SEO técnico on‑page</li>
                  <li>• Integrações WhatsApp, Analytics, Pixel</li>
                  <li>• Hospedagem, domínio e SSL</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                <h4 className="font-semibold">Depoimentos</h4>
                <div className="space-y-3 mt-3">
                  {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-14">
        <Container>
          <SectionHeader kicker="Vamos conversar" title="Orçamentos & parcerias" subtitle="Me conte sobre seu projeto e prazo. Respondo com uma rota clara de execução."/>
          <ContactForm />
          <p className="text-xs text-gray-500 mt-3">*Em produção, conecte a um serviço (Netlify Forms, Formspree, EmailJS ou API própria).</p>
        </Container>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lucas — Criação de Sites. Todos os direitos reservados.
      </footer>
    </main>
  );
}

/*************************
 * Formulário
 *************************/
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", site: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800); // simulação
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4 max-w-3xl">
      <input name="name" value={form.name} onChange={handleChange} className="border border-gray-300 rounded-xl px-4 py-3" placeholder="Seu nome" required />
      <input name="email" value={form.email} onChange={handleChange} type="email" className="border border-gray-300 rounded-xl px-4 py-3" placeholder="Seu e-mail" required />
      <input name="site" value={form.site} onChange={handleChange} className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3" placeholder="Site atual (se tiver)" />
      <textarea name="message" value={form.message} onChange={handleChange} className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 min-h-[120px]" placeholder="Descreva o projeto (objetivo, prazo, páginas, referências)" required />
      <div className="md:col-span-2 flex gap-3 items-center">
        <button type="submit" disabled={status!=="idle"} className="rounded-xl px-5 py-3 bg-black text-white hover:opacity-90 disabled:opacity-60">{status==="idle"?"Enviar":"Enviando..."}</button>
        <a href="https://wa.me/55XXXXXXXXXXX" className="rounded-xl px-5 py-3 border border-gray-300 hover:border-black">WhatsApp</a>
        {status === "sent" && <span className="text-sm text-green-600">Mensagem enviada! (simulação)</span>}
      </div>
    </form>
  );
}
