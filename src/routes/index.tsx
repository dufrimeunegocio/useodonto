import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BrushCleaning,
  CircleDot,
  CircleGauge,
  Gem,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Smile,
  Sparkle,
  Zap,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import bannerHero from "@/assets/banner-hero.png";
import implante from "@/assets/implante.png";
import logoTransparente from "@/assets/logo-transparente.png";
import recepcao from "@/assets/recepcao.png";
import salaAtendimento from "@/assets/sala-atendimento.png";
import salaAtendimento1 from "@/assets/sala-atendimento-1.png";
import resultado1 from "@/assets/resultado-1.png";
import resultado2 from "@/assets/resultado-2.png";
import resultado3 from "@/assets/resultado-3.png";
import resultado4 from "@/assets/resultado-4.png";
import convenio01 from "@/assets/convenio-01.png";
import convenio02 from "@/assets/convenio-02.png";
import convenio03 from "@/assets/convenio-03.png";
import convenio04 from "@/assets/convenio-04.png";
import convenio05 from "@/assets/convenio-05.png";
import convenio06 from "@/assets/convenio-06.png";
import convenio07 from "@/assets/convenio-07.png";
import convenio09 from "@/assets/convenio-09.png";
import convenio10 from "@/assets/convenio-10.png";
import convenio11 from "@/assets/convenio-11.png";
import convenio12 from "@/assets/convenio-12.png";
import convenio13 from "@/assets/convenio-13.png";
import convenio14 from "@/assets/convenio-14.png";
import convenio15 from "@/assets/convenio-15.png";
import convenio16 from "@/assets/convenio-16.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UseOdonto | Instituto Odontológico em Guarulhos" },
      {
        name: "description",
        content:
          "Tratamentos odontológicos completos, tecnologia e atendimento humanizado na UseOdonto em Guarulhos.",
      },
      { property: "og:title", content: "UseOdonto | Instituto Odontológico em Guarulhos" },
      {
        property: "og:description",
        content: "Cuidado odontológico completo e atendimento humanizado em Guarulhos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Início", "inicio"],
  ["A Clínica", "clinica"],
  ["Tratamentos", "tratamentos"],
  ["Resultados", "resultados"],
  ["Depoimentos", "depoimentos"],
  ["Convênios", "convenios"],
  ["Contato", "contato"],
] as const;

const convenios = [
  convenio01,
  convenio02,
  convenio03,
  convenio04,
  convenio05,
  convenio06,
  convenio07,
  convenio09,
  convenio10,
  convenio11,
  convenio12,
  convenio13,
  convenio14,
  convenio15,
  convenio16,
];

const tratamentos = [
  { nome: "Clareamento dental", Icone: Sparkle },
  { nome: "Dentaduras e pontes", Icone: Smile },
  { nome: "Implantes dentários", Icone: CircleDot },
  { nome: "Implantes dentários sem corte", Icone: ShieldCheck },
  { nome: "Próteses dentárias", Icone: Gem },
  { nome: "Implante unitário", Icone: BadgeCheck },
  { nome: "Protocolo de carga imediata", Icone: Zap },
  { nome: "Protocolo de carga imediata sorriso fixo em 24 horas", Icone: CircleGauge },
  { nome: "Prótese protocolo superior", Icone: BrushCleaning },
];

const resultados = [resultado1, resultado2, resultado3, resultado4];
const ambientes = [
  { asset: recepcao, alt: "Recepção da clínica UseOdonto" },
  { asset: salaAtendimento, alt: "Sala de atendimento da clínica UseOdonto" },
  { asset: salaAtendimento1, alt: "Ambiente de atendimento da clínica UseOdonto" },
];

const depoimentos = [
  {
    nome: "Tatiane Rocha",
    texto:
      "Excelente atendimento, desde a recepção até o atendimento com a doutora Thais!\nMuito atenciosos e acolhedores! Muito bom mesmo!\nRealizando meu sonho!",
  },
  {
    nome: "Pedro Petravicius",
    texto:
      "Lugar maravilhoso, desde recepção até os profissionais que atendem! Todos sempre de bom humor e com uma dona muito simpática!! Recomendo de olhos fechados!!",
  },
  {
    nome: "Elaine Garcia",
    texto:
      "Atendimento rapido e com qualidade.\nResolveram em dias o que a clinica anterior me enrolou meses e não fez.\nÓtimos profissionais, responsáveis e preocupados com cada paciente. Super recomendo",
  },
  {
    nome: "Glauce Sewaybricker",
    texto:
      "O atendimento é perfeito, desde a recepção, triagem, as dentistas, sao um caso a parte, atendimento nota 10, e os preços e facilidades de pagamento, sempre ajudando o paciente Me surpreendeu positivamente!!",
  },
  {
    nome: "Carolina Ferreira",
    texto:
      "Clínica com excelente estrutura e atendimento.\nA equipe toda é muito atenciosa e deu todo suporte do começo ao fim do tratamento!\nSuper indico.",
  },
  {
    nome: "João Ricardo De Oliveira",
    texto:
      "Exelente atendimento, bons profisionais.\nO melhor custo-benefício que já vi.\nAelhor clínica de Guarulhos!\nSuper indico.",
  },
];

const faqs = [
  ["Vocês atendem convênios?", "Sim. Consulte a faixa de convênios desta página ou fale com nossa equipe para confirmar o seu atendimento."],
  ["Quais formas de pagamento vocês aceitam?", "Entre em contato com nossa equipe para conhecer as formas de pagamento disponíveis."],
  ["Vocês realizam implantes dentários?", "Sim. Implantes dentários estão entre os tratamentos oferecidos pela UseOdonto."],
  ["O que é o protocolo de carga imediata?", "A UseOdonto oferece protocolo de carga imediata. Para entender a indicação para o seu caso, agende uma avaliação."],
  ["O que é o sorriso fixo em 24 horas?", "Esse tratamento faz parte das soluções oferecidas pela clínica. A indicação deve ser avaliada individualmente pela equipe."],
  ["Onde a clínica está localizada?", "Estamos na Av. Otávio Braga de Mesquita, 1779, Vila Florida, Guarulhos/SP, CEP 07191-000."],
  ["Como posso agendar uma avaliação?", "Você pode agendar diretamente pelo WhatsApp: (11) 97098-2062."],
] as const;

function useAutoSlide(length: number, delay: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % length), delay);
    return () => window.clearInterval(timer);
  }, [delay, length]);
  return index;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resultadoAtual = useAutoSlide(resultados.length, 6000);
  const ambienteAtual = useAutoSlide(ambientes.length, 6500);
  const depoimentoAtual = useAutoSlide(depoimentos.length, 7000);

  return (
    <main className="site-shell">
      <section id="inicio" className="hero" style={{ backgroundImage: `url(${bannerHero})` }}>
        <div className="hero-overlay" />
        <header className="site-header">
          <a href="#inicio" aria-label="UseOdonto — início" className="brand-link">
            <img src={logoTransparente} alt="UseOdonto Instituto Odontológico" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
          {menuOpen && (
            <nav className="mobile-nav" aria-label="Navegação móvel">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </nav>
          )}
        </header>
        <div className="hero-content">
          <div className="gold-line" />
          <p className="eyebrow-light hero-animate hero-animate-eyebrow">Clínica Odontológica em Guarulhos</p>
          <h1 className="hero-animate hero-animate-title">Seu sorriso merece um cuidado que vai além da estética.</h1>
          <p className="hero-copy hero-animate hero-animate-copy">Tratamentos odontológicos completos, tecnologia e atendimento humanizado em Guarulhos.</p>
          <Button asChild size="lg" className="gold-button hero-animate hero-animate-button">
            <a href="https://wa.me/5511970982062" target="_blank" rel="noreferrer">
              Agendar avaliação <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <section id="convenios" className="convenios-section" aria-label="Convênios atendidos">
        <p>Convênios parceiros</p>
        <div className="logo-marquee">
          <div className="logo-track">
            {[...convenios, ...convenios].map((asset, index) => (
              <div className="logo-item" key={`${asset}-${index}`}>
                <img src={asset} alt={index < convenios.length ? `Logo do convênio ${index + 1}` : ""} aria-hidden={index >= convenios.length} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tratamentos" className="section treatments-section">
        <div className="container">
          <SectionHeading eyebrow="Nossos tratamentos" title="Soluções para cuidar do seu sorriso" />
          <div className="treatments-grid">
            {tratamentos.map(({ nome, Icone }) => (
              <article className="treatment-card reveal" key={nome}>
                <span className="treatment-icon"><Icone aria-hidden="true" /></span>
                <h3>{nome}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="section results-section">
        <div className="container result-layout">
          <div className="result-copy">
            <SectionHeading eyebrow="Antes e depois" title="Resultados que transformam sorrisos" />
            <p>Cada sorriso conta uma história de cuidado, confiança e transformação.</p>
          </div>
          <div className="single-carousel result-carousel" aria-live="polite">
            {resultados.map((asset, index) => (
              <img key={asset} src={asset} alt={`Resultado de tratamento odontológico ${index + 1}`} className={index === resultadoAtual ? "active" : ""} />
            ))}
          </div>
        </div>
      </section>

      <section id="clinica" className="section clinic-section">
        <div className="container clinic-layout">
          <div className="clinic-carousel single-carousel" aria-live="polite">
            {ambientes.map(({ asset, alt }, index) => (
              <img key={asset} src={asset} alt={alt} className={index === ambienteAtual ? "active" : ""} />
            ))}
            <div className="photo-caption">Ambientes pensados para o seu conforto</div>
          </div>
          <div className="clinic-copy">
            <SectionHeading eyebrow="A Clínica" title="Um espaço preparado para cuidar de você" />
            <p>Ambientes acolhedores, estrutura moderna e uma equipe dedicada a tornar cada visita mais tranquila.</p>
            <div className="mini-divider" />
            <span>Guarulhos · São Paulo</span>
          </div>
        </div>
      </section>

      <section className="section implant-section">
        <div className="container implant-layout">
          <div className="implant-copy">
            <span className="section-kicker">Implantes dentários</span>
            <h2>Mais segurança para sorrir, falar e mastigar.</h2>
            <p>Conheça as soluções em implantes oferecidas pela UseOdonto e converse com nossa equipe sobre o cuidado ideal para você.</p>
            <Button asChild variant="outline" size="lg" className="outline-button">
              <a href="https://wa.me/5511970982062" target="_blank" rel="noreferrer">Falar com a equipe <ArrowRight /></a>
            </Button>
          </div>
          <div className="implant-image-wrap reveal">
            <img src={implante} alt="Trabalho odontológico de implante realizado pela UseOdonto" />
          </div>
        </div>
      </section>

      <section id="depoimentos" className="section testimonials-section">
        <div className="container testimonials-layout">
          <div>
            <SectionHeading eyebrow="Depoimentos" title="A experiência de quem já passou por aqui" />
            <div className="testimonial-progress" aria-hidden="true">
              {depoimentos.map((item, index) => <i key={item.nome} className={index === depoimentoAtual ? "active" : ""} />)}
            </div>
          </div>
          <div className="testimonial-stage" aria-live="polite">
            {depoimentos.map((depoimento, index) => (
              <figure className={index === depoimentoAtual ? "active" : ""} key={depoimento.nome}>
                <Quote aria-hidden="true" />
                <div className="stars" aria-label="5 de 5 estrelas">★★★★★</div>
                <blockquote>{depoimento.texto}</blockquote>
                <figcaption>{depoimento.nome}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <SectionHeading eyebrow="Informações" title="Perguntas frequentes" />
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map(([pergunta, resposta], index) => (
              <AccordionItem key={pergunta} value={`faq-${index}`}>
                <AccordionTrigger><span>{pergunta}</span></AccordionTrigger>
                <AccordionContent>{resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="instagram-section">
        <div className="container instagram-content">
          <Instagram aria-hidden="true" />
          <a href="https://www.instagram.com/useodonto.instituto?stkn=MTVydFJsemMzbnVmbQ==" target="_blank" rel="noreferrer">
            <h2>@useodonto.instituto</h2><p>Acompanhe nossa rotina, tratamentos e resultados.</p>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <span>Comece sua transformação</span>
          <h2>Seu próximo sorriso pode começar aqui.</h2>
          <p>Converse com nossa equipe e agende sua avaliação.</p>
          <Button asChild size="lg" className="gold-button">
            <a href="https://wa.me/5511970982062" target="_blank" rel="noreferrer">Agendar avaliação <ArrowRight /></a>
          </Button>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="section-kicker">Contato</span>
            <h2>Estamos em Guarulhos</h2>
            <address>
              <div><MapPin aria-hidden="true" /><p>Av. Otávio Braga de Mesquita, 1779<br />Vila Florida — Guarulhos/SP<br />07191-000</p></div>
              <div><Phone aria-hidden="true" /><a href="tel:+551124929548">(11) 2492-9548</a></div>
              <div><MessageCircle aria-hidden="true" /><a href="https://wa.me/5511970982062" target="_blank" rel="noreferrer">(11) 97098-2062</a></div>
              <div><Instagram aria-hidden="true" /><a href="https://www.instagram.com/useodonto.instituto?stkn=MTVydFJsemMzbnVmbQ==" target="_blank" rel="noreferrer">@useodonto.instituto</a></div>
            </address>
            <Button asChild className="location-button">
              <a href="https://www.google.com/maps/search/?api=1&query=Av.%20Otávio%20Braga%20de%20Mesquita%2C%201779%20Guarulhos%20SP" target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowRight /></a>
            </Button>
          </div>
          <iframe
            title="Localização da UseOdonto em Guarulhos"
            src="https://maps.google.com/maps?q=Av.%20Ot%C3%A1vio%20Braga%20de%20Mesquita%2C%201779%20-%20Guarulhos%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <img src={logoTransparente} alt="UseOdonto Instituto Odontológico" />
          <nav aria-label="Navegação do rodapé"><h3>Menu</h3>
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <div className="footer-contact">
            <h3>Contato</h3>
            <a href="tel:+551124929548"><Phone aria-hidden="true" />(11) 2492-9548</a>
            <a href="https://wa.me/5511970982062"><MessageCircle aria-hidden="true" />(11) 97098-2062</a>
            <a href="https://www.instagram.com/useodonto.instituto?stkn=MTVydFJsemMzbnVmbQ=="><Instagram aria-hidden="true" />@useodonto.instituto</a>
          </div>
          <div className="footer-info">
            <h3>Informações</h3>
            <span>Endereço</span>
            <p>Av. Otávio Braga de Mesquita, 1779<br />Vila Florida — Guarulhos/SP<br />07191-000</p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© 2026 Clínica Odontológica em Guarulhos. Todos os direitos reservados.</span>
          <span>Desenvolvido com <Heart aria-label="amor" /> por <a href="https://dufrimeunegocio.com.br" target="_blank" rel="noreferrer">@Dufrimeunegocio</a></span>
        </div>
      </footer>
    </main>
  );
}