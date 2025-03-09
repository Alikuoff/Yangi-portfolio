export type Language = "en" | "ru" | "uz"

export const languages: { [key in Language]: string } = {
  en: "English",
  ru: "Русский",
  uz: "O'zbek",
}

export const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    contactMe: "Contact Me",

    // Hero section
    hi: "Hi, I'm",
    profession: "Web Developer specializing in React, Next.js & Node.js",
    heroDescription:
      "Building modern web applications with 1+ years of experience in frontend and backend development.",
    viewProjects: "View Projects",

    // About section
    aboutMe: "About Me",
    aboutDescription1:
      "I'm a web developer with over 1 year of experience working with startups on Telegram bots and Car number detector applications. I specialize in creating responsive and user-friendly web applications using modern technologies.",
    aboutDescription2:
      "Currently studying Software Engineering at PDP University (2023-2027), I'm passionate about building solutions that solve real-world problems and deliver excellent user experiences.",

    // Skills section
    skillsTitle: "Skills & Technologies",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & Other",

    // Projects section
    allProjects: "All Projects",
    webApps: "Web Apps",
    applications: "Applications",
    bots: "Bots",
    viewAll: "View All",
    github: "GitHub",
    liveDemo: "Live Demo",
    comingSoon: "Coming Soon",

    // Contact section
    contactTitle: "Contact Me",
    contactDescription:
      "I'm currently open to freelance opportunities and job offers. If you'd like to discuss a project or have any questions, feel free to reach out to me using the contact information below.",
    letsWork: "Let's work together",
    contactFormDescription: "Fill out the form below and I'll get back to you as soon as possible.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Your message",
    contactMeOnTelegram: "Contact me on Telegram",

    // Footer
    copyright: "© 2024 Azizjon Alikulov. All rights reserved.",

    // Theme
    light: "Light",
    dark: "Dark",
    system: "System",
    themeChanged: "Theme changed to",
    systemPreference: "System preference",
    preference: "Your preference has been saved.",

    // Language
    language: "Language",
    languageChanged: "Language changed to",
  },

  ru: {
    // Navigation
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
    contactMe: "Связаться",

    // Hero section
    hi: "Привет, я",
    profession: "Веб-разработчик, специализирующийся на React, Next.js и Node.js",
    heroDescription: "Создаю современные веб-приложения с более чем 1 годом опыта во фронтенд и бэкенд разработке.",
    viewProjects: "Посмотреть проекты",

    // About section
    aboutMe: "Обо мне",
    aboutDescription1:
      "Я веб-разработчик с опытом более 1 года работы со стартапами над Telegram ботами и приложениями для распознавания автомобильных номеров. Я специализируюсь на создании отзывчивых и удобных веб-приложений с использованием современных технологий.",
    aboutDescription2:
      "В настоящее время я изучаю программную инженерию в PDP University (2023-2027) и увлечен созданием решений, которые решают реальные проблемы и обеспечивают отличный пользовательский опыт.",

    // Skills section
    skillsTitle: "Навыки и технологии",
    frontend: "Фронтенд",
    backend: "Бэкенд",
    database: "Базы данных",
    tools: "Инструменты и прочее",

    // Projects section
    allProjects: "Все проекты",
    webApps: "Веб-приложения",
    applications: "Приложения",
    bots: "Боты",
    viewAll: "Посмотреть все",
    github: "GitHub",
    liveDemo: "Демо",
    comingSoon: "Скоро",

    // Contact section
    contactTitle: "Связаться со мной",
    contactDescription:
      "В настоящее время я открыт для фриланс-возможностей и предложений работы. Если вы хотите обсудить проект или у вас есть вопросы, не стесняйтесь обращаться ко мне, используя контактную информацию ниже.",
    letsWork: "Давайте работать вместе",
    contactFormDescription: "Заполните форму ниже, и я свяжусь с вами как можно скорее.",
    name: "Имя",
    email: "Email",
    subject: "Тема",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",
    yourName: "Ваше имя",
    yourEmail: "Ваш email",
    yourMessage: "Ваше сообщение",
    contactMeOnTelegram: "Связаться со мной в Telegram",

    // Footer
    copyright: "© 2024 Азизжон Аликулов. Все права защищены.",

    // Theme
    light: "Светлая",
    dark: "Темная",
    system: "Системная",
    themeChanged: "Тема изменена на",
    systemPreference: "Системные настройки",
    preference: "Ваши предпочтения сохранены.",

    // Language
    language: "Язык",
    languageChanged: "Язык изменен на",
  },

  uz: {
    // Navigation
    about: "Haqimda",
    skills: "Ko'nikmalar",
    projects: "Loyihalar",
    contact: "Aloqa",
    contactMe: "Bog'lanish",

    // Hero section
    hi: "Salom, men",
    profession: "React, Next.js va Node.js bo'yicha ixtisoslashgan veb-dasturchi",
    heroDescription:
      "Frontend va backend ishlab chiqarishda 1+ yillik tajriba bilan zamonaviy veb-ilovalarni yarataman.",
    viewProjects: "Loyihalarni ko'rish",

    // About section
    aboutMe: "Men haqimda",
    aboutDescription1:
      "Men Telegram botlari va avtomobil raqamlarini aniqlash ilovalari bo'yicha startaplar bilan ishlashda 1 yildan ortiq tajribaga ega veb-dasturchiman. Men zamonaviy texnologiyalardan foydalangan holda sezgir va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashganman.",
    aboutDescription2:
      "Hozirda PDP Universitetida dasturiy ta'minot muhandisligini o'qiyapman (2023-2027), men haqiqiy muammolarni hal qiladigan va ajoyib foydalanuvchi tajribasini taqdim etadigan yechimlarni yaratishga qiziqaman.",

    // Skills section
    skillsTitle: "Ko'nikmalar va texnologiyalar",
    frontend: "Frontend",
    backend: "Backend",
    database: "Ma'lumotlar bazasi",
    tools: "Vositalar va boshqalar",

    // Projects section
    allProjects: "Barcha loyihalar",
    webApps: "Veb-ilovalar",
    applications: "Ilovalar",
    bots: "Botlar",
    viewAll: "Barchasini ko'rish",
    github: "GitHub",
    liveDemo: "Jonli demo",
    comingSoon: "Tez orada",

    // Contact section
    contactTitle: "Men bilan bog'lanish",
    contactDescription:
      "Hozirda frilanserlik imkoniyatlari va ish takliflariga ochiqman. Agar siz biror loyihani muhokama qilmoqchi bo'lsangiz yoki savollaringiz bo'lsa, quyidagi aloqa ma'lumotlaridan foydalanib, men bilan bog'lanishingiz mumkin.",
    letsWork: "Birga ishlaymiz",
    contactFormDescription: "Quyidagi shaklni to'ldiring va men sizga imkon qadar tezroq javob beraman.",
    name: "Ism",
    email: "Email",
    subject: "Mavzu",
    message: "Xabar",
    sendMessage: "Xabar yuborish",
    yourName: "Ismingiz",
    yourEmail: "Emailingiz",
    yourMessage: "Xabaringiz",
    contactMeOnTelegram: "Telegram orqali bog'lanish",

    // Footer
    copyright: "© 2024 Azizjon Alikulov. Barcha huquqlar himoyalangan.",

    // Theme
    light: "Yorug'",
    dark: "Qorong'i",
    system: "Tizim",
    themeChanged: "Mavzu o'zgartirildi:",
    systemPreference: "Tizim sozlamalari",
    preference: "Sizning afzalliklaringiz saqlandi.",

    // Language
    language: "Til",
    languageChanged: "Til o'zgartirildi:",
  },
}

