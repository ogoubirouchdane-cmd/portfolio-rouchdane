// ============================================
//   ROUCHDANE OGOUBI — script.js
// ============================================

// ---- Language Data ----
const translations = {
  fr: {
    // Navbar
    nav_home:      "Accueil",
    nav_about:     "À propos",
    nav_services:  "Services",
    nav_portfolio: "Réalisations",
    nav_contact:   "Contact",

    // Hero
    hero_badge:    "Disponible pour missions",
    hero_title:    "Rouchdane OGOUBI",
    hero_subtitle: "Responsable Maintenance & Opérations Techniques IT",
    hero_slogan:   "Des solutions informatiques fiables et professionnelles",
    hero_desc:     "J'aide particuliers, étudiants et petites entreprises à résoudre leurs problèmes informatiques, améliorer les performances de leurs ordinateurs et prévenir les pannes grâce à des solutions techniques fiables et adaptées.",
    hero_btn1:     "Me contacter",
    hero_btn2:     "Mes services",
    hero_btn3:     "WhatsApp",
    hero_stat1:    "Années d'expérience",
    hero_stat2:    "PC réparés",
    hero_stat3:    "Clients satisfaits",
    hero_card_title:  "Technicien IT confirmé",
    hero_card_sub:    "Abomey-Calavi / Cotonou, Bénin",

    // Services (home section)
    services_tag:    "Mes Services",
    services_title:  "Des solutions <span>adaptées</span> à vos besoins",
    services_sub:    "Des interventions rapides, professionnelles et efficaces pour tous vos problèmes informatiques.",

    // Why
    why_tag:    "Pourquoi me choisir",
    why_title:  "Ce qui me <span>distingue</span>",
    why1_title: "Expérience terrain",
    why1_desc:  "Des années de pratique sur différents types de pannes et configurations.",
    why2_title: "Diagnostic précis",
    why2_desc:  "Je cherche la vraie cause du problème avant toute intervention.",
    why3_title: "Intervention rapide",
    why3_desc:  "Je minimise votre temps d'arrêt et résous le problème efficacement.",
    why4_title: "Suivi & conseils",
    why4_desc:  "Je vous accompagne même après l'intervention pour prévenir les pannes.",

    // Portfolio preview
    portfolio_tag:   "Réalisations",
    portfolio_title: "Quelques <span>projets</span> récents",
    portfolio_link:  "Voir toutes les réalisations →",

    // Contact section (home)
    cta_title:  "Besoin d'une intervention ?",
    cta_desc:   "Contactez-moi par WhatsApp pour un diagnostic rapide.",
    cta_btn:    "Écrire sur WhatsApp",

    // About page
    about_tag:       "À propos",
    about_title:     "Technicien IT de <span>terrain</span>",
    about_p1:        "Je suis technicien en informatique, spécialisé en maintenance et réseaux, actuellement Responsable Maintenance & Opérations Techniques IT chez ECOTIC à Abomey-Calavi.",
    about_p2:        "Mon parcours est avant tout celui d'un praticien de terrain. J'ai commencé par intervenir auprès d'étudiants, de particuliers et de centres informatiques — diagnostiquer, réparer, installer des systèmes et accompagner les utilisateurs au quotidien.",
    about_p3:        "Cette expérience m'a forgé une rigueur technique solide, un bon sens du diagnostic et une grande importance accordée à la satisfaction du client. Aujourd'hui, en tant que Responsable Technique chez ECOTIC, je supervise les opérations de maintenance et veille à la continuité de service.",
    about_p4:        "Je me forme continuellement en systèmes, réseaux et technologies numériques, avec pour objectif de toujours proposer des solutions plus professionnelles et efficaces.",
    about_available: "Disponible",
    about_skills:    "Compétences",
    exp_tag:         "Expériences",
    exp_title:       "Mon <span>parcours</span> professionnel",
    exp1_date:       "Fév 2026 – Présent",
    exp1_title:      "Chef de Maintenance & Responsable Technique IT",
    exp1_place:      "ECOTIC · Abomey-Calavi",
    exp1_desc:       "Supervision des opérations de maintenance, coordination des interventions, garantie de la continuité de service.",
    exp2_date:       "Août 2025 – Jan 2026",
    exp2_title:      "Technicien Informatique (Stage)",
    exp2_place:      "ECOTIC · Abomey-Calavi",
    exp2_desc:       "Installation et configuration OS, maintenance postes, assistance réseau, support utilisateurs.",
    exp3_date:       "Avr 2025 – Juil 2025",
    exp3_title:      "Technicien IT Indépendant (Freelance)",
    exp3_place:      "Abomey-Calavi, Bénin",
    exp3_desc:       "Diagnostic et réparation pour particuliers, étudiants et centres informatiques. Gestion autonome de la relation client.",

    // Services page
    page_services_h:  "Mes Services",
    page_services_p:  "Des interventions professionnelles pour tous vos besoins informatiques.",
    s1_title: "Diagnostic & Dépannage",
    s1_desc:  "Ordinateur lent ou bloqué, pannes système, erreurs Windows, problèmes de démarrage. Diagnostic matériel et logiciel complet.",
    s2_title: "Installation Windows / Linux",
    s2_desc:  "Installation propre de Windows 10/11, Linux (bases), pilotes, logiciels essentiels et optimisation initiale.",
    s3_title: "Maintenance Préventive & Corrective",
    s3_desc:  "Nettoyage logiciel, mises à jour, optimisation des performances, vérification du disque dur et de la batterie.",
    s4_title: "Installation de Périphériques",
    s4_desc:  "Configuration d'imprimantes, scanners, claviers, souris et connexion réseau de base.",
    s5_title: "Mise à niveau PC",
    s5_desc:  "Remplacement HDD par SSD, ajout de RAM, nettoyage interne du ventilateur et des composants.",
    s6_title: "Sécurité Informatique de Base",
    s6_desc:  "Installation d'antivirus, protection contre les virus, mises à jour de sécurité et bonnes pratiques.",
    s7_title: "Assistance & Support Utilisateurs",
    s7_desc:  "Aide à l'utilisation, résolution de problèmes quotidiens, conseils pratiques.",
    s8_title: "Réseau de Base",
    s8_desc:  "Configuration réseau, dépannage Wi-Fi/Ethernet, connexion partagée.",
    s9_title: "Formation Informatique",
    s9_desc:  "Initiation à l'informatique, utilisation de Windows, Word, Excel, et entretien de son PC.",

    // Portfolio page
    page_portfolio_h: "Mes Réalisations",
    page_portfolio_p: "Des interventions concrètes — problème, solution, résultat.",
    p1_type: "Optimisation",
    p1_title: "PC très lent — Passage au SSD",
    p1_prob: "Ordinateur ultra lent au démarrage et à l'utilisation",
    p1_sol:  "Remplacement du HDD par un SSD + réinstallation Windows",
    p1_res:  "Démarrage en 12 secondes au lieu de 4 minutes",
    p2_type: "Diagnostic Matériel",
    p2_title: "PC ne charge plus",
    p2_prob: "Batterie ne se recharge pas, PC s'éteint sans adaptateur",
    p2_sol:  "Diagnostic connecteur de charge + remplacement batterie",
    p2_res:  "PC opérationnel avec charge normale",
    p3_type: "Maintenance",
    p3_title: "PC en surchauffe",
    p3_prob: "PC chauffe anormalement, s'éteint tout seul, ventilateur bruyant",
    p3_sol:  "Nettoyage interne complet + remplacement pâte thermique",
    p3_res:  "Température normalisée, performances restaurées",
    p4_type: "Réinstallation",
    p4_title: "Windows corrompu",
    p4_prob: "Écran bleu au démarrage, Windows ne démarre plus",
    p4_sol:  "Sauvegarde données + réinstallation propre Windows 11",
    p4_res:  "PC opérationnel, données récupérées à 100%",
    prob_label: "Problème",
    sol_label:  "Solution",
    res_label:  "Résultat",

    // Contact page
    page_contact_h:   "Contactez-moi",
    page_contact_p:   "Je réponds rapidement à toutes vos demandes.",
    contact_wa:       "WhatsApp",
    contact_email:    "Email",
    contact_location: "Localisation",
    contact_loc_val:  "Abomey-Calavi / Cotonou, Bénin",
    form_name:    "Nom complet",
    form_email:   "Email",
    form_phone:   "Téléphone",
    form_subject: "Objet",
    form_message: "Votre message",
    form_send:    "Envoyer le message",
    form_success: "Message envoyé ! Je vous répondrai bientôt.",
    map_text:     "📍 Abomey-Calavi / Cotonou, Bénin",

    // Footer
    footer_desc:   "Technicien IT spécialisé en maintenance informatique et réseaux. Des solutions fiables pour vos besoins informatiques.",
    footer_nav:    "Navigation",
    footer_contact:"Contact",
    footer_copy:   "© 2026 Rouchdane OGOUBI. Tous droits réservés.",
  },

  en: {
    nav_home:      "Home",
    nav_about:     "About",
    nav_services:  "Services",
    nav_portfolio: "Portfolio",
    nav_contact:   "Contact",

    hero_badge:    "Available for missions",
    hero_title:    "Rouchdane OGOUBI",
    hero_subtitle: "IT Maintenance & Technical Operations Manager",
    hero_slogan:   "Reliable and professional IT solutions",
    hero_desc:     "I help individuals, students, and small businesses solve their IT problems, improve computer performance, and prevent breakdowns through reliable and professional technical solutions.",
    hero_btn1:     "Contact me",
    hero_btn2:     "My services",
    hero_btn3:     "WhatsApp",
    hero_stat1:    "Years of experience",
    hero_stat2:    "PCs repaired",
    hero_stat3:    "Happy clients",
    hero_card_title: "Confirmed IT Technician",
    hero_card_sub:   "Abomey-Calavi / Cotonou, Benin",

    services_tag:    "My Services",
    services_title:  "<span>Tailored</span> solutions for your needs",
    services_sub:    "Fast, professional, and effective interventions for all your IT problems.",

    why_tag:    "Why choose me",
    why_title:  "What sets me <span>apart</span>",
    why1_title: "Field experience",
    why1_desc:  "Years of hands-on practice across a wide range of breakdowns and configurations.",
    why2_title: "Precise diagnosis",
    why2_desc:  "I find the real root cause before any intervention.",
    why3_title: "Fast response",
    why3_desc:  "I minimize your downtime and resolve issues efficiently.",
    why4_title: "Follow-up & advice",
    why4_desc:  "I stay available after the job to prevent future issues.",

    portfolio_tag:   "Portfolio",
    portfolio_title: "Recent <span>projects</span>",
    portfolio_link:  "View all projects →",

    cta_title:  "Need IT support?",
    cta_desc:   "Reach me on WhatsApp for a quick diagnosis.",
    cta_btn:    "Write on WhatsApp",

    about_tag:       "About",
    about_title:     "A hands-on <span>IT Technician</span>",
    about_p1:        "I am an IT technician specialized in maintenance and networking, currently IT Maintenance & Technical Operations Manager at ECOTIC in Abomey-Calavi.",
    about_p2:        "My background is above all that of a field practitioner. I started by working with students, individuals, and IT centers — diagnosing, repairing, installing systems, and supporting users on a daily basis.",
    about_p3:        "This experience gave me solid technical rigor, strong diagnostic skills, and a deep commitment to client satisfaction. Today, as Technical Manager at ECOTIC, I oversee maintenance operations and ensure service continuity.",
    about_p4:        "I continuously train in systems, networks, and digital technologies, with the goal of always delivering more professional and effective solutions.",
    about_available: "Available",
    about_skills:    "Skills",
    exp_tag:         "Experience",
    exp_title:       "My professional <span>journey</span>",
    exp1_date:       "Feb 2026 – Present",
    exp1_title:      "IT Maintenance Manager & Technical Lead",
    exp1_place:      "ECOTIC · Abomey-Calavi",
    exp1_desc:       "Oversight of maintenance operations, coordination of technical interventions, service continuity assurance.",
    exp2_date:       "Aug 2025 – Jan 2026",
    exp2_title:      "IT Technician (Internship)",
    exp2_place:      "ECOTIC · Abomey-Calavi",
    exp2_desc:       "OS installation and configuration, workstation maintenance, network assistance, user support.",
    exp3_date:       "Apr 2025 – Jul 2025",
    exp3_title:      "Independent IT Technician (Freelance)",
    exp3_place:      "Abomey-Calavi, Benin",
    exp3_desc:       "Diagnostics and repairs for individuals, students, and IT centers. Autonomous client relationship management.",

    page_services_h:  "My Services",
    page_services_p:  "Professional interventions for all your IT needs.",
    s1_title: "Diagnostics & Troubleshooting",
    s1_desc:  "Slow or frozen computer, system failures, Windows errors, boot problems. Complete hardware and software diagnosis.",
    s2_title: "Windows / Linux Installation",
    s2_desc:  "Clean installation of Windows 10/11, Linux (basics), drivers, essential software and initial optimization.",
    s3_title: "Preventive & Corrective Maintenance",
    s3_desc:  "Software cleanup, updates, performance optimization, hard drive and battery verification.",
    s4_title: "Peripheral Installation",
    s4_desc:  "Configuration of printers, scanners, keyboards, mice and basic network connection.",
    s5_title: "PC Upgrade",
    s5_desc:  "HDD to SSD replacement, RAM upgrade, internal fan and component cleaning.",
    s6_title: "Basic IT Security",
    s6_desc:  "Antivirus installation, virus protection, security updates and best practices.",
    s7_title: "User Support & Assistance",
    s7_desc:  "Help with daily usage, solving everyday problems, practical advice.",
    s8_title: "Basic Networking",
    s8_desc:  "Network configuration, Wi-Fi/Ethernet troubleshooting, shared connection setup.",
    s9_title: "IT Training",
    s9_desc:  "Introduction to computing, Windows usage, Word, Excel, and PC maintenance.",

    page_portfolio_h: "My Portfolio",
    page_portfolio_p: "Real interventions — problem, solution, result.",
    p1_type: "Optimization",
    p1_title: "Very slow PC — SSD upgrade",
    p1_prob: "Extremely slow startup and usage",
    p1_sol:  "HDD replaced with SSD + clean Windows reinstall",
    p1_res:  "Boot in 12 seconds instead of 4 minutes",
    p2_type: "Hardware Diagnosis",
    p2_title: "PC won't charge",
    p2_prob: "Battery not charging, PC turns off without adapter",
    p2_sol:  "Charge connector diagnosis + battery replacement",
    p2_res:  "PC fully operational with normal charging",
    p3_type: "Maintenance",
    p3_title: "Overheating laptop",
    p3_prob: "PC overheating, random shutdowns, loud fan",
    p3_sol:  "Full internal cleaning + thermal paste replacement",
    p3_res:  "Temperature normalized, performance restored",
    p4_type: "Reinstallation",
    p4_title: "Corrupted Windows",
    p4_prob: "Blue screen on startup, Windows won't boot",
    p4_sol:  "Data backup + clean Windows 11 reinstall",
    p4_res:  "PC operational, 100% data recovered",
    prob_label: "Problem",
    sol_label:  "Solution",
    res_label:  "Result",

    page_contact_h:   "Contact me",
    page_contact_p:   "I respond quickly to all requests.",
    contact_wa:       "WhatsApp",
    contact_email:    "Email",
    contact_location: "Location",
    contact_loc_val:  "Abomey-Calavi / Cotonou, Benin",
    form_name:    "Full name",
    form_email:   "Email",
    form_phone:   "Phone",
    form_subject: "Subject",
    form_message: "Your message",
    form_send:    "Send message",
    form_success: "Message sent! I'll get back to you soon.",
    map_text:     "📍 Abomey-Calavi / Cotonou, Benin",

    footer_desc:   "IT Technician specialized in computer maintenance and networking. Reliable solutions for all your IT needs.",
    footer_nav:    "Navigation",
    footer_contact:"Contact",
    footer_copy:   "© 2026 Rouchdane OGOUBI. All rights reserved.",
  }
};

// ---- State ----
let currentLang = localStorage.getItem('lang') || 'fr';

// ---- Apply translations ----
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang
  document.documentElement.lang = lang;
}

// ---- Navbar scroll ----
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---- Hamburger ----
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---- Scroll animations ----
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ---- Contact form ----
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    showToast(t.form_success, 'success');
    form.reset();
  });
}

// ---- Toast ----
function showToast(msg, type = '') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initAnimations();
  initContactForm();

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Apply stored lang
  applyLang(currentLang);
});
