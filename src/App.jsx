import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { ArrowDown, Zap, Brain, MessageCircle, Heart, Users, Smartphone, ArrowRight, Shield, Lock, FileWarning } from 'lucide-react';

import Navbar from './components/Navbar';

/* --- 0. PRELOADER --- */
const Preloader = ({ setLoading }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("INITIALIZING...");

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const messages = [
      "CALIBRATING SENSORS...",
      "BYPASSING FIREWALLS...",
      "ANALYZING NEURAL PATTERNS...",
      "OPTIMIZING DATA STREAMS...",
      "SYSTEM READY."
    ];
    
    let msgIndex = 0;
    const textTimer = setInterval(() => {
      setText(messages[msgIndex]);
      msgIndex = (msgIndex + 1) % messages.length;
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <h1 className="shock-text text-[15vw] md:text-[20vw] text-[#4ebaba] leading-none">
        {count}%
      </h1>
      <p className="font-mono text-[#ffffff] text-sm md:text-xl mt-4 tracking-widest animate-pulse px-4 text-center">
        {text}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-[#111]">
        <motion.div 
          className="h-full bg-[#4ebaba]" 
          style={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  );
};

/* --- 1. CUSTOM CURSOR (Hidden on Touch Devices) --- */
const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      style={{ translateX: mouseX, translateY: mouseY }}
      className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-[#4ebaba] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
};

/* --- 2. HERO SECTION --- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2b48] via-[#050505] to-[#000000] z-0" />
      
      <motion.div style={{ y: y2, opacity }} className="z-10 text-center px-4 flex flex-col items-center w-full">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="shock-text text-[15vw] md:text-[9rem] font-bold tracking-tighter text-white glitch-wrapper"
          data-text="AUTISTIC"
        >
          AUTISTIC
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shock-text text-[15vw] md:text-[9rem] font-bold tracking-tighter text-[#4ebaba] glitch-wrapper"
          data-text="LEARNING"
        >
          LEARNING
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y1, opacity }} className="absolute bottom-20 md:bottom-10 z-10 flex flex-col items-center gap-4">
        <p className="text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.5em] uppercase text-gray-500 font-mono text-center px-4">
          Bridging Home & School Through Data
        </p>
        <ArrowDown className="animate-bounce text-[#4ebaba]" size={24} />
      </motion.div>
    </section>
  );
};

/* --- 3. PROBLEM SECTION --- */
const ProblemSection = () => {
  return (
    <section id="problem" className="min-h-screen py-24 flex flex-col justify-center relative bg-[#050505] z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="shock-text text-5xl md:text-8xl mb-24 text-white text-center md:text-left"
        >
          WHY IT <span className="text-[#4ebaba] line-through decoration-4">FAILS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "OVERWHELM", 
              desc: "Sensory barriers (noise, lights) trigger resets before learning can even begin.", 
              icon: <Zap size={48} /> 
            },
            { 
              title: "GUESSWORK", 
              desc: "Without clear logs, adults rely on memory instead of data. That is a bug.", 
              icon: <Brain size={48} /> 
            },
            { 
              title: "DISCONNECT", 
              desc: "Strategies that work at home are lost at school. The system is fragmented.", 
              icon: <MessageCircle size={48} /> 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "#1a2b48" }} 
              className="border border-gray-800 p-8 md:p-10 hover:border-[#4ebaba] transition-colors duration-300 group bg-[#0a0a0a]"
            >
              <div className="text-white mb-6 group-hover:text-[#4ebaba] transition-colors">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- 4. THE METHOD (Responsive CLEAR Loop) --- */
const MethodLoop = () => {
  return (
    <section id="method" className="h-screen flex items-center justify-center bg-black relative overflow-hidden z-10">
      <div className="absolute text-[25vw] md:text-[20vw] font-bold text-[#111] select-none pointer-events-none shock-text opacity-50">
        LOOP
      </div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-16 md:mb-0 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="shock-text text-5xl md:text-7xl mb-8"
          >
            THE <span className="text-[#4ebaba]">CLEAR LOOP</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md font-mono mx-auto md:mx-0">
            We don't guess. We iterate. Capture baseline. Learn the trigger. Evaluate the data. Adjust the strategy. Repeat.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-gray-700 rounded-full flex items-center justify-center"
          >
            <div className="absolute w-full h-full rounded-full border-t-2 border-[#4ebaba] blur-[2px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-2 text-[#4ebaba] font-bold text-sm md:text-base">CAPTURE</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black p-2 text-[#4ebaba] font-bold text-sm md:text-base">ADJUST</div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-2 text-white font-bold text-sm md:text-base">LEARN</div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-black p-2 text-white font-bold text-sm md:text-base">REPEAT</div>
            
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_20px_white]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* --- 5. TARGETS (Adaptive) --- */
const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const targets = [
    { 
      id: "01", 
      name: "FAMILIES", 
      icon: <Heart className="text-[#4ebaba] w-12 h-12 md:w-16 md:h-16" />, 
      text: "Stop the chaos. We create a 'Learner Profile' and a daily roadmap to turn your home into a sanctuary.", 
      tag: "FAM", 
      border: "hover:border-[#4ebaba]" 
    },
    { 
      id: "02", 
      name: "EDUCATORS", 
      icon: <Users className="text-white w-12 h-12 md:w-16 md:h-16" />, 
      text: "We handle the data tracking. Get a one-page summary of triggers and strategy logs for your IEP meetings.", 
      tag: "EDU", 
      border: "hover:border-[#4ebaba]" 
    },
    { 
      id: "03", 
      name: "THE APP", 
      icon: <Smartphone className="text-[#4ebaba] w-12 h-12 md:w-16 md:h-16" />, 
      text: "Structured Documentation. Replace scattered notes with a unified dashboard for the entire support network.", 
      tag: "APP", 
      border: "hover:border-[#4ebaba]" 
    }
  ];

  return (
    <section id="targets" ref={targetRef} className="relative bg-[#050505] md:h-[500vh]">
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pl-24">
           <div className="group relative h-[60vh] w-[40vw] flex-shrink-0 flex flex-col justify-center">
            <h2 className="shock-text text-8xl text-white mb-4">
              OUR <br/> <span className="text-[#4ebaba]">TARGETS</span>
            </h2>
            <ArrowRight className="text-[#4ebaba] w-24 h-24" />
          </div>
          {targets.map((card) => (
             <div key={card.id} className={`relative h-[60vh] w-[40vw] flex-shrink-0 bg-[#1a2b48] border border-gray-800 p-12 flex flex-col justify-between ${card.border} transition-colors duration-500`}>
                {card.icon}
                <div>
                  <h3 className="text-4xl font-bold mb-4 font-mono text-white">{card.id}_{card.name}</h3>
                  <p className="text-gray-300 text-xl">{card.text}</p>
                </div>
                <div className="text-8xl font-bold text-[#111] absolute top-4 right-8 select-none opacity-50">{card.tag}</div>
             </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden py-24 px-6 flex flex-col gap-12">
        <h2 className="shock-text text-5xl text-white mb-8 text-center">
          OUR <span className="text-[#4ebaba]">TARGETS</span>
        </h2>
        {targets.map((card) => (
            <div key={card.id} className={`bg-[#1a2b48] border border-gray-800 p-8 flex flex-col gap-6`}>
              {card.icon}
              <div>
                <h3 className="text-2xl font-bold mb-2 font-mono text-white">{card.id}_{card.name}</h3>
                <p className="text-gray-300">{card.text}</p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

/* --- 6. SAFEGUARDING SECTION --- */
const RedactedText = ({ children }) => {
  return (
    <span className="relative group inline-block cursor-help">
      <span className="bg-white text-transparent select-none group-hover:bg-transparent group-hover:text-[#4ebaba] transition-all duration-300">
        {children}
      </span>
      <span className="absolute inset-0 bg-white/20 blur-[2px] group-hover:opacity-0 transition-opacity duration-300" />
    </span>
  );
};

const SafeguardingSection = () => {
  return (
    <section id="safeguarding" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-gray-800/20 rounded-xl p-10 rotate-[-15deg] pointer-events-none select-none">
        <h1 className="text-[15vw] font-bold text-gray-800/10 whitespace-nowrap">TOP SECRET</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="shock-text text-4xl md:text-7xl mb-16 text-center text-gray-500"
        >
          SECURITY <span className="text-[#4ebaba]">PROTOCOLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-mono text-gray-400 text-sm md:text-base">
          <div className="border border-gray-800 p-8 bg-black/50 hover:border-[#4ebaba] transition-colors">
            <div className="flex items-center gap-4 mb-6 text-[#4ebaba]">
              <Shield size={24} className="md:w-8 md:h-8" />
              <h3 className="text-lg md:text-xl font-bold tracking-widest">PROTOCOL_01</h3>
            </div>
            <p className="leading-loose">
              All operatives subject to <RedactedText>Level 5 Checks</RedactedText>. 
              Identity verification is <RedactedText>mandatory</RedactedText>.
            </p>
          </div>

          <div className="border border-gray-800 p-8 bg-black/50 hover:border-[#4ebaba] transition-colors">
            <div className="flex items-center gap-4 mb-6 text-[#4ebaba]">
              <Lock size={24} className="md:w-8 md:h-8" />
              <h3 className="text-lg md:text-xl font-bold tracking-widest">PROTOCOL_02</h3>
            </div>
            <p className="leading-loose">
              Data stored in <RedactedText>air-gapped servers</RedactedText>. 
              <RedactedText>AES-256 military-grade</RedactedText> encryption.
            </p>
          </div>

          <div className="border border-gray-800 p-8 bg-black/50 hover:border-[#4ebaba] transition-colors">
            <div className="flex items-center gap-4 mb-6 text-[#4ebaba]">
              <FileWarning size={24} className="md:w-8 md:h-8" />
              <h3 className="text-lg md:text-xl font-bold tracking-widest">PROTOCOL_03</h3>
            </div>
            <p className="leading-loose">
              Breach results in <RedactedText>termination</RedactedText>. 
              Asset safety is <RedactedText>paramount</RedactedText>.
            </p>
          </div>

          <div className="border border-gray-800 p-8 flex flex-col justify-center items-center text-center opacity-50">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2">100%</div>
            <div className="text-xs md:text-sm tracking-[0.5em] uppercase">Incident Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- 7. FOOTER --- */
const Footer = () => {
  return (
    <section id="contact" className="min-h-[70vh] bg-[#4ebaba] flex flex-col justify-center items-center text-center px-4 relative z-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <h2 className="shock-text text-black text-6xl md:text-9xl mb-8">
          START NOW
        </h2>
        <a 
          href="mailto:hello@autisticlearning.org"
          className="inline-block px-8 py-4 md:px-12 md:py-6 bg-black text-white text-xl md:text-2xl font-bold hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 font-mono"
        >
          GET IN TOUCH
        </a>
      </motion.div>
      <div className="absolute bottom-8 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs font-mono">
        © 2026 Autistic Learning (SMC-PRIVATE) Limited / Data is Love
      </div>
    </section>
  );
};

/* --- MAIN APP --- */
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#4ebaba] selection:text-white">
      <AnimatePresence>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <div className="bg-noise" />
          <CustomCursor />
          <Hero />
          <ProblemSection />
          <MethodLoop />
          <HorizontalScroll />
          <SafeguardingSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;