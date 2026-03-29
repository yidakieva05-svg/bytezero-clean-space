import { motion } from "framer-motion";
import { CheckCircle, FileText, Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";

const TrustSection = () => {
  const { t } = useLang();

  const trustItems = [
    { icon: CheckCircle, titleKey: "trust.item1.title" as const, descKey: "trust.item1.desc" as const },
    { icon: FileText, titleKey: "trust.item2.title" as const, descKey: "trust.item2.desc" as const },
    { icon: Shield, titleKey: "trust.item3.title" as const, descKey: "trust.item3.desc" as const },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-16"
        >
          {t("trust.title")}
        </motion.h2>

        <div className="space-y-8 max-w-3xl">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
              className="flex gap-5 items-start cursor-default group"
            >
              <motion.div
                className="mt-1 p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <item.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
