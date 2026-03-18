import { motion, AnimatePresence } from 'motion/react';
import { Activity, Cpu, Wrench, Zap, ShieldAlert, ChevronRight, Terminal, Crosshair, Gauge, MessageCircle, Loader2, Plus, Minus, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';

const mockServices = [
  { id: "01.A", title: "Diagnóstico Telemétrico", desc: "Escaneo profundo de la ECU. Análisis de más de 10,000 puntos de datos en tiempo real para identificar fallos antes de que ocurran.", icon: <Activity className="w-6 h-6" />, details: { time: "45-60 MIN", tools: ["Escáner OBD2 OEM Bidireccional", "Osciloscopio Digital de 4 Canales", "Analizador de Red CAN/LIN"], cost: "$80 - $150 USD", link: "#protocolo-01-a" } },
  { id: "01.B", title: "Optimización de Motor", desc: "Ajuste de precisión milimétrica. Reprogramación de parámetros para maximizar rendimiento, torque y eficiencia térmica.", icon: <Zap className="w-6 h-6" />, details: { time: "2-4 HORAS", tools: ["Dinamómetro de Chasis", "Interfaz de Reprogramación Flash", "Sondas Lambda de Banda Ancha"], cost: "$350 - $800 USD", link: "#protocolo-01-b" } },
  { id: "01.C", title: "Calibración de Chasis", desc: "Alineación láser 3D y balanceo dinámico. Restauración de la geometría original de fábrica para un manejo perfecto.", icon: <Crosshair className="w-6 h-6" />, details: { time: "90 MIN", tools: ["Alineadora Láser 3D de Alta Precisión", "Balanceadora Computarizada", "Torquímetro Digital Calibrado"], cost: "$120 - $250 USD", link: "#protocolo-01-c" } },
  { id: "01.D", title: "Mantenimiento Preventivo", desc: "Reemplazo de fluidos sintéticos de grado aeroespacial y revisión de sistemas de seguridad críticos.", icon: <ShieldAlert className="w-6 h-6" />, details: { time: "60-120 MIN", tools: ["Fluidos Sintéticos de Alto Rendimiento", "Filtros de Especificación OEM", "Cámaras de Inspección Endoscópica"], cost: "$200 - $450 USD", link: "#protocolo-01-d" } }
];

export default function App() {
  const [booting, setBooting] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [servicesData, setServicesData] = useState<typeof mockServices>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleWhatsAppConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isConnecting) return;
    
    setIsConnecting(true);
    
    // Simulate connection delay for visual feedback
    setTimeout(() => {
      window.open("https://wa.me/1234567890?text=Hola%20NASA%20Auto%20Lab,%20solicito%20iniciar%20una%20secuencia%20de%20diagnóstico.", "_blank", "noopener,noreferrer");
      setIsConnecting(false);
    }, 1200);
  };

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!booting) {
      // Simulate data fetching delay and progress after the initial boot sequence
      const duration = 1800;
      const intervalTime = 30;
      let currentProgress = 0;
      
      const progressInterval = setInterval(() => {
        currentProgress += (intervalTime / duration) * 100;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(progressInterval);
        }
        setLoadingProgress(currentProgress);
      }, intervalTime);

      const timer = setTimeout(() => {
        setServicesData(mockServices);
        setLoadingServices(false);
      }, duration);
      
      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [booting]);

  if (booting) {
    return (
      <div className="min-h-screen bg-nasa-bg flex items-center justify-center font-mono text-nasa-accent text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Terminal className="w-8 h-8 animate-pulse" />
          <p className="font-bold">{'>'} INICIALIZANDO SISTEMAS NASA...</p>
          <div className="w-64 h-1 bg-black/10 mt-4">
            <motion.div 
              className="h-full bg-nasa-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nasa-bg text-nasa-text font-sans selection:bg-nasa-accent selection:text-white overflow-x-hidden">
      
      {/* HUD Overlay (Fixed Perimeter) */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-black/10 m-2 md:m-6 z-50 flex flex-col justify-between p-4 font-mono text-[10px] text-black/40 uppercase tracking-widest hidden md:flex">
        <div className="flex justify-between">
          <span className="font-bold text-black/60">NASA Auto Lab // OS v3.1.0</span>
          <span className="flex items-center gap-2 text-nasa-accent font-bold">
            <span className="w-2 h-2 bg-nasa-accent rounded-full animate-pulse"></span> 
            SISTEMA EN LÍNEA
          </span>
        </div>
        <div className="flex justify-between font-bold text-black/60">
          <span>COORD: 4.5339 N / 75.6811 W</span>
          <span>DESPLAZAR PARA NAVEGAR ↓</span>
        </div>
      </div>

      <main className="relative z-10 px-6 md:px-16 lg:px-32 pt-24 pb-12">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center mb-24 border-b border-black/10 pb-6">
          <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2">
            <Crosshair className="text-nasa-accent w-6 h-6" />
            NASA
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest font-bold text-black/60">
            <a href="#servicios" className="hover:text-nasa-accent transition-colors">Protocolos</a>
            <a href="#instalaciones" className="hover:text-nasa-accent transition-colors">Laboratorio</a>
            <a href="#contacto" className="hover:text-nasa-accent transition-colors">Terminal</a>
          </nav>
          <button className="md:hidden text-nasa-accent font-mono text-xs font-bold border border-nasa-accent px-4 py-2">
            MENU
          </button>
        </header>

        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-nasa-accent font-bold text-sm mb-6 uppercase tracking-widest">
              {'>'} Redefiniendo la mecánica tradicional
            </p>
            <h1 className="text-[14vw] md:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter uppercase mb-8">
              Precisión <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nasa-accent to-black">Clínica.</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl font-mono text-xs md:text-sm text-black/60 font-medium leading-relaxed border-l-2 border-nasa-accent pl-6"
          >
            <p>
              OLVÍDATE DE LA GRASA, EL DESORDEN Y LAS SUPOSICIONES. NO SOMOS UN TALLER, SOMOS UN LABORATORIO DE ALTO RENDIMIENTO. UTILIZAMOS TELEMETRÍA AVANZADA Y ESTÁNDARES AEROESPACIALES PARA EL DIAGNÓSTICO Y OPTIMIZACIÓN DE TU VEHÍCULO.
            </p>
          </motion.div>
        </section>

        {/* Marquee Divider */}
        <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] border-y border-black/10 bg-nasa-surface overflow-hidden py-3 my-24 flex">
          <div className="animate-marquee whitespace-nowrap font-mono text-xs font-bold text-nasa-accent uppercase tracking-widest flex gap-8">
            <span>DIAGNÓSTICO COMPUTARIZADO</span>
            <span>•</span>
            <span>INGENIERÍA INVERSA</span>
            <span>•</span>
            <span>MANTENIMIENTO PREDICTIVO</span>
            <span>•</span>
            <span>CALIBRACIÓN LÁSER</span>
            <span>•</span>
            <span>DIAGNÓSTICO COMPUTARIZADO</span>
            <span>•</span>
            <span>INGENIERÍA INVERSA</span>
            <span>•</span>
            <span>MANTENIMIENTO PREDICTIVO</span>
            <span>•</span>
            <span>CALIBRACIÓN LÁSER</span>
            <span>•</span>
          </div>
        </div>

        {/* Services / Protocols (Data Grid Style) */}
        <section id="servicios" className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter font-bold">
              Protocolos <br/> de Servicio
            </h2>
            <span className="font-mono text-xs font-bold text-nasa-accent border border-nasa-accent px-3 py-1">
              SEC: 01
            </span>
          </div>
          
          {loadingServices ? (
            <div className="py-24 flex flex-col items-center justify-center border-t border-black/10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="mb-8 text-nasa-accent"
              >
                <Settings className="w-12 h-12" />
              </motion.div>
              
              <div className="w-full max-w-md px-4">
                <div className="flex justify-between font-mono text-[10px] text-black/50 font-bold mb-3 tracking-widest">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    RECUPERANDO DATOS DEL SERVIDOR
                  </span>
                  <span className="text-nasa-accent">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="h-[2px] w-full bg-black/10 overflow-hidden">
                  <motion.div 
                    className="h-full bg-nasa-accent"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 border-t border-black/10">
              {servicesData.map((s, index) => (
                <ServiceRow 
                  key={s.id}
                  num={s.id} 
                  title={s.title} 
                  desc={s.desc} 
                  icon={s.icon}
                  details={s.details}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>

        {/* Facility / About (Bento Box) */}
        <section id="instalaciones" className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter font-bold">
              El Laboratorio
            </h2>
            <span className="font-mono text-xs font-bold text-nasa-accent border border-nasa-accent px-3 py-1">
              SEC: 02
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main Image Box */}
            <div className="col-span-1 md:col-span-2 aspect-video md:aspect-auto bg-nasa-surface relative overflow-hidden group border border-black/10">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop" 
                alt="Engine detail"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-white/95 via-white/70 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 bg-nasa-accent rounded-full animate-pulse"></span>
                  <p className="font-mono text-[10px] text-black/70 font-bold uppercase tracking-widest">Cámara 01 // Área Limpia</p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase font-bold">Sala de Control Principal</h3>
                <p className="font-mono text-xs text-nasa-accent font-bold mt-2">ENTORNO CONTROLADO / ISO CLASE 7</p>
              </div>
            </div>
            
            {/* Tech Specs Box */}
            <div className="bg-nasa-accent text-white p-8 flex flex-col justify-between border border-nasa-accent">
              <Cpu className="w-12 h-12 mb-8" />
              <div>
                <h3 className="font-display text-2xl uppercase font-bold leading-tight">Tecnología<br/>Propietaria</h3>
                <p className="font-mono text-xs mt-4 opacity-90 leading-relaxed font-medium">
                  Equipamiento de diagnóstico de última generación, superior a los estándares de concesionarios oficiales. Herramientas calibradas mensualmente.
                </p>
              </div>
            </div>

            {/* Stats Box */}
            <div className="bg-nasa-surface border border-black/10 p-8 flex flex-col justify-center">
              <Gauge className="w-8 h-8 text-nasa-accent mb-4" />
              <div className="font-display text-5xl font-bold mb-2">99.9%</div>
              <p className="font-mono text-xs text-black/50 font-bold uppercase tracking-widest">Tasa de precisión en diagnóstico inicial</p>
            </div>
            
            {/* Guarantee Box */}
            <div className="col-span-1 md:col-span-2 bg-nasa-surface border border-black/10 p-8 flex flex-col justify-center">
              <h3 className="font-display text-xl uppercase font-bold mb-2">Transparencia Absoluta</h3>
              <p className="font-mono text-xs text-black/60 font-medium leading-relaxed max-w-2xl">
                Recibe un reporte digital interactivo con fotografías, lecturas de sensores y explicaciones detalladas antes de autorizar cualquier procedimiento. Tú tienes el control total de la consola.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Terminal */}
        <section id="contacto" className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter font-bold">
              Iniciar Secuencia
            </h2>
            <span className="font-mono text-xs font-bold text-nasa-accent border border-nasa-accent px-3 py-1">
              SEC: 03
            </span>
          </div>
          
          <div className="bg-nasa-surface border border-black/10 p-6 md:p-12 font-mono relative overflow-hidden">
            {/* Decorative grid background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <div className="mb-12 text-nasa-accent font-bold text-xs md:text-sm leading-relaxed">
                {'>'} INICIALIZANDO ENLACE DE COMUNICACIÓN...<br/>
                {'>'} ENRUTANDO A CANAL EXTERNO (WHATSAPP)... [OK]<br/>
                {'>'} ESTADO: ESPERANDO TRANSMISIÓN DEL USUARIO
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <div className="max-w-xl flex flex-col justify-center">
                  <p className="font-mono text-xs md:text-sm text-black/60 font-bold mb-8 leading-relaxed">
                    PARA GARANTIZAR LA MÁXIMA EFICIENCIA Y ATENCIÓN PERSONALIZADA, TODAS LAS RESERVAS Y CONSULTAS SE GESTIONAN A TRAVÉS DE NUESTRO CANAL DIRECTO DE WHATSAPP.
                  </p>
                  <a 
                    href="https://wa.me/1234567890?text=Hola%20NASA%20Auto%20Lab,%20solicito%20iniciar%20una%20secuencia%20de%20diagnóstico." 
                    onClick={handleWhatsAppConnect}
                    className={`inline-flex text-white px-8 py-4 font-display uppercase font-bold tracking-widest text-xs md:text-sm transition-colors items-center gap-4 group w-full md:w-auto justify-center ${isConnecting ? 'bg-nasa-accent' : 'bg-black hover:bg-nasa-accent'}`}
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Estableciendo Enlace...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        Conectar vía WhatsApp
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </a>
                </div>
                
                <div className="w-full min-h-[300px] border border-black/10 relative group overflow-hidden bg-nasa-surface flex">
                  <div className="absolute top-4 left-4 z-10 bg-white border border-black/10 px-3 py-1 font-mono text-[10px] font-bold flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 bg-nasa-accent rounded-full animate-pulse"></span>
                    UBICACIÓN_ACTUAL
                  </div>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=Cl.+15+%2321a-03,+Armenia,+Quind%C3%ADo,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    style={{ border: 0, minHeight: '300px' }}
                    title="NASA Auto Lab Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] text-black/40 font-bold uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} NASA AUTO LAB. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-nasa-accent transition-colors">Términos</a>
            <a href="#" className="hover:text-nasa-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-nasa-accent transition-colors">Protocolos de Seguridad</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

function ServiceRow({ num, title, desc, icon, details, index = 0 }: { num: string, title: string, desc: string, icon: React.ReactNode, details: { time: string, tools: string[], cost: string, link: string }, index?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group flex flex-col py-8 border-b border-black/10 transition-all duration-300 cursor-pointer px-4 -mx-4 ${isExpanded ? 'bg-black text-white' : 'hover:bg-nasa-accent'}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center gap-6 md:gap-12 mb-4 md:mb-0">
          <span className={`font-mono text-xs font-bold transition-colors duration-300 ${isExpanded ? 'text-white/50' : 'text-black/50 group-hover:text-white'}`}>{num}</span>
          <h3 className={`font-display text-xl md:text-3xl uppercase font-bold transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-black group-hover:text-white'}`}>{title}</h3>
        </div>
        <div className="flex items-center gap-8 md:w-1/2 justify-between">
          <p className={`font-mono text-[10px] md:text-xs font-medium max-w-xs leading-relaxed transition-colors duration-300 ${isExpanded ? 'text-white/80' : 'text-black/60 group-hover:text-white'}`}>
            {desc}
          </p>
          <div className={`transform transition-all duration-300 hidden md:flex items-center gap-4 ${isExpanded ? 'text-nasa-accent' : 'text-nasa-accent group-hover:text-white group-hover:scale-125'}`}>
            {icon}
            {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {/* Mobile toggle icon */}
      <div className={`md:hidden flex justify-end mt-4 ${isExpanded ? 'text-nasa-accent' : 'text-black/50 group-hover:text-white'}`}>
        {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-mono text-[10px] text-nasa-accent font-bold mb-3 tracking-widest">TIEMPO ESTIMADO (T-MINUS)</h4>
                <p className="font-display text-2xl font-bold">{details.time}</p>
                
                <h4 className="font-mono text-[10px] text-nasa-accent font-bold mb-3 mt-6 tracking-widest">INVERSIÓN ESTIMADA</h4>
                <p className="font-display text-xl font-bold text-white/90">{details.cost}</p>
              </div>
              <div className="md:col-span-1">
                <h4 className="font-mono text-[10px] text-nasa-accent font-bold mb-3 tracking-widest">INSTRUMENTAL REQUERIDO</h4>
                <ul className="font-mono text-xs text-white/80 space-y-2">
                  {details.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-nasa-accent rounded-full"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-start md:justify-end">
                <a 
                  href={details.link} 
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-nasa-accent hover:text-white transition-colors group/link"
                >
                  Ver Protocolo Completo
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
