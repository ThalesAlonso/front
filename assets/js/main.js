(function () {
  var STORAGE_KEY = "frontpro-journey";
  var LANGUAGE_KEY = "frontpro-language";

  var TRANSLATIONS = {
    pt: {
      "common.skip": "Pular para o conteúdo",
      "common.buy": "Comprar agora",
      "common.backTop": "Voltar ao topo",
      "common.backHome": "Voltar para o início",
      "theme.toLight": "Ativar modo claro",
      "theme.toDark": "Ativar modo escuro",
      "theme.light": "Claro",
      "theme.dark": "Escuro",
      "language.toggle": "Mudar idioma para inglês",
      "nav.home": "Início",
      "nav.modules": "Módulos",
      "nav.guarantee": "Garantia",
      "nav.testimonials": "Depoimentos",
      "nav.offer": "Oferta complementar",
      "nav.confirmation": "Confirmação",
      "home.hero.eyebrow": "HTML, CSS e JavaScript puro",
      "home.hero.title": "Domine frontend pela base, sem esconder a complexidade atrás de framework.",
      "home.hero.text": "Um curso digital direto ao ponto para criar interfaces rápidas, acessíveis, responsivas e fáceis de manter usando apenas a tríade da web.",
      "home.hero.secondary": "Ver conteúdo",
      "home.trust.guarantee": "7 dias de garantia",
      "home.trust.access": "Acesso imediato",
      "home.trust.project": "Projeto prático completo",
      "home.modules.eyebrow": "Jornada prática",
      "home.modules.title": "Três fundamentos, uma entrega profissional.",
      "home.slide1.eyebrow": "Módulo 01",
      "home.slide1.title": "HTML que comunica estrutura",
      "home.slide1.text": "Semântica, hierarquia de títulos, metadados, links reais e base para SEO.",
      "home.slide2.eyebrow": "Módulo 02",
      "home.slide2.title": "CSS limpo e responsivo",
      "home.slide2.text": "Mobile first, tokens, Grid, Flexbox, estados visuais e componentes reutilizáveis.",
      "home.slide3.eyebrow": "Módulo 03",
      "home.slide3.title": "JavaScript sem peso extra",
      "home.slide3.text": "DOM, eventos, carrossel acessível, estado de jornada e interações progressivas.",
      "home.benefits.eyebrow": "Por que funciona",
      "home.benefits.title": "O foco é entender a web antes da ferramenta.",
      "home.benefit1.title": "Código legível",
      "home.benefit1.text": "Funções pequenas, nomes claros e separação real entre estrutura, estilo e comportamento.",
      "home.benefit2.title": "Interface adaptável",
      "home.benefit2.text": "Layouts que nascem no mobile e evoluem com media queries simples e previsíveis.",
      "home.benefit3.title": "Entrega mensurável",
      "home.benefit3.text": "Checklist de acessibilidade, SEO e Lighthouse para provar qualidade além do visual.",
      "home.guarantee.eyebrow": "Compra tranquila",
      "home.guarantee.title": "Garantia incondicional de 7 dias.",
      "home.guarantee.text": "Se o curso não ajudar você a enxergar HTML, CSS e JavaScript com mais clareza, a compra pode ser cancelada dentro do período de garantia.",
      "home.guarantee.item1": "Acesso imediato ao conteúdo.",
      "home.guarantee.item2": "Projeto prático de ponta a ponta.",
      "home.guarantee.item3": "Material focado em manutenção e performance.",
      "home.testimonials.eyebrow": "Histórias de alunos",
      "home.testimonials.title": "Quem voltou para a base construiu melhor.",
      "home.testimonial1.text": "\"Parei de montar tela no impulso. Agora penso em semântica, fluxo e manutenção.\"",
      "home.testimonial2.text": "\"O módulo de responsividade foi exatamente o que eu precisava para ganhar critério.\"",
      "home.testimonial3.text": "\"Gostei porque o projeto não depende de biblioteca para parecer profissional.\"",
      "home.cta.eyebrow": "Pronto para praticar?",
      "home.cta.title": "Comece com a base certa.",
      "home.cta.text": "Garanta seu acesso e conheça a recomendação complementar para acelerar sua evolução.",
      "upsell.hero.eyebrow": "Compra inicial concluída",
      "upsell.hero.title": "Antes de finalizar: quer revisar seu projeto com critério senior?",
      "upsell.hero.text": "A Mentoria Express FrontPro é uma oferta complementar para transformar seu projeto em uma entrega mais consistente, acessível e performática.",
      "upsell.video.note": "Assista à apresentação para conhecer os detalhes da mentoria e decidir com segurança.",
      "upsell.pitch.eyebrow": "Complemento recomendado",
      "upsell.pitch.title": "Você já tem o curso. Agora pode acelerar a revisão da entrega.",
      "upsell.pitch.text": "Na mentoria, o aluno recebe um roteiro de revisão para encontrar falhas de responsividade, semântica, acessibilidade, legibilidade de CSS e comportamento em JS.",
      "upsell.offer.eyebrow": "Oferta complementar",
      "upsell.reveal.eyebrow": "Oferta liberada",
      "upsell.offer.text": "Uma revisão guiada para lapidar seu projeto final com foco em UX, responsividade, acessibilidade, SEO técnico e performance no Lighthouse.",
      "upsell.offer.cta": "Aceitar oferta complementar",
      "upsell.includes.title": "O que entra na oferta",
      "upsell.includes.item1": "Checklist de revisão visual e técnica.",
      "upsell.includes.item2": "Prioridades para melhorar Lighthouse mobile.",
      "upsell.includes.item3": "Roteiro de acessibilidade por teclado.",
      "upsell.includes.item4": "Guia de organização para HTML, CSS e JS puro.",
      "upsell.guarantee.title": "Garantia também no complemento",
      "upsell.guarantee.text": "A oferta complementar segue a mesma garantia: 7 dias para conhecer o material e decidir com tranquilidade.",
      "upsell.price.label": "Oferta especial",
      "thanks.hero.eyebrow": "Jornada concluída",
      "thanks.hero.title": "Obrigado pela compra.",
      "thanks.hero.text": "Seu acesso ao FrontPro Essencial foi confirmado com sucesso. Abaixo está o resumo da jornada e os próximos passos recomendados.",
      "thanks.summary.title": "Resumo da compra",
      "thanks.steps.eyebrow": "Próximos passos",
      "thanks.steps.title": "Continue a jornada com calma e método.",
      "thanks.step1.title": "Verifique seu email",
      "thanks.step1.text": "Os dados de acesso chegam na sua caixa de entrada junto com as orientações iniciais.",
      "thanks.step2.title": "Prepare o ambiente",
      "thanks.step2.text": "Separe navegador, editor de código e ferramentas de auditoria para acompanhar o curso.",
      "thanks.step3.title": "Valide sua entrega",
      "thanks.step3.text": "Use responsividade, teclado, Lighthouse e leitura de código como critérios de qualidade.",
      "thanks.info.title": "Informações adicionais",
      "thanks.info.text": "A jornada foi desenhada para entregar clareza desde a compra até o primeiro acesso, com orientações simples e suporte direto para quem está começando.",
      "thanks.support.title": "Suporte FrontPro",
      "thanks.support.release": "Prazo de liberação: imediato."
    },
    en: {
      "common.skip": "Skip to content",
      "common.buy": "Buy now",
      "common.backTop": "Back to top",
      "common.backHome": "Back to home",
      "theme.toLight": "Activate light mode",
      "theme.toDark": "Activate dark mode",
      "theme.light": "Light",
      "theme.dark": "Dark",
      "language.toggle": "Switch language to Portuguese",
      "nav.home": "Home",
      "nav.modules": "Modules",
      "nav.guarantee": "Guarantee",
      "nav.testimonials": "Testimonials",
      "nav.offer": "Add-on offer",
      "nav.confirmation": "Confirmation",
      "home.hero.eyebrow": "Pure HTML, CSS, and JavaScript",
      "home.hero.title": "Master frontend from the web platform up, without hiding complexity behind a framework.",
      "home.hero.text": "A focused digital course for building fast, accessible, responsive, and maintainable interfaces with the core web stack.",
      "home.hero.secondary": "View content",
      "home.trust.guarantee": "7-day guarantee",
      "home.trust.access": "Instant access",
      "home.trust.project": "Complete practical project",
      "home.modules.eyebrow": "Practical journey",
      "home.modules.title": "Three fundamentals, one professional delivery.",
      "home.slide1.eyebrow": "Module 01",
      "home.slide1.title": "HTML that communicates structure",
      "home.slide1.text": "Semantics, heading hierarchy, metadata, real links, and a solid SEO foundation.",
      "home.slide2.eyebrow": "Module 02",
      "home.slide2.title": "Clean, responsive CSS",
      "home.slide2.text": "Mobile first, tokens, Grid, Flexbox, visual states, and reusable components.",
      "home.slide3.eyebrow": "Module 03",
      "home.slide3.title": "JavaScript without extra weight",
      "home.slide3.text": "DOM, events, accessible carousel behavior, journey state, and progressive interactions.",
      "home.benefits.eyebrow": "Why it works",
      "home.benefits.title": "The focus is understanding the web before the tool.",
      "home.benefit1.title": "Readable code",
      "home.benefit1.text": "Small functions, clear names, and real separation between structure, style, and behavior.",
      "home.benefit2.title": "Adaptable interface",
      "home.benefit2.text": "Layouts that start on mobile and evolve with simple, predictable media queries.",
      "home.benefit3.title": "Measurable delivery",
      "home.benefit3.text": "Accessibility, SEO, and Lighthouse checks to prove quality beyond visuals.",
      "home.guarantee.eyebrow": "Safe purchase",
      "home.guarantee.title": "Unconditional 7-day guarantee.",
      "home.guarantee.text": "If the course does not help you see HTML, CSS, and JavaScript more clearly, the purchase can be canceled during the guarantee period.",
      "home.guarantee.item1": "Instant access to the content.",
      "home.guarantee.item2": "End-to-end practical project.",
      "home.guarantee.item3": "Material focused on maintenance and performance.",
      "home.testimonials.eyebrow": "Student stories",
      "home.testimonials.title": "Those who returned to the platform built better.",
      "home.testimonial1.text": "\"I stopped building screens on impulse. Now I think about semantics, flow, and maintenance.\"",
      "home.testimonial2.text": "\"The responsiveness module was exactly what I needed to improve my judgment.\"",
      "home.testimonial3.text": "\"I liked that the project does not depend on a library to look professional.\"",
      "home.cta.eyebrow": "Ready to practice?",
      "home.cta.title": "Start with the right foundation.",
      "home.cta.text": "Get access and see the recommended add-on to accelerate your progress.",
      "upsell.hero.eyebrow": "Initial purchase completed",
      "upsell.hero.title": "Before you finish: want to review your project with senior-level criteria?",
      "upsell.hero.text": "Mentoria Express FrontPro is an add-on offer to turn your project into a more consistent, accessible, and performant delivery.",
      "upsell.video.note": "Watch the presentation to understand the mentoring details and decide with confidence.",
      "upsell.pitch.eyebrow": "Recommended add-on",
      "upsell.pitch.title": "You already have the course. Now you can speed up the delivery review.",
      "upsell.pitch.text": "In the mentoring track, the student receives a review roadmap to find issues in responsiveness, semantics, accessibility, CSS readability, and JS behavior.",
      "upsell.offer.eyebrow": "Add-on offer",
      "upsell.reveal.eyebrow": "Offer unlocked",
      "upsell.offer.text": "A guided review to polish your final project with focus on UX, responsiveness, accessibility, technical SEO, and Lighthouse performance.",
      "upsell.offer.cta": "Accept add-on offer",
      "upsell.includes.title": "What is included",
      "upsell.includes.item1": "Visual and technical review checklist.",
      "upsell.includes.item2": "Priorities to improve mobile Lighthouse scores.",
      "upsell.includes.item3": "Keyboard accessibility review roadmap.",
      "upsell.includes.item4": "Organization guide for HTML, CSS, and pure JS.",
      "upsell.guarantee.title": "Guarantee also applies to the add-on",
      "upsell.guarantee.text": "The add-on offer follows the same guarantee: 7 days to review the material and decide calmly.",
      "upsell.price.label": "Special offer",
      "thanks.hero.eyebrow": "Journey completed",
      "thanks.hero.title": "Thank you for your purchase.",
      "thanks.hero.text": "Your access to FrontPro Essencial has been confirmed. Below is the journey summary and the recommended next steps.",
      "thanks.summary.title": "Purchase summary",
      "thanks.steps.eyebrow": "Next steps",
      "thanks.steps.title": "Continue the journey with calm and method.",
      "thanks.step1.title": "Check your email",
      "thanks.step1.text": "Access details arrive in your inbox along with the initial instructions.",
      "thanks.step2.title": "Prepare your environment",
      "thanks.step2.text": "Set up your browser, code editor, and audit tools to follow the course.",
      "thanks.step3.title": "Validate your delivery",
      "thanks.step3.text": "Use responsiveness, keyboard navigation, Lighthouse, and code reading as quality criteria.",
      "thanks.info.title": "Additional information",
      "thanks.info.text": "The journey was designed to provide clarity from purchase to first access, with simple instructions and direct support for those getting started.",
      "thanks.support.title": "FrontPro Support",
      "thanks.support.release": "Release time: immediate."
    }
  };

  function readJourney() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function writeJourney(nextJourney) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextJourney));
    } catch (error) {
      return;
    }
  }

  function saveJourneyStep(step) {
    var journey = readJourney();
    journey[step] = true;
    writeJourney(journey);
  }

  function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "pt";
  }

  function translate(key, language) {
    var dictionary = TRANSLATIONS[language] || TRANSLATIONS.pt;
    return dictionary[key] || TRANSLATIONS.pt[key] || key;
  }

  function updateCarouselLabels(language) {
    var dots = document.querySelectorAll("[data-carousel-dot]");

    dots.forEach(function (dot) {
      var slideNumber = dot.dataset.carouselDot;
      dot.setAttribute(
        "aria-label",
        language === "en" ? "Show slide " + slideNumber : "Mostrar slide " + slideNumber
      );
    });
  }

  function applyLanguage(language) {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = translate(element.dataset.i18n, language);
    });

    document.querySelectorAll("[data-language-toggle]").forEach(function (toggle) {
      toggle.setAttribute("aria-label", translate("language.toggle", language));
    });

    document.querySelectorAll("[data-language-label]").forEach(function (label) {
      label.textContent = language === "en" ? "EN" : "PT";
    });

    updateCarouselLabels(language);
  }

  function initLanguageToggle() {
    var toggles = document.querySelectorAll("[data-language-toggle]");

    if (!toggles.length) {
      applyLanguage(getLanguage());
      return;
    }

    applyLanguage(getLanguage());

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var nextLanguage = getLanguage() === "en" ? "pt" : "en";
        localStorage.setItem(LANGUAGE_KEY, nextLanguage);
        applyLanguage(nextLanguage);
        updateThemeToggleCopy();
      });
    });
  }

  function updateThemeToggleCopy() {
    var toggle = document.querySelector("[data-theme-toggle]");
    var label = document.querySelector("[data-theme-label]");
    var icon = document.querySelector("[data-theme-icon]");

    if (!toggle) {
      return;
    }

    var isDark = document.documentElement.dataset.theme === "dark";
    var language = getLanguage();

    toggle.setAttribute("aria-label", translate(isDark ? "theme.toLight" : "theme.toDark", language));

    if (label) {
      label.textContent = translate(isDark ? "theme.dark" : "theme.light", language);
    }

    if (icon) {
      icon.textContent = isDark ? "\u263e" : "\u2600";
    }
  }

  function initThemeToggle() {
    var toggle = document.querySelector("[data-theme-toggle]");

    if (!toggle) {
      return;
    }

    function applyTheme(theme) {
      document.documentElement.dataset.theme = theme;
      updateThemeToggleCopy();
    }

    applyTheme(document.documentElement.dataset.theme || "light");

    toggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("frontpro-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  function initJourneyLinks() {
    var links = document.querySelectorAll("[data-track-step]");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        saveJourneyStep(link.dataset.trackStep);
      });
    });
  }

  function initCarousel() {
    var carousel = document.querySelector("[data-carousel]");

    if (!carousel) {
      return;
    }

    var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-slide]"));
    var prevButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");
    var dotsContainer = carousel.querySelector("[data-carousel-dots]");
    var currentIndex = 0;
    var dots = [];

    function showSlide(nextIndex) {
      currentIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, index) {
        var isActive = index === currentIndex;
        slide.hidden = !isActive;
        slide.classList.toggle("is-active", isActive);
      });

      dots.forEach(function (dot, index) {
        var isSelected = index === currentIndex;
        dot.setAttribute("aria-current", String(isSelected));
        dot.setAttribute("tabindex", isSelected ? "0" : "-1");
      });
    }

    slides.forEach(function (slide, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-button";
      dot.dataset.carouselDot = String(index + 1);
      dot.setAttribute("aria-current", index === 0 ? "true" : "false");
      dot.setAttribute("tabindex", index === 0 ? "0" : "-1");

      dot.addEventListener("click", function () {
        showSlide(index);
      });

      dotsContainer.appendChild(dot);
      dots.push(dot);
      slide.hidden = index !== 0;
    });

    updateCarouselLabels(getLanguage());

    prevButton.addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentIndex + 1);
      }
    });
  }

  function initUpsellReveal() {
    var reveal = document.querySelector("[data-upsell-reveal]");

    if (!reveal) {
      return;
    }

    var delay = Number(reveal.dataset.delay) || 12000;
    var title = reveal.querySelector("[data-reveal-title]");

    window.setTimeout(function () {
      reveal.hidden = false;
      reveal.scrollIntoView({ behavior: "smooth", block: "start" });

      if (title) {
        title.focus({ preventScroll: true });
      }
    }, delay);
  }

  function initThanksSummary() {
    var summaryList = document.querySelector("[data-summary-list]");

    if (!summaryList) {
      return;
    }

    var journey = readJourney();

    if (journey["upsell-accepted"]) {
      var item = document.createElement("li");
      item.textContent = "Mentoria Express FrontPro";
      summaryList.appendChild(item);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLanguageToggle();
    initThemeToggle();
    initJourneyLinks();
    initCarousel();
    initUpsellReveal();
    initThanksSummary();
  });
})();
