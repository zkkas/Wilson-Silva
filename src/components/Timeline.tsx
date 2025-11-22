import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1942",
    title: "Nascimento em São Paulo",
    description: "Wilson Silva nasce na capital paulista. Desde cedo, demonstra interesse por ciências e pelo mundo ao seu redor, crescendo em um Brasil que começava a se industrializar.",
    side: "left"
  },
  {
    year: "Anos 50-60",
    title: "Formação Acadêmica",
    description: "Ingressa na Universidade de São Paulo (USP), onde se forma em Física. Durante seus anos universitários, desenvolve interesse por questões sociais e políticas do país.",
    side: "right"
  },
  {
    year: "1964",
    title: "O Golpe Militar",
    description: "O Brasil vive a instauração do regime militar. Wilson, já formado e trabalhando como técnico em informática na empresa Servix, observa as transformações políticas com preocupação.",
    side: "left"
  },
  {
    year: "1967-1969",
    title: "Militância na POLOP",
    description: "Wilson passa a militar na Organização Revolucionária Marxista Política Operária (POLOP). Sua atuação se concentra nas questões operárias, conectando sua formação técnica com o trabalho político.",
    side: "right"
  },
  {
    year: "Início dos anos 70",
    title: "Ana Rosa e a ALN",
    description: "Casa-se com Ana Rosa Kucinski, professora universitária do Instituto de Química da USP. Juntos, passam a militar na Ação Libertadora Nacional (ALN), intensificando sua luta contra a ditadura.",
    side: "left"
  },
  {
    year: "22 de Abril de 1974",
    title: "O Desaparecimento",
    description: "Wilson e Ana Rosa marcam um almoço próximo à Praça da República, no centro de São Paulo. Por volta do meio-dia, agentes da repressão os prendem. O casal nunca mais foi visto. Wilson tinha 32 anos.",
    side: "right"
  },
  {
    year: "1974-1975",
    title: "Buscas e Negativas",
    description: "A família busca informações incansavelmente. O advogado Aldo Lins e Silva impetra habeas corpus, negado com base no AI-5. Dom Paulo Evaristo Arns intervém junto ao general Golbery, sem sucesso.",
    side: "left"
  },
  {
    year: "1993-2012",
    title: "A Verdade Revelada",
    description: "Relatório da Marinha confirma a prisão em 1974. Décadas depois, em 2012, depoimentos à CNV revelam: Wilson e Ana Rosa foram levados à Casa da Morte de Petrópolis, torturados e assassinados. Seus corpos foram incinerados na Usina Cambahyba.",
    side: "right"
  }
];

const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: event.side === "left" ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 50 }}
      className={`flex items-center mb-20 ${event.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${event.side === "left" ? "md:text-right md:pr-12" : "md:pl-12"}`}>
        <motion.div 
          className="bg-card p-8 rounded-sm shadow-vintage-medium hover:shadow-vintage-strong transition-all duration-500 relative overflow-hidden group"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <motion.p 
            className="text-accent font-bold text-3xl mb-3 relative z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          >
            {event.year}
          </motion.p>
          
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          >
            {event.title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-base relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          >
            {event.description}
          </motion.p>

          {/* Decorative element */}
          <motion.div
            className={`absolute top-0 ${event.side === "left" ? "right-0" : "left-0"} w-1 h-full bg-accent origin-top`}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
          />
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex w-2/12 justify-center items-center relative">
        <motion.div 
          className="w-5 h-5 bg-accent rounded-full border-4 border-background shadow-vintage-medium relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-accent/20 rounded-full"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        />
        <motion.div
          className="absolute w-12 h-12 bg-accent/10 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          animate={{ 
            scale: [1, 1.2, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        />
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="biografia" className="py-32 bg-gradient-warm relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-accent mx-auto mb-6"
          />
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Uma Vida, Uma Luta
          </h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Da formação acadêmica à militância política, dos sonhos de justiça social ao trágico
            desaparecimento — a cronologia de Wilson Silva é também a história de um país em tempos sombrios
          </motion.p>
        </motion.div>

        {/* Timeline vertical line */}
        <div className="relative">
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-border to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ top: 0 }}
          />
          
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
