import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor),
                           linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h3 className="text-4xl font-bold mb-3">Wilson Silva</h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-accent w-32 mx-auto mb-3"
            />
            <p className="text-primary-foreground/80 text-lg font-light tracking-wider">
              1942 — 1974
            </p>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-sm max-w-3xl mx-auto"
          >
            <h4 className="text-xl font-bold mb-4">Saiba Mais</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.a
                href="https://memorialdaresistenciasp.org.br/pessoas/wilson-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-sm transition-all duration-300 border border-accent/30 hover:border-accent"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Memorial da Resistência
              </motion.a>
              <motion.a
                href="https://cnv.memoriasreveladas.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-sm transition-all duration-300 border border-accent/30 hover:border-accent"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Comissão Nacional da Verdade
              </motion.a>
              <motion.a
                href="https://www.gov.br/mdh/pt-br/assuntos/noticias/2021/marco/comissao-especial-sobre-mortos-e-desaparecidos-politicos-completa-25-anos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-sm transition-all duration-300 border border-accent/30 hover:border-accent"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Mortos e Desaparecidos
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              { href: "#biografia", label: "Biografia" },
              { href: "#contexto", label: "Contexto Histórico" },
              { href: "#legado", label: "Legado" },
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="border-t border-primary-foreground/20 pt-8 max-w-4xl mx-auto"
          />

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary-foreground/90 italic text-base md:text-lg leading-relaxed">
              "A memória dos que lutaram e tombaram pela democracia não pode ser apagada.
              Cada nome, cada história, cada vida interrompida pela ditadura nos lembra:
              nunca mais."
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-6 space-y-2"
          >
            <p className="text-primary-foreground/60 text-sm">
              Memorial dedicado a Wilson Silva e todos os brasileiros mortos e desaparecidos pela ditadura militar
            </p>
            <p className="text-primary-foreground/40 text-xs">
              © {currentYear} — Memória, Verdade e Justiça
            </p>
          </motion.div>

          {/* Animated element */}
          <motion.div
            className="flex justify-center gap-2 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
