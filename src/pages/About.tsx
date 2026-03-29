import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/i18n";

const About = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("about.back")}
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t("about.title")}
          </motion.h1>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              {t("about.p2")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-muted/30 border border-border/40 rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-heading font-semibold text-sm mb-3 text-primary tracking-wide">
                {t("about.diff.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {t("about.diff.desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
