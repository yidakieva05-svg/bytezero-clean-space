import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            За нас
          </motion.h1>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              Повечето хора не осъзнават, че ежедневните им дигитални навици създават реален дигитален отпечатък. В мащаб това води до значителна неефективност, разходи и скрито въздействие върху околната среда. Смятаме, че сме нужни на компаниите повече от всякога, поради ръст на разходите за облачни пространства и памет и натиск за отчитане на устойчивостта.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              Дигиталният отпечатък расте все повече и повече, но няма инструмент за поведенчески контрол.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-muted/30 border border-border/40 rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-heading font-semibold text-sm mb-3 text-primary tracking-wide">
                Какво ни отличава?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                За разлика от нашата конкуренция, която измерва данни, но не променя поведението на служителите — ние целим точно това с нашия продукт. Нашата мисия е да променим настройката на потребителя към по-добра дигитална хигиена.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
