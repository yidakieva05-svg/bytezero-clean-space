import { motion } from "framer-motion";
import { Sprout, Save, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

const ProductSection = () => {
  const { t } = useLang();

  const benefits: { Icon: LucideIcon; titleKey: any; descKey: any }[] = [
    { Icon: Sprout, titleKey: "product.co2.title", descKey: "product.co2.desc" },
    { Icon: Save, titleKey: "product.space.title", descKey: "product.space.desc" },
    { Icon: Users, titleKey: "product.employees.title", descKey: "product.employees.desc" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[hsl(140,25%,8%)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        >
          {t("product.title1")} <span className="text-primary">{t("product.title2")}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(72 85% 62% / 0.15)" }}
          className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-10 md:p-14 transition-colors duration-300"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center">
            {t("product.desc1")}{" "}
            <span className="text-foreground font-semibold">{t("product.desc.bold")}</span>
            {t("product.desc2")}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -6 }}
                className="text-center p-4"
              >
                <div className="flex justify-center mb-3">
                  <item.Icon size={40} className="text-primary/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
