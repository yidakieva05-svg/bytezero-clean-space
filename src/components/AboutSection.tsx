import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          За нас
        </motion.h2>

        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            Повечето хора не осъзнават, че ежедневните им дигитални навици създават реален дигитален отпечатък. В мащаб това води до значителна неефективност, разходи и скрито въздействие върху околната среда. Смятаме, че сме нужни на компаниите повече от всякога, поради ръст на разходите за облачни пространства и памет и натиск за отчитане на устойчивостта.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            Дигиталният отпечатък расте все повече и повече, но няма инструмент за поведенчески контрол.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-muted/30 border border-border/40 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-heading font-semibold text-sm mb-3 text-primary tracking-wide">
              Какво ни отличава?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Конкуренти като Greenly, Sweep и Celsia измерват данни, но не променят поведението на служителите — нещо, което ние целим с нашия продукт. Нашата мисия е да променим настройката на потребителя към по-добра дигитална хигиена.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
