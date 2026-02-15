const ageModal = document.getElementById("ageModal");
const bodyElement = document.body;

const fallbackI18n = {
  el: {
    site_title: "Toumba Libre | Cocktail Mix Wine + Cola 7.2% vol",
    meta_description:
      "Toumba Libre: Cocktail Mix Wine + Cola, 7.2% vol, 275ml. Ετοιμο προς καταναλωση. Παραγγελιες για επαγγελματιες.",
    meta_og_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
    meta_twitter_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
  },
  en: {
    site_title: "Toumba Libre | Cocktail Mix Wine + Cola 7.2% vol",
    meta_description:
      "Toumba Libre: Cocktail Mix Wine + Cola, 7.2% vol, 275ml. Ready to drink. Distributor orders available.",
    meta_og_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
    meta_twitter_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
  },
};
const i18n = window.TOUMBA_I18N || fallbackI18n;

let currentLanguage = "el";
const canonicalLinkElement = document.getElementById("canonicalLink");
const canonicalBaseUrl = canonicalLinkElement
  ? canonicalLinkElement.getAttribute("href").split("?")[0]
  : `${window.location.origin}${window.location.pathname}`;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const bottle = document.querySelector(".bottle");
let bottleIntroRunning = false;

function getUrlForLanguage(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang === "en" ? "en" : "el");
  return url;
}

function getLanguageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const value = params.get("lang");
  if (value === "el" || value === "en") {
    return value;
  }
  return null;
}

function getDefaultLanguageByLocation() {
  const locale = (navigator.language || "").toLowerCase();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const isGreekLocale = locale.startsWith("el");
  const isGreeceTimeZone = timeZone === "Europe/Athens";
  return isGreekLocale || isGreeceTimeZone ? "el" : "en";
}

function applyLanguage(lang) {
  const translations = i18n[lang] || i18n.el || fallbackI18n.el;
  currentLanguage = i18n[lang] ? lang : "el";
  const langUrl = getUrlForLanguage(currentLanguage);

  localStorage.setItem("toumba-lang", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = translations.site_title;

  const metaDescription = document.getElementById("metaDescription");
  const metaOgDescription = document.getElementById("metaOgDescription");
  const metaOgUrl = document.getElementById("metaOgUrl");
  const metaTwitterDescription = document.getElementById("metaTwitterDescription");
  const canonicalLink = document.getElementById("canonicalLink");
  const hrefLangEl = document.getElementById("hrefLangEl");
  const hrefLangEn = document.getElementById("hrefLangEn");
  const hrefLangDefault = document.getElementById("hrefLangDefault");
  if (metaDescription) metaDescription.setAttribute("content", translations.meta_description);
  if (metaOgDescription) metaOgDescription.setAttribute("content", translations.meta_og_description);
  if (metaOgUrl) metaOgUrl.setAttribute("content", langUrl.toString());
  if (metaTwitterDescription) {
    metaTwitterDescription.setAttribute("content", translations.meta_twitter_description);
  }
  if (canonicalLink) canonicalLink.setAttribute("href", `${canonicalBaseUrl}?lang=${currentLanguage}`);
  if (hrefLangEl) hrefLangEl.setAttribute("href", `${canonicalBaseUrl}?lang=el`);
  if (hrefLangEn) hrefLangEn.setAttribute("href", `${canonicalBaseUrl}?lang=en`);
  if (hrefLangDefault) hrefLangDefault.setAttribute("href", canonicalBaseUrl);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
      element.textContent = translations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
      element.setAttribute("placeholder", translations[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
      element.setAttribute("aria-label", translations[key]);
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const buttonLang = button.getAttribute("data-lang-switch");
    const isActive = buttonLang === currentLanguage;
    button.classList.toggle("is-active", isActive);
  });
}

const languageFromUrl = getLanguageFromUrl();
const savedLanguage = localStorage.getItem("toumba-lang");
const locationBasedLanguage = getDefaultLanguageByLocation();
const initialLanguage =
  languageFromUrl ||
  (savedLanguage === "el" || savedLanguage === "en" ? savedLanguage : locationBasedLanguage);
applyLanguage(initialLanguage);

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.getAttribute("data-lang-switch");
    if (selectedLanguage) {
      if (selectedLanguage === currentLanguage) {
        return;
      }
      localStorage.setItem("toumba-lang", selectedLanguage);
      applyLanguage(selectedLanguage);
      const targetUrl = getUrlForLanguage(selectedLanguage);
      history.replaceState(null, "", `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
    }
  });
});

function showModal() {
  ageModal.style.display = "flex";
  bodyElement.classList.add("modal-open");
}

function hideModal() {
  ageModal.style.display = "none";
  bodyElement.classList.remove("modal-open");
}

function startBottleIntro() {
  if (!bottle) {
    onScroll();
    return;
  }

  bottleIntroRunning = true;
  bottle.classList.remove("bottle-load-in");
  // Restart animation when entering from the age gate.
  void bottle.offsetWidth;
  bottle.classList.add("bottle-load-in");

  window.setTimeout(() => {
    bottle.classList.remove("bottle-load-in");
    bottleIntroRunning = false;
    onScroll();
  }, 950);
}

function enterSite() {
  localStorage.setItem("toumba-age-ok", "yes");
  hideModal();
  startBottleIntro();
}

function leaveSite() {
  window.location.href = "https://www.google.com";
}

const ageOk = localStorage.getItem("toumba-age-ok");
if (ageOk === "yes") {
  hideModal();
  startBottleIntro();
} else {
  showModal();
}

function onScroll() {
  if (bottleIntroRunning) {
    return;
  }

  if (bottle) {
    bottle.style.transform = "none";
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

const distForm = document.getElementById("distForm");
if (distForm) {
  distForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const company = distForm.querySelector("[name='company']").value.trim();
    const email = distForm.querySelector("[name='email']").value.trim();
    const afm = distForm.querySelector("[name='afm']").value.trim();
    const address = distForm.querySelector("[name='address']").value.trim();
    const phone = distForm.querySelector("[name='phone']").value.trim();
    const boxes = distForm.querySelector("[name='boxes']").value.trim();
    const notes = distForm.querySelector("[name='notes']").value.trim();

    const t = i18n[currentLanguage] || i18n.el;
    const subject = encodeURIComponent(`${t.email_subject_prefix} ${company}`);
    const mailBody = encodeURIComponent(
      `${t.email_company}: ${company}\n${t.email_afm}: ${afm}\n${t.email_email}: ${email}\n${t.email_phone}: ${phone}\n${t.email_address}: ${address}\n${t.email_boxes}: ${boxes}\n${t.email_notes}: ${notes || "-"}\n`
    );

    window.location.href = `mailto:info@toumbalibre.com?subject=${subject}&body=${mailBody}`;
  });
}

function scrollToTopWithHash() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const url = new URL(window.location.href);
  url.hash = "top";
  history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

const logoLink = document.getElementById("logoLink");
if (logoLink) {
  logoLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTopWithHash();
  });
}

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTopWithHash();
  });
});
