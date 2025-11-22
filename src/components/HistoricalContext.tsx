import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HistoricalContext = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              currentColor 50px,
              currentColor 51px
            )`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
            className="h-1 bg-accent w-32 mx-auto mb-8"
          />
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            O Contexto Histórico
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Para compreender a trajetória de Wilson Silva, é fundamental entender o Brasil
            em que ele viveu e lutou
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "O Regime Militar",
              subtitle: "1964 - 1985",
              content: "21 anos de ditadura militar que suprimiram liberdades democráticas, perseguiram opositores políticos e marcaram o país com censura, tortura e desaparecimentos forçados. O AI-5, decretado em 1968, radicalizou a repressão.",
              delay: 0.2
            },
            {
              title: "A Resistência",
              subtitle: "Organizações Clandestinas",
              content: "Grupos como a POLOP e ALN lutavam contra o regime. Intelectuais, estudantes, operários e professores arriscavam suas vidas defendendo ideais de democracia e justiça social em um país sob repressão.",
              delay: 0.4
            },
            {
              title: "Os Desaparecidos",
              subtitle: "Memória e Verdade",
              content: "Centenas de brasileiros foram presos, torturados e mortos pela ditadura. Muitos, como Wilson e Ana Rosa, tiveram seus corpos ocultados. A luta por verdade, memória e justiça continua até hoje.",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: item.delay, type: "spring" }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-sm border border-primary-foreground/20 hover:border-accent transition-all duration-500 shadow-vintage-medium hover:shadow-vintage-strong"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "60px" } : {}}
                transition={{ duration: 0.8, delay: item.delay + 0.2 }}
                className="h-1 bg-accent mb-6"
              />
              
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              
              <motion.p 
                className="text-accent font-semibold mb-4 text-sm tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: item.delay + 0.3 }}
              >
                {item.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-primary-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: item.delay + 0.4 }}
              >
                {item.content}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <motion.div 
            className="bg-accent/20 backdrop-blur-md p-12 rounded-sm border-l-4 border-accent relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 text-[200px] text-accent/10 font-serif"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              "
            </motion.div>
            
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-6 relative z-10">
              A Casa da Morte de Petrópolis foi um dos centros clandestinos de tortura e assassinato
              operados pela ditadura. Ali, dezenas de presos políticos foram mortos e tiveram seus
              corpos desaparecidos, negando às famílias o direito ao luto.
            </p>
            
            <p className="text-sm uppercase tracking-wider text-primary-foreground/60 relative z-10">
              Comissão Nacional da Verdade
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricalContext;
