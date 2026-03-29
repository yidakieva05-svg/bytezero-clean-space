import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-0 overflow-hidden">
      <motion.div
        className="absolute top-32 right-4 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-primary/20 rounded-sm hidden sm:block"
        animate={{ rotate: [0, 90, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 right-40 w-8 h-8 bg-primary/30 rounded-sm"
        animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-12 h-12 bg-primary/10 rounded-sm"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
          >
            {t("hero.title1")}{" "}
            <br />
            {t("hero.title2")}
            <br />
            <span className="text-primary">{t("hero.title3")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(72 85% 62% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg text-sm tracking-wide cursor-pointer"
          >
            {t("hero.cta")}
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,120 Q360,20 720,60 Q1080,100 1440,30 L1440,120 Z" fill="hsl(140 25% 8%)" />
          <path d="M0,120 Q360,20 720,60 Q1080,100 1440,30" stroke="hsl(72 85% 62% / 0.4)" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
