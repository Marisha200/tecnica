import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Coffee, 
  Sparkles, 
  Check, 
  Leaf, 
  Compass, 
  Heart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

import japandiInterior from './assets/images/japandi_zen_interior_1783347825070.jpg';
import japandiDetail from './assets/images/japandi_zen_detail_1783347839165.jpg';

export default function App() {
  // Target date is July 10, 2026, 23:59:59 GMT-3 (Buenos Aires).
  // In UTC this is July 11, 2026, 03:00:00 Z.
  const targetDate = new Date("2026-07-12T03:00:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeftData = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false
        };
      }
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5491149801624";
    const text = `Hola! Me gustaría reservar mi lugar para el encuentro "Más allá de la técnica" del Sábado 18 de julio.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  const explorationItems = [
    { text: "El terapeuta como instrumento de acompañamiento." },
    { text: "Los patrones, creencias e historias que aún influyen en nuestra práctica." },
    { text: "La coherencia entre lo que enseñamos, sostenemos y vivimos." },
    { text: "La espiritualidad llevada a la experiencia cotidiana." },
    { text: "La presencia, la autenticidad y el camino del facilitador." },
    { text: "Una mirada integradora que reúne cuerpo, conciencia, simbolismo y espiritualidad práctica." }
  ];

  const benefitsItems = [
    { text: "Una comprensión más profunda de vos y de tu manera de acompañar." },
    { text: "Mayor coherencia entre tu práctica espiritual y tu vida cotidiana." },
    { text: "Herramientas de reflexión e integración para seguir profundizando tu propio camino." },
    { text: "Una nueva mirada sobre la presencia como herramienta de transformación." },
    { text: "La posibilidad de reconectar con el propósito y el sentido de acompañar." },
    { text: "La certeza de que la herramienta más importante de cualquier práctica terapéutica es la propia presencia." }
  ];

  const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=M%C3%A1s+All%C3%A1+de+la+T%C3%A9cnica+-+Encuentro+de+Profundizaci%C3%B3n&dates=20260718T180000Z/20260718T223000Z&details=Encuentro+de+profundizaci%C3%B3n+para+terapeutas,+maestros+de+Reiki+y+facilitadores.+Contacto:+%2B5491149801624&location=Almagro,+Buenos+Aires,+Argentina";

  return (
    <div className="min-h-screen bg-zen-linen selection:bg-zen-sand selection:text-zen-olive text-stone-800 font-sans relative pb-16 border-[12px] md:border-[20px] border-zen-sand/80">
      
      {/* Floating active countdown banner at the very top center */}
      {!timeLeft.expired && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-zen-sage text-white px-6 md:px-10 py-2 md:py-2.5 text-[9px] md:text-[11px] tracking-[0.25em] uppercase rounded-b-xl shadow-md z-40 font-semibold font-sans text-center transition-all duration-300 whitespace-nowrap">
          Lanzamiento: {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </div>
      )}

      {/* Header / Navbar */}
      <nav id="main-navigation" className="w-full py-6 md:py-8 px-6 md:px-16 flex justify-between items-center border-b border-zen-sand/50 backdrop-blur-md sticky top-0 z-30 bg-zen-linen/90">
        <div className="flex items-center gap-3">
          <Leaf className="text-zen-sage" size={18} />
          <span className="font-serif text-xl md:text-2xl tracking-[0.1em] text-zen-olive font-semibold">Rincón Zen</span>
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] tracking-[0.2em] uppercase text-stone-600 font-bold font-sans">
          <a href="#propuesta" className="hover:text-zen-sage transition-colors">La Propuesta</a>
          <a href="#explorar" className="hover:text-zen-sage transition-colors">Exploración</a>
          <a href="#llevaras" className="hover:text-zen-sage transition-colors">Beneficios</a>
          <a href="#detalles" className="hover:text-zen-sage transition-colors">Información</a>
        </div>
        <button 
          onClick={handleWhatsAppClick}
          id="nav-cta-btn"
          className="px-5 py-2.5 rounded-full border border-zen-olive text-zen-olive hover:bg-zen-olive hover:text-white transition-all duration-300 text-[9px] uppercase tracking-[0.2em] font-bold font-sans cursor-pointer"
        >
          Reservar Cupo
        </button>
      </nav>

      {/* Hero Banner Section with Editorial Bold Typography & Japandi aesthetic */}
      <header id="hero-section" className="relative w-full py-20 lg:py-32 px-6 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-b border-zen-sand/40">
        <div className="absolute inset-0 z-0">
          <img 
            src={japandiInterior} 
            alt="Serene Zen Japandi Interior" 
            className="w-full h-full object-cover opacity-20 filter contrast-105 transition-all duration-750"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zen-linen/50 to-zen-linen"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-zen-sand text-zen-sage text-[9px] tracking-[0.25em] uppercase font-bold font-sans mb-6">
            <Sparkles size={10} className="text-zen-sage" />
            Encuentro Presencial en Almagro
          </span>
          
          <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] text-zen-olive mb-6 uppercase font-bold max-w-4xl">
            MÁS ALLÁ DE <br />
            <span className="italic font-light text-zen-sage">LA TÉCNICA</span>
          </h1>
          
          <p id="hero-subtitle" className="font-serif italic text-xl sm:text-2xl text-stone-600 mb-8 max-w-2xl font-light leading-relaxed">
            "La herramienta más importante sos vos"
          </p>

          <div className="w-16 h-[2px] bg-zen-sand mb-8"></div>

          <p id="hero-description" className="font-sans text-sm sm:text-base md:text-lg text-stone-500 max-w-3xl leading-relaxed mb-10 font-light">
            Un encuentro de profundización para terapeutas, maestros de Reiki y facilitadores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={handleWhatsAppClick}
              className="px-8 py-4 rounded-full bg-zen-olive text-white shadow-lg hover:bg-stone-800 transition-all duration-300 font-bold font-sans tracking-[0.2em] text-[10px] uppercase cursor-pointer"
            >
              Reservar mi Lugar 🌿
            </button>
            <a 
              href="#propuesta" 
              className="px-8 py-4 rounded-full bg-white/70 border border-zen-sand text-stone-700 hover:bg-stone-50 transition-all duration-300 font-bold font-sans tracking-[0.2em] text-[10px] uppercase"
            >
              Leer la propuesta
            </a>
          </div>
        </div>
      </header>

      {/* Countdown Timer & Price Highlight */}
      <section id="countdown-section" className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg border border-zen-sand flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Prices block */}
          <div className="text-left w-full lg:w-1/2 lg:border-r lg:border-zen-sand lg:pr-8">
            <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-sans font-extrabold text-zen-sage mb-3">
              Arancel Promocional
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1 bg-zen-card p-4 rounded-lg border border-stone-100">
                <p className="text-[9px] text-stone-500 uppercase tracking-[0.15em] font-bold font-sans">Valor lanzamiento</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl md:text-3xl font-bold text-zen-olive">$45.000</span>
                </div>
                <p className="text-[9px] text-zen-sage font-medium italic mt-1">*Hasta el 10 de julio incluido</p>
              </div>
              
              <div className="space-y-1 p-4 rounded-lg border border-dashed border-stone-200">
                <p className="text-[9px] text-stone-500 uppercase tracking-[0.15em] font-bold font-sans">Valor general</p>
                <span className="font-serif text-2xl font-light text-stone-600">$50.000</span>
                <p className="text-[9px] text-stone-400 mt-1">Precio a partir del 11 de julio</p>
              </div>
            </div>
          </div>

          {/* Countdown timer block */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
            {timeLeft.expired ? (
              <div className="text-center lg:text-left">
                <p className="text-stone-500 text-[9px] uppercase tracking-[0.2em] font-bold font-sans mb-1">Valor Lanzamiento Finalizado</p>
                <p className="font-serif text-base text-stone-700">El descuento especial de preventa ha concluido. Registrate con el valor general.</p>
              </div>
            ) : (
              <div className="w-full text-center lg:text-left">
                <p className="text-stone-500 text-[9px] uppercase tracking-[0.2em] font-bold font-sans mb-3">El beneficio promocional finaliza en:</p>
                
                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto lg:mx-0">
                  <div className="bg-zen-card p-3 rounded-lg flex flex-col items-center border border-zen-sand">
                    <span className="font-serif text-2xl font-bold text-zen-olive">{timeLeft.days}</span>
                    <span className="text-[8px] uppercase tracking-widest text-stone-500 font-sans font-bold">Días</span>
                  </div>
                  <div className="bg-zen-card p-3 rounded-lg flex flex-col items-center border border-zen-sand">
                    <span className="font-serif text-2xl font-bold text-zen-olive">{timeLeft.hours}</span>
                    <span className="text-[8px] uppercase tracking-widest text-stone-500 font-sans font-bold">Horas</span>
                  </div>
                  <div className="bg-zen-card p-3 rounded-lg flex flex-col items-center border border-zen-sand">
                    <span className="font-serif text-2xl font-bold text-zen-olive">{timeLeft.minutes}</span>
                    <span className="text-[8px] uppercase tracking-widest text-stone-500 font-sans font-bold">Min</span>
                  </div>
                  <div className="bg-zen-card p-3 rounded-lg flex flex-col items-center border border-zen-sand">
                    <span className="font-serif text-2xl font-bold text-zen-olive">{timeLeft.seconds}</span>
                    <span className="text-[8px] uppercase tracking-widest text-stone-500 font-sans font-bold">Seg</span>
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={handleWhatsAppClick}
              className="mt-5 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] font-bold font-sans text-zen-olive hover:text-zen-sage transition-colors cursor-pointer"
            >
              Asegurar mi cupo promocional <ChevronRight size={12} />
            </button>
          </div>

        </div>
      </section>

      {/* La Propuesta / Introducción */}
      <section id="propuesta" className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Visual card of hands */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 bg-zen-sand/20 rounded-xl -rotate-1.5 z-0"></div>
          <div className="relative z-10 bg-white p-4 rounded-xl shadow-md border border-zen-sand">
            <img 
              src={japandiDetail} 
              alt="Cozy Japandi Zen Leaf Detail" 
              className="w-full h-auto rounded-lg object-cover aspect-square transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 p-1 text-center">
              <p className="font-serif italic text-stone-500 text-sm">"La profundidad de tu acompañamiento está íntimamente ligada a la profundidad con la que te has habitado a vos mismo."</p>
            </div>
          </div>
          {/* absolute decorative heart */}
          <div className="absolute -bottom-5 -left-5 bg-zen-sage text-white p-3.5 rounded-full shadow-lg z-20">
            <Heart size={18} className="fill-current" />
          </div>
        </div>

        {/* Text of proposal */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-2 text-zen-sage text-[9px] uppercase tracking-[0.25em] font-extrabold font-sans">
            <Compass size={12} />
            El Camino del Acompañante
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-none uppercase tracking-tight font-bold">
            ¿Cómo llevar todo lo aprendido a la vida?
          </h2>

          <div className="space-y-4 text-stone-600 leading-relaxed font-sans text-sm sm:text-base font-light">
            <p>
              A lo largo del camino vamos incorporando herramientas, técnicas, formaciones y conocimientos. Sin embargo, llega un momento en el que aparece una pregunta más profunda:
            </p>
            
            <blockquote className="border-l-4 border-zen-sage pl-5 my-6 font-serif italic text-xl md:text-2xl text-zen-olive py-1 bg-zen-card rounded-r-lg">
              ¿Cómo llevar todo eso a la vida?
            </blockquote>

            <p className="font-semibold text-stone-900">
              Porque la verdadera transformación no ocurre cuando aprendemos más, sino cuando comenzamos a habitar aquello que ya sabemos.
            </p>
            
            <p>
              Este encuentro es una invitación a ir más allá de la técnica y volver la mirada hacia quien sostiene la práctica: el terapeuta, el facilitador, el ser humano que acompaña.
            </p>
            
            <p>
              Un espacio para profundizar en nuestro propio camino interior y reconocer cómo nuestra historia, nuestros patrones, nuestra presencia y nuestra forma de habitar la vida impactan en la manera en que acompañamos a otros.
            </p>
          </div>
        </div>
      </section>

      {/* Qué vamos a explorar - Grid Cards */}
      <section id="explorar" className="bg-zen-card py-20 lg:py-28 border-y border-zen-sand">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-zen-sage text-[9px] uppercase tracking-[0.25em] font-extrabold font-sans block mb-2">Programa</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 uppercase tracking-tight font-bold">¿Qué vamos a explorar?</h2>
            <div className="w-12 h-[2px] bg-zen-sage mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorationItems.map((item, index) => (
              <div 
                key={index}
                id={`explorar-card-${index}`}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md border border-zen-sand hover:border-zen-sage transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zen-card border border-zen-sand text-zen-sage flex items-center justify-center mb-6 font-serif italic font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-stone-700 leading-relaxed font-sans text-sm sm:text-base font-light">
                    {item.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
                  <span className="text-zen-sage text-[10px] uppercase tracking-[0.15em] font-bold font-sans">Eje Temático</span>
                  <span className="font-serif italic text-stone-400">🌿</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Qué te llevarás - Elegance List */}
      <section id="llevaras" className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-zen-sage text-[9px] uppercase tracking-[0.25em] font-extrabold font-sans block">Integración</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 uppercase tracking-tight font-bold">¿Qué te llevarás de este encuentro?</h2>
            <div className="w-12 h-[2px] bg-zen-sage my-4"></div>
            <p className="text-stone-600 leading-relaxed font-sans font-light text-sm sm:text-base">
              Este espacio está diseñado para que te vayas no con más teorías que memorizar, sino con un sentido renovado de tu propia práctica y del valor inigualable de tu presencia.
            </p>
            <div className="p-6 rounded-lg bg-zen-card border border-zen-sand space-y-2">
              <span className="text-zen-olive text-[9px] uppercase tracking-[0.15em] font-extrabold font-sans">Un Regalo para tu Alma</span>
              <p className="text-sm italic text-stone-700 font-serif leading-relaxed">"La certeza de que la herramienta más importante de cualquier práctica terapéutica es la propia presencia."</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {benefitsItems.map((item, index) => (
              <div 
                key={index}
                id={`beneficio-item-${index}`}
                className="bg-white border border-zen-sand rounded-lg p-5 flex items-start gap-4 hover:border-zen-sage transition-all duration-300 text-left"
              >
                <div className="text-zen-sage mt-1">
                  <Sparkles size={14} className="fill-current" />
                </div>
                <p className="text-stone-700 font-sans font-light leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detalles del Evento (📅 Ficha Técnica) */}
      <section id="detalles" className="bg-zen-olive text-white py-20 px-6 md:px-16 relative overflow-hidden">
        {/* Large background decorative date numbers */}
        <div className="absolute bottom-4 right-4 flex items-center opacity-10 pointer-events-none text-white select-none">
          <span className="text-[120px] md:text-[180px] font-bold font-serif leading-none">18</span>
          <span className="text-sm md:text-2xl uppercase tracking-[0.4em] origin-bottom-left rotate-[-90deg] translate-x-20 md:translate-x-28 -translate-y-10 md:-translate-y-14 font-sans font-bold">JULIO</span>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-zen-sand text-[9px] uppercase tracking-[0.25em] font-extrabold font-sans">Información Práctica</span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2 tracking-wide uppercase font-bold">Detalles del Encuentro</h2>
            <div className="w-12 h-px bg-zen-sand/40 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zen-sand mb-4">
                <Calendar size={18} />
              </div>
              <h3 className="font-serif text-lg tracking-wide mb-1 uppercase font-medium">Fecha</h3>
              <p className="text-stone-200 text-sm">Sábado 18 de Julio</p>
              <p className="text-zen-sand text-[9px] mt-1.5 font-bold uppercase tracking-wider font-sans bg-white/10 px-2 py-0.5 rounded">Año 2026</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zen-sand mb-4">
                <Clock size={18} />
              </div>
              <h3 className="font-serif text-lg tracking-wide mb-1 uppercase font-medium">Horario</h3>
              <p className="text-stone-200 text-sm">15:00 a 19:30 hs</p>
              <p className="text-zen-sand text-[9px] mt-1.5 font-bold uppercase tracking-wider font-sans bg-white/10 px-2 py-0.5 rounded">Coffee Incluido</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zen-sand mb-4">
                <MapPin size={18} />
              </div>
              <h3 className="font-serif text-lg tracking-wide mb-1 uppercase font-medium">Modalidad</h3>
              <p className="text-stone-200 text-sm">Presencial</p>
              <p className="text-zen-sand text-[9px] mt-1.5 font-bold uppercase tracking-wider font-sans bg-white/10 px-2 py-0.5 rounded">Zona: Almagro</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zen-sand mb-4">
                <Coffee size={18} />
              </div>
              <h3 className="font-serif text-lg tracking-wide mb-1 uppercase font-medium">Servicios</h3>
              <p className="text-stone-200 text-sm">Incluye coffee break</p>
              <p className="text-zen-sand text-[9px] mt-1.5 font-bold uppercase tracking-wider font-sans bg-white/10 px-2 py-0.5 rounded">Espacio Amable</p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-zen-olive hover:bg-zen-sand transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold font-sans flex items-center gap-2 shadow cursor-pointer"
            >
              <Calendar size={12} />
              Añadir a Google Calendar
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold font-sans cursor-pointer"
            >
              Contactános
            </button>
          </div>

        </div>
      </section>

      {/* Elegante Llamada a la Acción Japandi para Reservas directas en WhatsApp */}
      <section id="reservar" className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="bg-white rounded-xl shadow-md border border-zen-sand overflow-hidden p-8 md:p-12 text-center relative">
          {/* subtle background pattern feel */}
          <div className="absolute top-0 left-0 w-2 h-full bg-zen-sage"></div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-zen-sage text-[9px] uppercase tracking-[0.25em] font-extrabold font-sans block">Inscripción</span>
            
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 uppercase tracking-tight font-bold">
              Reservá tu lugar
            </h2>
            
            <p className="text-stone-600 leading-relaxed font-sans text-sm md:text-base font-light">
              Regalate un espacio para profundizar en vos, en tu práctica y en el camino que elegiste recorrer. Los cupos son estrictamente limitados para preservar la intimidad y profundidad de la experiencia presencial.
            </p>
            
            <div className="py-4">
              <button 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-zen-olive hover:bg-stone-800 text-white shadow-md transition-all duration-300 font-bold font-sans tracking-[0.2em] text-xs uppercase cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Reservar vía WhatsApp 🌿</span>
                <ChevronRight size={14} />
              </button>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer styled beautifully */}
      <footer id="page-footer" className="max-w-6xl mx-auto px-6 pt-12 border-t border-zen-sand flex flex-col sm:flex-row justify-between items-center gap-6 text-stone-500 text-xs font-sans font-bold uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <Leaf className="text-zen-sage" size={14} />
          <span className="font-serif tracking-widest text-zen-olive font-extrabold lowercase text-lg">Rincón Zen</span>
          <span className="text-[10px] font-normal tracking-wide text-stone-400">© 2026. Todos los derechos reservados.</span>
        </div>
        <div className="flex gap-6 text-[9px] tracking-widest">
          <a href="#propuesta" className="hover:text-zen-sage transition-colors">La Propuesta</a>
          <a href="#explorar" className="hover:text-zen-sage transition-colors">Programa</a>
          <a href="#detalles" className="hover:text-zen-sage transition-colors">Detalles</a>
          <a href="https://wa.me/5491149801624" target="_blank" rel="noreferrer" className="hover:text-zen-sage transition-colors">Contacto</a>
        </div>
      </footer>

    </div>
  );
}
