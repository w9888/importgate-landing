const translations = {
  en: {
    title: "ImportGate",
    subtitle: "Your trusted partner in international trade.",
    section1: "What We Do",
    desc1: "We manage the entire international trade cycle. From supplier sourcing to secure delivery — we make it seamless.",
    section2: "What Clients Say",
    contact: "Let’s Work Together",
    formPlaceholder: "Tell us about your project..."
  },
  ru: {
    title: "ImportGate",
    subtitle: "Ваш надежный партнёр в международной торговле.",
    section1: "Что мы делаем",
    desc1: "Мы управляем всем циклом международной торговли. От поиска поставщиков до безопасной доставки — всё под ключ.",
    section2: "Отзывы клиентов",
    contact: "Начнём сотрудничество",
    formPlaceholder: "Расскажите нам о вашем проекте..."
  },
  et: {
    title: "ImportGate",
    subtitle: "Teie usaldusväärne partner rahvusvahelises kaubanduses.",
    section1: "Mida me teeme",
    desc1: "Halduse kogu rahvusvaheline kaubandustsükkel: tarnijate leidmine, kohaletoimetamine ja kõik vahepealne.",
    section2: "Kliendid meist",
    contact: "Alustame koostööd",
    formPlaceholder: "Räägi meile oma projektist..."
  }
};

function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("section1").textContent = t.section1;
  document.getElementById("desc1").textContent = t.desc1;
  document.getElementById("section2").textContent = t.section2;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("formPlaceholder").placeholder = t.formPlaceholder;
}

// Optional: auto-detect browser language
const userLang = navigator.language.slice(0, 2);
setLang(translations[userLang] ? userLang : 'en');

// Animate hero text on load
window.addEventListener("load", () => {
  gsap.from("header h1", { y: -50, opacity: 0, duration: 1 });
  gsap.from("header p", { y: 20, opacity: 0, delay: 0.4, duration: 1 });
});
