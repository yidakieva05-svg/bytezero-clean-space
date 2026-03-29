import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { useLang } from "@/lib/i18n";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 bg-background/80 backdrop-blur-md border-b border-border/30"
      >
        <Link to="/">
          <img src={logo} alt="ByteZero" className="h-5 sm:h-6 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3 md:gap-8">
          <motion.button
            onClick={toggleLang}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-xs font-heading font-semibold px-2 sm:px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 tracking-wide"
          >
            {lang === "bg" ? "EN" : "BG"}
          </motion.button>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group whitespace-nowrap"
            >
              {t("nav.about")}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          <motion.a
            href="#contact"
            onClick={handleContactClick}
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group whitespace-nowrap"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("nav.contacts")}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30 flex flex-col items-center gap-5 py-6 md:hidden"
          >
            <button
              onClick={toggleLang}
              className="text-xs font-heading font-semibold px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 tracking-wide"
            >
              {lang === "bg" ? "EN" : "BG"}
            </button>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {t("nav.about")}
            </Link>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {t("nav.contacts")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
