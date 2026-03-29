import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, FireSimple, Leaf,
  Star, InstagramLogo, ArrowRight, BeerBottle, Motorcycle,
  Users, CookingPot, CalendarBlank
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548991137337?text=Olá! Gostaria de fazer um pedido na Na Lenha Hamburgueria.'
const PHONE = '(48) 99113-7337'
const ADDRESS = 'R. Intendente João Nunes Vieira, 1334 — Ingleses, Florianópolis/SC'
const INSTAGRAM = 'https://instagram.com/na_lenha77'
const HOURS = 'Ter a Dom, 18h às 23h'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>{children}</motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])
  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand"><img src="./images/logo.png" alt="Na Lenha" /></a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta"><WhatsappLogo size={14} weight="fill" /> Pedir</a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}><WhatsappLogo size={18} weight="fill" /> Fazer Pedido</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-burger.jpg" alt="Hambúrguer artesanal Na Lenha" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />Grelhados no Forno a Lenha — Ingleses</div></Reveal>
        <Reveal delay={0.1}><h1>Hambúrguer artesanal<br />na brasa da <em>lenha</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Blend exclusivo de carnes nobres, grelhado sobre carvão e lenha de verdade. Cada mordida tem o sabor defumado que só o fogo lento proporciona. Nos Ingleses, Florianópolis.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Pedir Agora</a>
            <a href="#cardapio" className="btn-outline">Cardápio <ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Ingleses — Floripa</span></div>
            <div className="hero-info-item"><Clock size={16} weight="duotone" /><span>18h às 23h</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.8 — 300+ avaliações</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/grelha.jpg" alt="Grelha a lenha" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Nossa Essência</div><h2 className="section-title">O sabor que só a<br /><em>lenha de verdade</em> dá</h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">A Na Lenha nasceu da paixão por hambúrgueres autênticos, grelhados sobre carvão e lenha como antigamente. Nos Ingleses do Rio Vermelho, construímos uma hamburgueria que valoriza ingredientes de qualidade e o preparo artesanal.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Nosso blend de carnes é exclusivo, o pão artesanal é feito sob medida, e cada molho é preparado na casa. O resultado? O melhor hambúrguer dos Ingleses, com 4.8 de nota no Google e mais de 300 avaliações.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><CalendarBlank size={18} weight="duotone" /> Reservar Mesa</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Menu() {
  const items = [
    { category: 'Clássico', title: 'Cheddar do Chef', desc: 'Blend 180g grelhado na lenha, cheddar inglês derretido, bacon crocante, cebola caramelizada e molho especial da casa.', image: './images/hero-burger.jpg' },
    { category: 'Especial', title: 'Smash Burger', desc: 'Dois smash patties prensados na chapa com queijo derretido, pickles artesanais e molho Na Lenha.', image: './images/grelha.jpg' },
    { category: 'Veggie', title: 'Burger de Pinhão', desc: 'Hambúrguer vegetariano de pinhão com rúcula, tomate confitado e maionese de ervas. Sabor catarinense.', image: './images/veggie.jpg' },
    { category: 'Acompanhamento', title: 'Batata Loaded', desc: 'Batata frita crocante coberta com cheddar, bacon, cebolinha e molho especial. Porção generosa.', image: './images/batata.jpg' },
    { category: 'Cervejas', title: 'Carta de Cervejas', desc: 'Seleção de cervejas artesanais e importadas. Rótulos cuidadosamente escolhidos para harmonizar.', image: './images/cervejas.jpg' },
    { category: 'Na Brasa', title: 'Costela Defumada', desc: 'Costela bovina defumada por 12 horas na lenha. Desfiada e servida no pão brioche com coleslaw.', image: './images/grelha.jpg' },
  ]
  return (
    <section className="cardapio" id="cardapio">
      <div className="container">
        <Reveal><div className="section-label">Cardápio</div><h2 className="section-title">Do fogo para<br />o seu <em>prato</em></h2></Reveal>
        <div className="cardapio-grid">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={p.image} alt={p.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{p.category}</div>
                  <h3 className="cardapio-card-title">{p.title}</h3>
                  <p className="cardapio-card-desc">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const features = [
    { icon: FireSimple, title: 'Fogo de Lenha Real', desc: 'Cada hambúrguer é grelhado sobre carvão e lenha de verdade. O defumado natural faz toda a diferença.' },
    { icon: CookingPot, title: 'Tudo Artesanal', desc: 'Blend exclusivo, pão feito sob medida, molhos da casa. Nada industrializado, tudo com alma.' },
    { icon: Leaf, title: 'Opção Vegetariana', desc: 'Burger de pinhão premiado. Sabor catarinense para quem não come carne mas ama um bom hambúrguer.' },
    { icon: BeerBottle, title: 'Cervejas Artesanais', desc: 'Carta com rótulos selecionados de cervejarias artesanais. Harmonização perfeita com nossos burgers.' },
  ]
  return (
    <section className="experience" id="diferenciais">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Diferenciais</div><h2 className="section-title">Não é só hambúrguer,<br />é uma <em>experiência</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/hero-burger.jpg" alt="Hambúrguer Na Lenha" />
              <div className="experience-image-badge"><span className="number">4.8</span><span className="label">Nota no Google</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-burger.jpg', alt: 'Hambúrguer' },
    { src: './images/grelha.jpg', alt: 'Grelha' },
    { src: './images/veggie.jpg', alt: 'Veggie' },
    { src: './images/batata.jpg', alt: 'Batata' },
    { src: './images/cervejas.jpg', alt: 'Cervejas' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Galeria</div><h2 className="section-title">Feito com <em>fogo e paixão</em></h2></Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => (<Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const days = [
    { day: 'Segunda', hours: 'Fechado', note: 'Descanso' },
    { day: 'Terça a Quinta', hours: '18h às 23h', note: '' },
    { day: 'Sexta e Sábado', hours: '18h às 23h', note: 'Delivery até 22h30' },
    { day: 'Domingo', hours: '18h às 23h', note: '' },
  ]
  return (
    <section className="experience" id="horarios" style={{ background: 'var(--charcoal-light)' }}>
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Horários & Delivery</div><h2 className="section-title">Nos Ingleses,<br /><em>pertinho de você</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Venha nos visitar no salão ou peça delivery pelo WhatsApp. Nos finais de semana, recomendamos reserva antecipada.</p></Reveal>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {days.map((d, i) => (
                <Reveal key={d.day} delay={0.1 + i * 0.08}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'var(--charcoal)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--smoke)' }}>{d.day}</div>
                      {d.note && <div style={{ fontSize: '0.7rem', color: 'var(--ember)', marginTop: 2 }}>{d.note}</div>}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--amber)', fontWeight: 700 }}>{d.hours}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.5}>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Pedir Delivery</a>
                <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/batata.jpg" alt="Acompanhamentos" />
              <div className="experience-image-badge"><span className="number">381</span><span className="label">Seguidores no IG</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Melhor hambúrguer dos Ingleses, disparado! A carne é suculenta, o pão artesanal é perfeito e o sabor defumado da lenha faz toda a diferença. Atendimento nota 10.', author: 'Seba L.', rating: 5 },
    { text: 'Ingredientes de primeira qualidade e atendimento excelente e eficiente. O Cheddar do Chef é imperdível. Ambiente agradável e preço justo para a qualidade.', author: 'Marcos V.', rating: 5 },
    { text: 'O burger de pinhão é sensacional! Mesmo sendo vegetariano, tem um sabor incrível. As cervejas artesanais harmonizam perfeitamente. Espaço super aconchegante.', author: 'Ana P.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliações Google</div><h2 className="section-title">O que dizem nossos <em>clientes</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.8</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight="fill" />)}</div>
                <div className="reviews-count">300+ avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div>
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">{r.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Bora de burger<br /><em>na lenha</em>?</h2>
          <p>Peça pelo WhatsApp ou venha nos visitar nos Ingleses.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Pedir pelo WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: Motorcycle, title: 'Delivery', text: 'Pedidos pelo WhatsApp' },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localização</div><h2 className="section-title">Venha nos <em>visitar</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (<Reveal key={item.title} delay={i * 0.1}><div className="contact-item"><div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div><div><h4>{item.title}</h4><p>{item.text}</p></div></div></Reveal>))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" /> Pedir Agora</a></Reveal>
          </div>
          <Reveal delay={0.2}><div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1!2d-48.3936!3d-27.4311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzUyLjAiUyA0OMKwMjMnMzcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Localização Na Lenha Hamburgueria" loading="lazy" /></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-text">Na Lenha</div>
            <p className="footer-brand-desc">Hamburgueria artesanal com forno a lenha. Blend exclusivo, pão artesanal, cervejas selecionadas. Ingleses, Florianópolis.</p>
          </div>
          <div>
            <div className="footer-title">Navegação</div>
            <ul className="footer-links"><li><a href="#sobre">Sobre</a></li><li><a href="#cardapio">Cardápio</a></li><li><a href="#diferenciais">Diferenciais</a></li><li><a href="#avaliacoes">Avaliações</a></li><li><a href="#contato">Contato</a></li></ul>
          </div>
          <div>
            <div className="footer-title">Contato</div>
            <ul className="footer-links"><li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li><li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@na_lenha77</a></li><li><a>{ADDRESS}</a></li></ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Na Lenha Hamburgueria — Todos os direitos reservados</span>
          <div className="footer-social"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstagramLogo size={20} weight="regular" /></a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a></div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() { return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a> }

export default function App() {
  return (
    <><Navbar /><main><Hero /><About /><Menu /><Differentials /><Gallery /><Schedule /><Reviews /><CtaSection /><Contact /></main><Footer /><WhatsAppFloat /></>
  )
}
