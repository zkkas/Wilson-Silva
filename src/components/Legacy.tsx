import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const legacyPoints = [
  {
    icon: "⚖️",
    title: "Luta por Justiça",
    description: "Wilson dedicou sua vida à causa operária e aos ideais de justiça social, usando sua formação para servir aos que mais precisavam.",
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: "🎓",
    title: "Conhecimento Libertador",
    description: "Físico pela USP, especializou-se em processamento de dados. Acreditava que educação e tecnologia poderiam transformar a sociedade.",
    color: "from-highlight/20 to-highlight/5"
  },
  {
    icon: "💪",
    title: "Coragem e Resistência",
    description: "Mesmo sabendo dos riscos, Wilson escolheu lutar contra a opressão. Sua coragem inspira todos que buscam um mundo mais justo.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: "❤️",
    title: "Amor e Solidariedade",
    description: "Ao lado de Ana Rosa Kucinski, construiu uma parceria de vida e luta. Juntos, representam a força do amor em tempos sombrios.",
    color: "from-accent/30 to-accent/10"
  }
];

const Legacy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-32 bg-gradient-sepia relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 50%, hsl(var(--highlight) / 0.1) 0%, transparent 50%)`
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-vintage-strong">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                ✊
              </motion.div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Legado Imortal
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-accent w-40 mx-auto mb-6"
          />
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            O que permanece quando uma vida é interrompida pela violência do Estado?
            A memória, a luta e a inspiração para as gerações futuras
          </motion.p>
        </motion.div>

        {/* Legacy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {legacyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 50 }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${point.color} backdrop-blur-sm p-8 rounded-sm shadow-vintage-medium hover:shadow-vintage-strong transition-all duration-500 border border-border/50 hover:border-accent relative overflow-hidden h-full`}>
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 2, rotate: 90 }}
                />
                
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {point.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {point.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Legacy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            className="bg-primary text-primary-foreground p-10 md:p-16 rounded-sm shadow-vintage-strong relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-highlight/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Uma Vida que Não Será Esquecida
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Wilson Silva não teve a chance de envelhecer. Aos 32 anos, sua vida foi brutalmente
                  interrompida pelo aparato repressivo da ditadura militar brasileira. Junto com Ana Rosa,
                  foi sequestrado, torturado na Casa da Morte de Petrópolis e assassinado.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Seus corpos foram ocultados, incinerados na Usina Cambahyba, negando à família o direito
                  ao luto e ao sepultamento. Durante anos, suas famílias buscaram respostas que o Estado
                  brasileiro teimava em negar.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Mas Wilson Silva vive. Vive na memória de quem luta por justiça. Vive em cada brasileiro
                  que se recusa a esquecer. Vive no trabalho do Memorial da Resistência, na Comissão Nacional
                  da Verdade e em todos os espaços onde se honra a memória dos que tombaram lutando por um
                  Brasil democrático.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="pt-8 border-t-2 border-accent/30 mt-8"
                >
                  <p className="font-bold text-2xl md:text-3xl text-accent text-center italic">
                    "Aqueles que não conhecem a sua história estão condenados a repeti-la."
                  </p>
                  <p className="text-center mt-4 text-primary-foreground/70">
                    — George Santayana
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Final timeline marker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-accent font-bold text-3xl">1942 — 1974</p>
          </motion.div>
          <p className="text-muted-foreground text-lg mt-3">
            Wilson Silva • Presente na memória, eterno na luta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
