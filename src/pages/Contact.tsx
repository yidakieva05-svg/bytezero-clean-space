import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Send } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Обратно
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Свържи се с <span className="text-primary">нас</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg mb-12 max-w-md"
          >
            Попълни формата и ще се свържем с теб възможно най-скоро.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-semibold mb-2">Благодарим ти!</h2>
              <p className="text-muted-foreground">Ще се свържем с теб скоро.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-card p-8 md:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Име *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Компания *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    maxLength={100}
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Примерна ООД"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Имейл *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ivan@example.com"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+359 ..."
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Съобщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Разкажи ни как можем да помогнем..."
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsl(72 85% 62% / 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3.5 rounded-lg text-sm tracking-wide flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Изпрати
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
