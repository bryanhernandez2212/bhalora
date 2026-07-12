import { useState } from 'react'
import './App.css'
import imgXv from './assets/invitation_xv.png'
import imgWeddingBotanic from './assets/invitation_wedding_botanic.png'
import imgBirthday from './assets/invitation_birthday.png'
import imgWeddingGold from './assets/invitation_wedding_gold.png'
import imgLavender from './assets/invitation_lavender.png'
import logoHorizontal from './assets/bhalora_logo_horizontal_blanco.png'

// Portafolio de Invitaciones con metadatos de características premium
const portfolioItems = [
  {
    id: 1,
    title: 'XV Años Real Elegante',
    category: 'XV Años',
    image: imgXv,
    description: 'Una invitación digna de la realeza. Combina tonos azul marino profundo con destellos dorados metálicos, tipografía caligráfica clásica y ornamentos delicados.',
    features: ['Confirmación RSVP', 'Música de Fondo', 'Ubicación GPS / Maps', 'Cuenta Regresiva']
  },
  {
    id: 2,
    title: 'Boda Minimalista Botánica',
    category: 'Bodas',
    image: imgWeddingBotanic,
    description: 'La sofisticación de la simplicidad. Diseñada para parejas contemporáneas, con follaje de eucalipto en acuarela, tipografía serif limpia y un ambiente fresco y natural.',
    features: ['Mesa de Regalos', 'RSVP Digital', 'Galería de Fotos', 'Itinerario de Evento']
  },
  {
    id: 3,
    title: 'Cumpleaños Neon Glow Party',
    category: 'Cumpleaños',
    image: imgBirthday,
    description: 'Perfecto para celebraciones vibrantes de jóvenes y adultos. Tonos neón sobre fondo oscuro con elementos dinámicos que inician la fiesta desde la pantalla de tus invitados.',
    features: ['Código de Vestimenta', 'Playlist sugerida', 'Ubicación GPS', 'Cuenta Regresiva']
  },
  {
    id: 4,
    title: 'Boda Glamour Dorado',
    category: 'Bodas',
    image: imgWeddingGold,
    description: 'Diseño inspirado en el Art Déco con patrones geométricos dorados sobre un fondo negro profundo. Ideal para bodas de noche con un código de vestimenta elegante.',
    features: ['RSVP Digital', 'Mesa de Regalos', 'Alojamiento recomendado', 'Música de Fondo']
  },
  {
    id: 5,
    title: 'XV Años Lavanda Romántico',
    category: 'XV Años',
    image: imgLavender,
    description: 'Diseño romántico en tonalidades lila y lavanda con detalles en acuarela floral y bordes plateados. Transmite una sensación de ensueño y juventud.',
    features: ['Cuenta Regresiva', 'Música de Fondo', 'Galería de Fotos', 'Confirmación RSVP']
  }
]

const services = [
  {
    id: 1,
    icon: '✨',
    title: 'Diseño de Autor',
    description: 'Invitaciones exclusivas y personalizadas, adaptando la paleta de colores y elementos visuales a la temática exacta de tu evento.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Interactivas y Responsivas',
    description: 'Tus invitados podrán confirmar asistencia en un clic, ver el mapa GPS, escuchar la melodía del evento y guardar la fecha.'
  },
  {
    id: 3,
    icon: '📅',
    title: 'Entrega Programada',
    description: 'Trabajamos bajo una planificación detallada. Tu invitación estará lista en la fecha acordada previamente para coordinar tus preparativos sin contratiempos.'
  }
]

const invitationTypes = [
  {
    id: 1,
    title: 'Bodas',
    icon: '💍',
    desc: 'Diseños que reflejan romance, elegancia y sobriedad. Cuentan con itinerarios de boda, mapas para la ceremonia y banquete, mesa de regalos y confirmación RSVP directa.'
  },
  {
    id: 2,
    title: 'XV Años',
    icon: '👑',
    desc: 'Invitaciones modernas y llenas de estilo para las quinceañeras. Incluye cuenta regresiva, sección de padrinos, sugerencia de vestimenta (dress code) y playlist.'
  },
  {
    id: 3,
    title: 'Cumpleaños',
    icon: '🎉',
    desc: 'Desde fiestas temáticas infantiles hasta celebraciones formales para adultos. Creamos el ambiente ideal con galerías de fotos de los mejores recuerdos y botones dinámicos.'
  },
  {
    id: 4,
    title: 'Bautizos',
    icon: '🕊️',
    desc: 'Diseños delicados en tonos pastel o acuarela para la presentación de los más pequeños. Incluye mapas interactivos de la iglesia y el lugar del banquete.'
  },
  {
    id: 5,
    title: 'Graduaciones',
    icon: '🎓',
    desc: 'Diseños elegantes y académicos para celebrar el fin de ciclos escolares. Cuenta con itinerario de la ceremonia de gala, recepción y confirmación de pases.'
  },
  {
    id: 6,
    title: 'Y más...',
    icon: '✨',
    desc: 'Baby Showers, Primeras Comuniones, Aniversarios corporativos, Revelación de género o cualquier acontecimiento especial que desees celebrar con estilo.'
  }
]

const packages = [
  {
    id: 1,
    name: 'Básico',
    price: '$300–$500 MXN',
    features: [
      'Diseño personalizado profesional',
      'Enlace URL único para compartir',
      'Optimizado para celulares y tablets',
      'Información completa (fecha, hora, lugar)'
    ],
    className: ''
  },
  {
    id: 2,
    name: 'Intermedio',
    price: '$500–$800 MXN',
    features: [
      'Todo lo incluido en el Plan Básico',
      'Animaciones de entrada y transiciones',
      'Música de fondo personalizada',
      'Confirmación RSVP directa a tu WhatsApp'
    ],
    className: 'popular'
  },
  {
    id: 3,
    name: 'Premium',
    price: '$800–$1,200+ MXN',
    features: [
      'Todo lo incluido en el Plan Intermedio',
      'Gestión y administración de la lista de invitados',
      'Galería de fotos autoadministrable (sube las fotos que quieras)',
      'Panel intuitivo para editar textos y detalles del evento'
    ],
    className: 'premium'
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Valeria & Fernando',
    role: 'Novios 2025',
    stars: '★★★★★',
    text: 'La mejor decisión para nuestra boda. A los invitados les encantó la música de fondo y la facilidad de confirmar asistencia. ¡Súper profesionales!'
  },
  {
    id: 2,
    name: 'Lorena Méndez',
    role: 'Mamá de quinceañera',
    stars: '★★★★★',
    text: 'El diseño lavanda superó nuestras expectativas. La atención al detalle de Bryan fue excepcional, siempre respondiendo rápido mis dudas.'
  }
]

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState(null)

  // Filtrado de portafolio
  const filteredPortfolio = activeCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoHorizontal} alt="Bhalora" style={{ height: '48px', display: 'block' }} />
          </div>
          <div className="navbar-menu">
            <a href="#inicio" className="navbar-link">Inicio</a>
            <a href="#portafolio" className="navbar-link">Portafolio</a>
            <a href="#tipos" className="navbar-link">Invitaciones</a>
            <a href="#paquetes" className="navbar-link">Paquetes</a>
            <a href="#servicios" className="navbar-link">Servicios</a>
            <a href="#contacto" className="navbar-link">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <span className="hero-badge">Estilo • Interactividad • Tecnología</span>
          <h1 className="hero-title">
            Invitaciones Digitales <br />
            que <span className="highlight">Enamoran</span> a tus Invitados
          </h1>
          <p className="hero-subtitle">
            Crea una primera impresión inolvidable para tu Boda, XV Años o Cumpleaños. Diseños elegantes con confirmación RSVP, música y mapas interactivos.
          </p>
          <div className="hero-actions">
            <a href="#portafolio" className="btn-primary">Ver Portafolio</a>
            <a href="#contacto" className="btn-secondary">Cotizar / Redes Sociales</a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">Portafolio de Diseños</h2>
          <p className="section-subtitle">Explora nuestras últimas creaciones premium listas para personalizar</p>
        </div>

        {/* Categorías de Filtro */}
        <div className="filter-container">
          {['Todos', 'Bodas', 'XV Años', 'Cumpleaños'].map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Invitaciones */}
        <div className="portfolio-grid">
          {filteredPortfolio.map(item => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="portfolio-image-wrapper">
                <img src={item.image} alt={item.title} className="portfolio-image" loading="lazy" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-card-category">{item.category}</span>
                <h3 className="portfolio-card-title">{item.title}</h3>
                <span className="portfolio-card-cta">Detalles y características</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal de Detalle */}
      {selectedItem && (
        <div className="lightbox" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedItem(null)}>×</button>
            <img src={selectedItem.image} alt={selectedItem.title} className="lightbox-img" />
            <div className="lightbox-details">
              <span className="lightbox-category">{selectedItem.category}</span>
              <h3 className="lightbox-title">{selectedItem.title}</h3>
              <p className="lightbox-desc">{selectedItem.description}</p>

              <div className="lightbox-features">
                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}>Características Incluidas:</h4>
                {selectedItem.features.map((feature, idx) => (
                  <div key={idx} className="lightbox-feature-item">
                    <span className="lightbox-feature-icon">✨</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedItem(null);
                  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Preguntar por este estilo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invitation Types Section */}
      <section id="tipos" className="services-section">
        <div className="section-header">
          <h2 className="section-title">Tipos de Invitaciones que Diseñamos</h2>
          <p className="section-subtitle">Creamos experiencias interactivas a la medida para todo tipo de momentos especiales</p>
        </div>
        <div className="services-grid">
          {invitationTypes.map(type => (
            <div key={type.id} className="service-card" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <span className="service-icon" style={{ fontSize: '2.2rem', marginBottom: 0 }}>{type.icon}</span>
                <h3 className="service-title" style={{ marginBottom: 0, fontSize: '1.4rem' }}>{type.title}</h3>
              </div>
              <p className="service-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section">
        <div className="section-header">
          <h2 className="section-title">¿Qué Incluyen Nuestras Invitaciones?</h2>
          <p className="section-subtitle">Ofrecemos una experiencia digital completa para ti y tus invitados</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="services-section">
        <div className="section-header">
          <h2 className="section-title">Nuestros Paquetes y Precios</h2>
          <p className="section-subtitle">Elige el plan ideal para tu evento con opciones totalmente personalizables</p>
        </div>
        <div className="pricing-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className={`pricing-card ${pkg.className}`}>
              <h3 className="pricing-name">{pkg.name}</h3>
              <div className="pricing-price">{pkg.price}</div>
              <ul className="pricing-features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="pricing-feature-item">
                    <span className="pricing-feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/529671636739?text=Hola%20Bryan,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20${pkg.name}%20de%20invitaciones%20digitales.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', marginTop: 'auto' }}
              >
                Elegir Plan {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="calculator-section" style={{ textAlign: 'center' }}>
        <div className="section-header">
          <h2 className="section-title">¿Listo para comenzar o tienes dudas?</h2>
          <p className="section-subtitle">Ponte en contacto directo conmigo a través de cualquiera de mis redes para platicar sobre tu invitación ideal y darte una propuesta personalizada sin compromisos.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a
            href="https://wa.me/529671636739?text=Hola%20Bryan,%20me%20gustar%C3%ADa%20cotizar%20una%20invitaci%C3%B3n%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>💬</span> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/bhalo_ra?igsh=a2t2enc0Y3ZucjFx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>📸</span> Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1DAaiSNUcz/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>📘</span> Facebook
          </a>
          <a
            href="mailto:bhalora428@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>✉️</span> Correo
          </a>
        </div>
      </section>



      <footer className="footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <img src={logoHorizontal} alt="Bhalora Logo" style={{ height: '38px', opacity: '0.8' }} />
        <p>© 2026 Bhalora - Invitaciones Interactivas Premium. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
