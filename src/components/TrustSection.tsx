import { motion } from "framer-motion";
import { CheckCircle, FileText, Shield } from "lucide-react";

const trustItems = [
  {
    icon: CheckCircle,
    title: "С нашия продукт компаниите ще спестяват",
    description:
      "Ние помагаме за намаляване на разходите на вашата компания чрез елиминиране на ненужни данни, които заемат скъпо сървърно пространство.",
  },
  {
    icon: FileText,
    title: "Твоят ESG репорт",
    description:
      "Всеки от нашите клиенти получава детайлен ESG репорт за подобренията, които сме постигнали за тяхната компания.",
  },
  {
    icon: Shield,
    title: "Ангажираност на служителите",
    description:
      "Нашата платформа помага на служителите да осъзнаят своя дигитален въглероден отпечатък и ги мотивира да бъдат по-устойчиви.",
  },
];

const TrustSection = () => {
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
          Защо да ни се доверите?
        </motion.h2>

        <div className="space-y-8 max-w-3xl">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                <h3 className="font-heading font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
