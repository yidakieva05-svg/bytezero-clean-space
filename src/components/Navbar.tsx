import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
      <Link to="/">
        <img src={logo} alt="ByteZero" className="h-6 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
          >
            За нас
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        <motion.a
          href="#contact"
          onClick={handleContactClick}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Контакти
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
