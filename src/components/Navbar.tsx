import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useLang } from "@/lib/i18n";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // Close the mobile menu when a link is clicked

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      {/* 1. Logo */}
      <Link to="/">
        <img src={logo} alt="ByteZero" className="h-6 w-auto" />
      </Link>

      {/* 2. Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
          >
            {t("nav.about")}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        <motion.a
          href="#contact"
          onClick={handleContactClick}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group cursor-pointer"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("nav.contacts")}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
        </motion.a>

        <button
          onClick={toggleLang}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 border border-border/50 rounded-md px-3 py-1"
        >
          {lang === "bg" ? "EN" : "BG"}
        </button>
      </div>

      {/* 3. Mobile Hamburger Button */}
      <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 4. Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/30 flex flex-col items-center py-6 gap-6 md:hidden shadow-xl"
        >
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-base text-foreground font-medium hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </Link>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-base text-foreground font-medium hover:text-primary transition-colors cursor-pointer"
          >
            {t("nav.contacts")}
          </a>
          <button
            onClick={() => { toggleLang(); setIsOpen(false); }}
            className="text-base font-medium text-foreground hover:text-primary transition-colors border border-border/50 rounded-md px-4 py-1.5"
          >
            {lang === "bg" ? "EN" : "BG"}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
