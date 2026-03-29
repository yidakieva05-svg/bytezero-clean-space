import { motion } from "framer-motion";

const steps = [
  {
    title: "Свържете се с нас",
    items: ["Безплатна консултация", "Анализ на нуждите", "Индивидуален план"],
    side: "left" as const,
  },
  {
    title: "Сканиране",
    items: ["Пълен одит на имейли", "Анализ на файлове", "Идентификация на ненужните данни"],
    side: "left" as const,
  },
  {
    title: "Почистване",
    items: ["Сигурно изтриване", "Оптимизация на сървъри", "Намаляване на въглеродния отпечатък"],
    side: "right" as const,
  },
];

const ProcessSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-20"
        >
          Подобри резултатите
          <br />
          си с нас!
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-start mb-16 ${
                step.side === "right" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Dot on timeline */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10"
                whileHover={{ scale: 1.8 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.div
                className={`w-5/12 glass-card p-6 cursor-default ${
                  step.side === "right" ? "ml-auto" : ""
                }`}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 30px hsl(72 85% 62% / 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="font-heading font-semibold text-primary text-sm mb-3 tracking-wide">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
