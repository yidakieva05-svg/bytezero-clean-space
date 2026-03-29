import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "bg" | "en";

const translations = {
  // Navbar
  "nav.about": { bg: "За нас", en: "About Us" },
  "nav.contacts": { bg: "Контакти", en: "Contacts" },

  // Hero
  "hero.title1": { bg: "Устойчивостта не", en: "Sustainability is not" },
  "hero.title2": { bg: "е разход.", en: "an expense." },
  "hero.title3": { bg: "Тя е инвестиция.", en: "It's an investment." },
  "hero.desc": {
    bg: "Ние намаляваме дигиталния ти въглероден отпечатък, като същевременно оптимизираме сървърите ти за облачни услуги и повишаваме твоя ESG рейтинг.",
    en: "We reduce your digital carbon footprint while optimizing your cloud servers and improving your ESG rating.",
  },
  "hero.cta": { bg: "Започни днес", en: "Get Started" },

  // Product
  "product.title1": { bg: "Какъв е нашият", en: "What is our" },
  "product.title2": { bg: "продукт?", en: "product?" },
  "product.desc1": {
    bg: "Нашият продукт е интелигентна система за",
    en: "Our product is an intelligent system for",
  },
  "product.desc.bold": {
    bg: "разпознаване и маркиране на имейли",
    en: "identifying and flagging emails",
  },
  "product.desc2": {
    bg: ", които ненужно натоварват сървърите на вашата организация. Чрез автоматизиран анализ идентифицираме дигиталния баласт и предлагаме ясен план за действие.",
    en: " that unnecessarily burden your organization's servers. Through automated analysis, we identify digital waste and offer a clear action plan.",
  },
  "product.co2.title": { bg: "Намаляване на CO₂", en: "CO₂ Reduction" },
  "product.co2.desc": { bg: "По-малко данни — по-нисък въглероден отпечатък.", en: "Less data — lower carbon footprint." },
  "product.space.title": { bg: "Освободено пространство", en: "Freed Space" },
  "product.space.desc": { bg: "Оптимизирайте сървърите и намалете разходите.", en: "Optimize servers and reduce costs." },
  "product.employees.title": { bg: "Ангажирани служители", en: "Engaged Employees" },
  "product.employees.desc": { bg: "Изграждане на култура за дигитална хигиена.", en: "Building a culture of digital hygiene." },

  // Process
  "process.title1": { bg: "Подобри резултатите", en: "Improve your results" },
  "process.title2": { bg: "си с нас!", en: "with us!" },
  "process.step1.title": { bg: "Свържете се с нас", en: "Contact Us" },
  "process.step1.item1": { bg: "Безплатна консултация", en: "Free consultation" },
  "process.step1.item2": { bg: "Анализ на нуждите", en: "Needs analysis" },
  "process.step1.item3": { bg: "Индивидуален план", en: "Individual plan" },
  "process.step2.title": { bg: "Сканиране", en: "Scanning" },
  "process.step2.item1": { bg: "Пълен одит на имейли", en: "Full email audit" },
  "process.step2.item2": { bg: "Анализ на файлове", en: "File analysis" },
  "process.step2.item3": { bg: "Обсъждане на оферта и цена", en: "Offer & pricing discussion" },
  "process.step3.title": { bg: "Завършване на процеса", en: "Process Completion" },
  "process.step3.item1": { bg: "Подписване на договор", en: "Contract signing" },
  "process.step3.item2": { bg: "Оптимизация на сървъри", en: "Server optimization" },
  "process.step3.item3": { bg: "Намаляване на въглеродния отпечатък", en: "Carbon footprint reduction" },

  // Trust
  "trust.title": { bg: "Защо да ни се доверите?", en: "Why Trust Us?" },
  "trust.item1.title": { bg: "С нашия продукт компаниите ще спестяват", en: "Companies will save with our product" },
  "trust.item1.desc": {
    bg: "Ние помагаме за намаляване на разходите на вашата компания чрез елиминиране на ненужни данни, които заемат скъпо сървърно пространство.",
    en: "We help reduce your company's costs by eliminating unnecessary data that occupies expensive server space.",
  },
  "trust.item2.title": { bg: "Твоят ESG репорт", en: "Your ESG Report" },
  "trust.item2.desc": {
    bg: "Всеки от нашите клиенти получава детайлен ESG репорт за подобренията, които сме постигнали за тяхната компания.",
    en: "Each of our clients receives a detailed ESG report on the improvements we've achieved for their company.",
  },
  "trust.item3.title": { bg: "Ангажираност на служителите", en: "Employee Engagement" },
  "trust.item3.desc": {
    bg: "Нашата платформа помага на служителите да осъзнаят своя дигитален въглероден отпечатък и ги мотивира да бъдат по-устойчиви.",
    en: "Our platform helps employees recognize their digital carbon footprint and motivates them to be more sustainable.",
  },

  // CTA
  "cta.title1": { bg: "Нека бъдем част от твоят път към", en: "Let us be part of your journey towards" },
  "cta.title2": { bg: "по-устойчиво развитие!", en: "sustainable growth!" },
  "cta.button": { bg: "Свържи се с нас", en: "Contact Us" },

  // Footer
  "footer.desc": {
    bg: "Намаляваме дигиталния въглероден отпечатък и оптимизираме облачната ти инфраструктура.",
    en: "We reduce digital carbon footprint and optimize your cloud infrastructure.",
  },
  "footer.contacts": { bg: "Контакти", en: "Contacts" },
  "footer.phone.label": { bg: "Телефон", en: "Phone" },
  "footer.email.label": { bg: "Имейл", en: "Email" },
  "footer.social": { bg: "Социални мрежи", en: "Social Media" },
  "footer.rights": { bg: "Всички права запазени.", en: "All rights reserved." },

  // About page
  "about.back": { bg: "Назад", en: "Back" },
  "about.title": { bg: "За нас", en: "About Us" },
  "about.p1": {
    bg: "Повечето хора не осъзнават, че ежедневните им дигитални навици създават реален дигитален отпечатък. В мащаб това води до значителна неефективност, разходи и скрито въздействие върху околната среда. Смятаме, че сме нужни на компаниите повече от всякога, поради ръст на разходите за облачни пространства и памет и натиск за отчитане на устойчивостта.",
    en: "Most people don't realize that their everyday digital habits create a real digital footprint. At scale, this leads to significant inefficiency, costs, and hidden environmental impact. We believe companies need us more than ever, due to rising cloud storage costs and pressure to report on sustainability.",
  },
  "about.p2": {
    bg: "Дигиталният отпечатък расте все повече и повече, но няма инструмент за поведенчески контрол.",
    en: "The digital footprint keeps growing, yet there is no tool for behavioral control.",
  },
  "about.diff.title": { bg: "Какво ни отличава?", en: "What sets us apart?" },
  "about.diff.desc": {
    bg: "За разлика от нашата конкуренция, която измерва данни, но не променя поведението на служителите, ние целим точно това с нашия продукт. Нашата мисия е да променим настройката на потребителя към по-добра дигитална хигиена.",
    en: "Unlike our competition, which measures data but doesn't change employee behavior, we aim to do exactly that with our product. Our mission is to shift user habits toward better digital hygiene.",
  },

  // Contact page
  "contact.back": { bg: "Обратно", en: "Back" },
  "contact.title1": { bg: "Свържи се с", en: "Get in touch with" },
  "contact.title2": { bg: "нас", en: "us" },
  "contact.subtitle": { bg: "Попълни формата или се свържи директно с нас.", en: "Fill out the form or contact us directly." },
  "contact.phone": { bg: "Телефон", en: "Phone" },
  "contact.email": { bg: "Имейл", en: "Email" },
  "contact.name": { bg: "Име *", en: "Name *" },
  "contact.name.placeholder": { bg: "Иван Иванов", en: "John Doe" },
  "contact.company": { bg: "Компания *", en: "Company *" },
  "contact.company.placeholder": { bg: "Примерна ООД", en: "Example Ltd." },
  "contact.email.label": { bg: "Имейл *", en: "Email *" },
  "contact.phone.label": { bg: "Телефон", en: "Phone" },
  "contact.message": { bg: "Съобщение *", en: "Message *" },
  "contact.message.placeholder": { bg: "Разкажи ни как можем да помогнем...", en: "Tell us how we can help..." },
  "contact.send": { bg: "Изпрати", en: "Send" },
  "contact.thanks": { bg: "Благодарим ти!", en: "Thank you!" },
  "contact.thanks.desc": { bg: "Ще се свържем с теб скоро.", en: "We'll get back to you soon." },
} as const;

type TranslationKey = keyof typeof translations;

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("bg");

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
