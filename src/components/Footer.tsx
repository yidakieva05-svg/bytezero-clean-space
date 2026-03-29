import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="ByteZero" className="h-6 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Намаляваме дигиталния въглероден отпечатък и оптимизираме облачната ти инфраструктура.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-sm mb-4 tracking-wide">Контакти</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+359000000000"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +359 00 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:bytezero.contactus@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  bytezero.contactus@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-sm mb-4 tracking-wide">Социални мрежи</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} ByteZero. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
