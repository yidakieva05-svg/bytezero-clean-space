import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const ProcessSection = () => {
  const { t } = useLang();

  const steps = [
    {
      title: t("process.step1.title"),
      items: [t("process.step1.item1"), t("process.step1.item2"), t("process.step1.item3")],
    },
    {
      title: t("process.step2.title"),
      items: [t("process.step2.item1"), t("process.step2.item2"), t("process.step2.item3")],
    },
    {
      title: t("process.step3.title"),
      items: [t("process.step3.item1"), t("process.step3.item2"), t("process.step3.item3")],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-6 sm:right-24 w-14 sm:w-20 h-14 sm:h-20 bg-primary/20 rounded-sm hidden sm:block"
        animate={{ rotate: [0, 90, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-48 w-10 h-10 bg-primary/30 rounded-sm hidden sm:block"
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-6 sm:left-16 w-16 h-16 bg-primary/10 rounded-sm"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-20"
        >
          {t("process.title1")}
          <br />
          {t("process.title2")}
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line - hidden on mobile */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2 origin-top hidden sm:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {steps.map((step, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className={`relative flex items-start mb-10 sm:mb-16 ${side === "right" ? "sm:justify-end" : "sm:justify-start"} justify-center`}
              >
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10 hidden sm:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.25 + 0.3, type: "spring", stiffness: 400 }}
                  whileHover={{ scale: 1.8 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/40"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                <motion.div
                  className={`absolute top-1.5 h-px bg-primary/20 w-[8.33%] hidden sm:block ${side === "left" ? "right-1/2" : "left-1/2"}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.25 + 0.4 }}
                  style={{ transformOrigin: side === "left" ? "right" : "left" }}
                />

                <motion.div
                  className={`w-full sm:w-5/12 glass-card p-6 cursor-default ${side === "right" ? "sm:ml-auto" : ""}`}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 0 40px hsl(72 85% 62% / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-primary font-heading font-bold text-sm">{index + 1}</span>
                  </motion.div>
                  <h3 className="font-heading font-semibold text-primary text-sm mb-3 tracking-wide">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.25 + 0.4 + itemIndex * 0.1 }}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
