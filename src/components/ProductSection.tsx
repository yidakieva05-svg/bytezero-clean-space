import { motion } from "framer-motion";
import { Sprout, Save, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";

const ProductSection = () => {
  const { t } = useLang();

  const benefits = [
    { Icon: Sprout, titleKey: "product.co2.title" as const, descKey: "product.co2.desc" as const },
    { Icon: Save, titleKey: "product.space.title" as const, descKey: "product.space.desc" as const },
    { Icon: Users, titleKey: "