import { motion } from "framer-motion";

const ProductSection = () => {
  return (
    <section className="py-24 bg-[hsl(140,25%,8%)] relative overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Какъв е нашият <span className="text-primary">продукт?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(72 85% 62% / 0.15)" }}
          className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 md:p-14 transition-colors duration-300"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center">
            Нашият продукт е интелигентна система за{" "}
            <span className="text-foreground font-semibold">разпознаване и маркиране на имейли</span>,
            които ненужно натоварват сървърите на вашата организация. Чрез автоматизиран анализ
            идентифицираме дигиталния баласт и предлагаме ясен план за действие.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Намаляване на CO₂", desc: "По-малко данни — по-нисък въглероден отпечатък." },
              { icon: "💾", title: "Освободено пространство", desc: "Оптимизирайте сървърите и намалете разходите." },
              { icon: "👥", title: "Ангажирани служители", desc: "Изграждане на култура за дигитална хигиена." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -6 }}
                className="text-center p-4"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
