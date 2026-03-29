import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z"
            fill="hsl(140 20% 12%)"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-secondary" />

      {/* Decorative glow */}
      <motion.div
        className="absolute top-1/2 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-10 right-32 w-4 h-4 border border-primary/40 rotate-45"
        animate={{ rotate: [45, 135, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight"
        >
          Нека бъдем част от твоят път към
          <br />
          <span className="text-primary">по-устойчиво развитие!</span>
        </motion.h2>

        <motion.a
          href="mailto:info@bytezero.bg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(72 85% 62% / 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-10 bg-primary text-primary-foreground font-heading font-semibold px-10 py-4 rounded-lg text-sm tracking-wide cursor-pointer"
        >
          Свържи се с нас
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
