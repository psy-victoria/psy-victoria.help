/* Тексты двух языков. Пример изменения: замените значение heroLead.ru, чтобы обновить русский текст под заголовком. */
const translations = { // Словарь надписей сайта; пример: добавьте свой перевод в соответствующее поле ru или en.
  ru: {
    pageTitle: 'Виктория Миловская — психолог онлайн',
    pageDescription: 'Виктория Миловская — индивидуальное психологическое консультирование онлайн. Бережное пространство для работы с тревогой, отношениями и жизненными переменами.',
    skip: 'Перейти к содержимому', brandName: 'Виктория Миловская', brandRole: 'психолог · онлайн',
    navLabel: 'Основная навигация', navAbout: 'Обо мне', navHelp: 'С чем я помогаю', navProcess: 'Как проходят встречи', navContact: 'Контакты',
    languageLabel: 'Язык сайта', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', headerCta: 'Связаться ↗',
    heroEyebrow: 'Пространство, где можно быть собой',
    heroTitle: 'Когда становится непросто, <em>не нужно справляться в одиночку.</em>',
    heroLead: 'Бережная психологическая поддержка онлайн. Вместе мы сможем разобраться в том, что происходит, и найти шаги к более спокойной жизни.',
    heroCta: 'Давайте поговорим', heroSecondary: 'Познакомиться со мной', heroFootnote: 'Индивидуально · онлайн · в вашем темпе',
    portraitLabel: 'Фотография психолога Виктории Миловской', portraitAlt: 'Виктория Миловская', visualCaption: 'Вы заслуживаете поддержки', heroScroll: 'Листайте, чтобы узнать больше',
    trustLabel: 'Формат и подход', trustOne: 'Бережно и без осуждения', trustTwo: 'Конфиденциально', trustThree: 'Из любой точки мира',
    aboutKicker: 'Давайте знакомиться', aboutTitle: 'Я Виктория.<br><em>Рада, что вы здесь.</em>',
    aboutP1: 'Я психолог и работаю со взрослыми индивидуально. Для меня важно, чтобы на встречах вы могли говорить открыто, чувствовать уважение к своему опыту и двигаться в комфортном темпе.',
    aboutP2: 'В работе я использую когнитивно-поведенческий подход (КПТ) и ДПДГ (EMDR). Вместе мы исследуем ваши мысли, чувства и реакции, чтобы найти подходящие именно вам способы справляться с трудностями.',
    aboutCredentials: 'Образование: магистратура МГУ имени М. В. Ломоносова. Подходы: КПТ и ДПДГ (EMDR).',
    aboutSignature: 'С теплом, Виктория',
    helpKicker: 'Вы не одни', helpTitle: 'С чем мы можем <em>поработать вместе</em>', helpIntro: 'У каждого своя история. Вот некоторые темы, с которыми ко мне обращаются.',
    help1Title: 'Тревога и стресс', help1Text: 'Когда мысли не дают отдохнуть, а напряжение стало привычным фоном.',
    help2Title: 'Отношения', help2Text: 'Когда хочется лучше понимать себя и других, выстраивать границы и близость.',
    help3Title: 'Самооценка', help3Text: 'Когда внутренний критик звучит слишком громко и трудно опереться на себя.',
    help4Title: 'Перемены и утраты', help4Text: 'Когда жизнь меняется, и важно пройти через это с поддержкой.',
    helpNote: 'Не нашли здесь свою тему? Напишите мне — обсудим, подходит ли вам мой формат работы.',
    processKicker: 'Просто и спокойно', processTitle: 'Первый шаг может быть <em>совсем небольшим.</em>', processIntro: 'Не нужно заранее знать, что сказать. Начнём с того, что для вас сейчас важно.', processLink: 'Написать Виктории',
    step1Title: 'Напишите мне', step1Text: 'Расскажите в двух словах, с чем хотите обратиться. Можно просто задать вопрос.',
    step2Title: 'Выберем время', step2Text: 'Согласуем удобное время и способ связи для онлайн-встречи.',
    step3Title: 'Встретимся онлайн', step3Text: 'Сессия длится около часа. Частоту и дальнейшие шаги обсудим вместе.',
    contactKicker: 'Когда будете готовы', contactTitle: 'Давайте начнём <em>с разговора.</em>', contactIntro: 'Вы можете написать мне в мессенджер или на почту. Отвечу и помогу определиться со следующим шагом.',
    contactEmail: 'Электронная почта', contactPhone: 'Также доступна по телефону и в мессенджерах:',
    footerRole: 'Психологическое консультирование онлайн', backToTop: 'Наверх ↑'
  },
  en: {
    pageTitle: 'Viktoria Milovskaya — Online Psychologist',
    pageDescription: 'Viktoria Milovskaya offers individual online psychological counselling. A caring space to explore anxiety, relationships and life changes.',
    skip: 'Skip to content', brandName: 'Viktoria Milovskaya', brandRole: 'psychologist · online',
    navLabel: 'Main navigation', navAbout: 'About me', navHelp: 'How I can help', navProcess: 'How it works', navContact: 'Contact',
    languageLabel: 'Website language', menuOpen: 'Open menu', menuClose: 'Close menu', headerCta: 'Get in touch ↗',
    heroEyebrow: 'A space to be yourself',
    heroTitle: 'When life feels difficult, <em>you do not have to face it alone.</em>',
    heroLead: 'Thoughtful psychological support online. Together, we can make sense of what is happening and find steps toward a calmer life.',
    heroCta: 'Let’s talk', heroSecondary: 'Get to know me', heroFootnote: 'One to one · online · at your pace',
    portraitLabel: 'Photograph of psychologist Viktoria Milovskaya', portraitAlt: 'Viktoria Milovskaya', visualCaption: 'You deserve support', heroScroll: 'Scroll to learn more',
    trustLabel: 'Format and approach', trustOne: 'Care without judgment', trustTwo: 'Confidential', trustThree: 'Wherever you are',
    aboutKicker: 'Nice to meet you', aboutTitle: 'I’m Viktoria.<br><em>I’m glad you’re here.</em>',
    aboutP1: 'I am a psychologist offering individual support to adults. I want our meetings to be a place where you can speak openly, feel respected and move at a pace that feels right for you.',
    aboutP2: 'My work draws on cognitive behavioural therapy (CBT) and EMDR. Together, we explore your thoughts, feelings and reactions, and find ways of coping that fit your life.',
    aboutCredentials: 'Education: master’s studies at Lomonosov Moscow State University. Approaches: CBT and EMDR.',
    aboutSignature: 'Warmly, Viktoria',
    helpKicker: 'You are not alone', helpTitle: 'What we can <em>work through together</em>', helpIntro: 'Everyone has their own story. These are some of the topics people bring to me.',
    help1Title: 'Anxiety and stress', help1Text: 'When your thoughts make it hard to rest and tension has become part of daily life.',
    help2Title: 'Relationships', help2Text: 'When you want to understand yourself and others, and build boundaries and closeness.',
    help3Title: 'Self-esteem', help3Text: 'When your inner critic is too loud and it is hard to trust yourself.',
    help4Title: 'Change and loss', help4Text: 'When life changes and you would like support as you find your way through.',
    helpNote: 'Do not see your concern here? Write to me and we can discuss whether my approach is right for you.',
    processKicker: 'Simple and comfortable', processTitle: 'Your first step can be <em>a small one.</em>', processIntro: 'You do not need to know what to say in advance. We can start with what matters to you now.', processLink: 'Message Viktoria',
    step1Title: 'Send a message', step1Text: 'Tell me briefly what brings you here. You can also simply ask a question.',
    step2Title: 'Choose a time', step2Text: 'We will agree on a convenient time and way to connect online.',
    step3Title: 'Meet online', step3Text: 'A session lasts about an hour. We will discuss the frequency and next steps together.',
    contactKicker: 'Whenever you are ready', contactTitle: 'Let’s begin <em>with a conversation.</em>', contactIntro: 'You can reach me by messenger or email. I will reply and help you decide on the next step.',
    contactEmail: 'Email', contactPhone: 'Also available by phone and messenger:',
    footerRole: 'Online psychological counselling', backToTop: 'Back to top ↑'
  }
};

const languageButtons = document.querySelectorAll('[data-language]'); // Кнопки RU и EN; пример: новые кнопки с data-language потребуют переводов в словаре.
const textElements = document.querySelectorAll('[data-i18n]'); // Элементы с обычным текстом; пример: добавьте data-i18n="navAbout" в HTML.
const htmlElements = document.querySelectorAll('[data-i18n-html]'); // Элементы с доверенной разметкой em/br; пример: aboutTitle.
const ariaElements = document.querySelectorAll('[data-i18n-aria]'); // Подписи для скринридеров; пример: navLabel.
const altElements = document.querySelectorAll('[data-i18n-alt]'); // Подписи изображений; пример: portraitAlt.
const menuToggle = document.querySelector('.menu-toggle'); // Кнопка мобильного меню; пример: класс меняется в index.html и здесь.
const mainNav = document.querySelector('.main-nav'); // Блок ссылок меню; пример: тот же класс нужен в HTML.
const descriptionMeta = document.querySelector('meta[name="description"]'); // Описание для поисковой выдачи; пример: текст лежит в pageDescription.
const yearElement = document.querySelector('#year'); // Год в подвале; пример: 2027 появится автоматически в 2027 году.

function readSavedLanguage() {
  try {
    return localStorage.getItem('psy-victoria-language'); // Запомненный выбор посетителя; пример: 'en' включает английский после перезагрузки.
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem('psy-victoria-language', language); // Сохраняем RU/EN; пример: language='ru' делает русский постоянным выбором.
  } catch {
    /* Сайт продолжает работать, если браузер запретил локальное хранилище. */
  }
}

function browserLanguage() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'ru']; // Языки браузера; пример: ['en-US'] включает EN.
  if (languages.some((language) => language.toLowerCase().startsWith('ru'))) return 'ru'; // Русский имеет приоритет, если он есть в настройках браузера.
  if (languages[0]?.toLowerCase().startsWith('en')) return 'en'; // Английский включается, если это основной язык браузера.
  return 'ru'; // Для других языков по умолчанию показываем русский; пример: 'de-DE' → RU.
}

function setLanguage(language, remember = false) {
  const chosenLanguage = translations[language] ? language : 'ru'; // Защита от неизвестного кода; пример: 'fr' → 'ru'.
  const copy = translations[chosenLanguage]; // Все фразы выбранного языка; пример: translations.en.
  document.documentElement.lang = chosenLanguage;
  document.title = copy.pageTitle;
  descriptionMeta.content = copy.pageDescription;

  textElements.forEach((element) => { // Подставляем обычный текст; пример: navAbout → «Обо мне».
    const key = element.dataset.i18n; // Имя фразы из HTML; пример: data-i18n="heroLead".
    if (copy[key]) element.textContent = copy[key];
  });
  htmlElements.forEach((element) => { // Вставляем только заранее написанную разметку из словаря; пример: <em> в заголовке.
    const key = element.dataset.i18nHtml; // Имя заголовка; пример: heroTitle.
    if (copy[key]) element.innerHTML = copy[key];
  });
  ariaElements.forEach((element) => { // Переводим доступные подписи; пример: «Основная навигация».
    const key = element.dataset.i18nAria; // Имя подписи; пример: portraitLabel.
    if (copy[key]) element.setAttribute('aria-label', copy[key]);
  });
  altElements.forEach((element) => { // Переводим текст для изображения; пример: «Виктория Миловская».
    const key = element.dataset.i18nAlt; // Имя описания; пример: portraitAlt.
    if (copy[key]) element.alt = copy[key];
  });
  languageButtons.forEach((button) => { // Отмечаем выбранную кнопку; пример: EN подсвечивается при английском.
    const active = button.dataset.language === chosenLanguage; // true у активного языка; пример: 'en' === 'en'.
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  menuToggle.setAttribute('aria-label', mainNav.classList.contains('is-open') ? copy.menuClose : copy.menuOpen);
  if (remember) saveLanguage(chosenLanguage);
}

languageButtons.forEach((button) => { // Включаем переключение языка по нажатию; пример: кнопка EN вызывает setLanguage('en').
  button.addEventListener('click', () => setLanguage(button.dataset.language, true));
});

menuToggle.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('is-open'); // Состояние мобильного меню; пример: true после открытия.
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', translations[document.documentElement.lang][opened ? 'menuClose' : 'menuOpen']);
  document.body.classList.toggle('menu-open', opened);
});

mainNav.querySelectorAll('a').forEach((link) => { // Закрываем меню после перехода к разделу; пример: нажатие «Контакты».
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', translations[document.documentElement.lang].menuOpen);
    document.body.classList.remove('menu-open');
  });
});

yearElement.textContent = new Date().getFullYear(); // Текущий год в подвале; пример: в 2027 появится «2027».
setLanguage(readSavedLanguage() || browserLanguage()); // Начальный язык: сохранённый выбор, затем браузер; пример: браузер en-US → EN.
