import { motion } from "framer-motion";
import { Sprout, Save, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";

const ProductSection = () => {
  const { t } = useLang();

  const benefits = [
    { Icon: Sprout, titleKey: "product.co2.title" as const, descKey: "product.co2.desc" as const },
    { Icon: Save, titleKey: "product.space.title" as const, descKey: "product.space.desc" as const },
    { Icon: Sprout, titleKey: "product.co2.title" as const, descKey: "product.co2.desc" as const },
    { Icon: Save, titleKey: "product.space.title" as const, descKey: "product.space.desc" as const },
    { Icon: Users, titleKey: "product.employees.title" as const, descKey: "product.employees.desc" as const },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[hsl(140,25%,8%)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
