/*
  ПОВЕДЕНИЕ САЙТА / script.js
  Тексты находятся в каждом HTML-документе: data-ru и data-en.
  Здесь: выбор языка, мобильное меню, просмотр документов и текущий год.
  Файл не отправляет формы, не собирает обращения и не подключает аналитику.
*/
"use strict";

/* 01. Настройки и элементы страницы. Изменяя селектор, меняйте и соответствующий id/class в HTML. */
const storageKey = "psy-victoria-language"; // Ключ сохранённого языка; пример: "psy-language-v2" создаст новый ключ.
const defaultLanguage = "ru"; // Язык по умолчанию; пример: "en" сделает резервным английский.
const languageButtons = document.querySelectorAll("[data-language]"); // Кнопки RU/EN; пример в HTML: data-language="en".
const translatedElements = document.querySelectorAll("[data-ru][data-en]"); // Все текстовые элементы; пример: data-ru="Обо мне".
const accessibleElements = document.querySelectorAll("[data-aria-ru]"); // Подписи для скринридеров; пример: кнопка закрытия.
const imageElements = document.querySelectorAll("[data-alt-ru]"); // Описания изображений; пример: название диплома.
const menuButton = document.querySelector(".menu-toggle"); // Кнопка меню; пример: при смене класса измените этот селектор.
const navigation = document.querySelector("#navigation"); // Ссылки меню; пример: id="navigation" в index.html.
const desktopQuery = window.matchMedia("(min-width: 1150px)"); // Порог полного меню; пример: 1200px, одновременно исправьте CSS.
const imageDialog = document.querySelector("#image-dialog"); // Окно изображения; пример: открывается после нажатия на диплом.
const dialogImage = document.querySelector("#dialog-image"); // Увеличенное изображение; путь берётся из href карточки.
const dialogTitle = document.querySelector("#image-title"); // Заголовок окна; пример: название выбранного диплома.
const dialogOriginal = document.querySelector("#dialog-original"); // Ссылка на исходный файл; пример: assets/certificates/msu-masters.png.
const closeDialogButton = document.querySelector("#dialog-close"); // Кнопка ×; например, её подпись переводится через data-aria-en.
const pageDescription = document.querySelector('meta[name="description"]'); // Описание страницы для поиска; тексты задаются ниже.
let currentImageLink = null; // Последняя открытая карточка; пример: ссылка на диплом МГУ. Нужна для возврата фокуса.

/* 02. Вспомогательные функции языка.
   Приоритет: сохранённый выбор → русский среди языков браузера → основной английский → русский.
   Пример: ["en-US", "ru"] даст RU; ["en-GB"] даст EN; ["de"] даст RU.
*/
function readLanguagePreference() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null; // Если хранилище запрещено, автоматический выбор всё равно работает.
  }
}

function detectLanguage() {
  const saved = readLanguagePreference(); // Сохранённый код; пример: "en" после нажатия EN.
  if (saved === "ru" || saved === "en") return saved;
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || defaultLanguage]; // Список браузера; пример: ["ru-RU", "en"].
  if (browserLanguages.some((language) => language.toLowerCase().startsWith("ru"))) return "ru";
  return browserLanguages[0].toLowerCase().startsWith("en") ? "en" : defaultLanguage;
}

function updateMenuLabel() {
  const opened = menuButton.getAttribute("aria-expanded") === "true"; // Меню открыто? Пример: true после первого нажатия.
  const russian = document.documentElement.lang === "ru"; // Активный язык; пример: true для RU.
  menuButton.setAttribute("aria-label", russian ? (opened ? "Закрыть меню" : "Открыть меню") : (opened ? "Close menu" : "Open menu"));
}

function setLanguage(language, remember = false) {
  const selected = language === "en" ? "en" : defaultLanguage; // Разрешены только ru/en; пример: неизвестный код заменяется на ru.
  document.documentElement.lang = selected;

  /* textContent безопасно вставляет текст; HTML-разметку в data-ru/data-en добавлять не нужно. */
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[selected];
  });
  accessibleElements.forEach((element) => {
    element.setAttribute("aria-label", element.getAttribute("data-aria-" + selected));
  });
  imageElements.forEach((element) => {
    element.alt = element.getAttribute("data-alt-" + selected);
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selected));
  });

  const titleAttribute = selected === "ru" ? "titleRu" : "titleEn"; // Метаданные текущей страницы; например titleEn на cbt.html.
  const descriptionAttribute = selected === "ru" ? "descriptionRu" : "descriptionEn"; // Описание страницы; пример: descriptionRu в её meta.
  document.title = document.documentElement.dataset[titleAttribute] || document.title;
  pageDescription.content = pageDescription.dataset[descriptionAttribute] || pageDescription.content;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = pageDescription.content;
  updateMenuLabel();
  if (imageDialog.open && currentImageLink) updateImageCaption(currentImageLink);

  if (remember) {
    try {
      localStorage.setItem(storageKey, selected);
    } catch {
      /* Запрет cookies/localStorage не мешает переключить язык в текущем окне. */
    }
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language, true));
});

/* 03. Мобильная навигация.
   Меню закрывается при выборе ссылки, нажатии Escape, клике вне шапки
   и переходе к ширине компьютера. Это предотвращает зависание старого состояния.
*/
function closeMenu(returnFocus = false) {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  updateMenuLabel();
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const opened = navigation.classList.toggle("is-open"); // Новое состояние; пример: true означает видимое меню.
  menuButton.setAttribute("aria-expanded", String(opened));
  updateMenuLabel();
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

/* 04. Просмотр сертификатов и оригиналов отзывов.
   Без поддержки dialog браузер откроет href как обычную ссылку.
   Ctrl/Cmd + клик тоже сохраняют стандартное открытие в новой вкладке.
*/
function updateImageCaption(link) {
  const thumbnail = link.querySelector("img"); // Миниатюра диплома; пример: отсутствует у текстовой ссылки отзыва.
  const figureCaption = link.closest("figure")?.querySelector("figcaption p"); // Подпись отзыва; пример: дата 9 мая 2024.
  const title = thumbnail?.alt || figureCaption?.textContent || (document.documentElement.lang === "ru" ? "Документ" : "Document"); // Понятное название вместо технического имени файла.
  dialogTitle.textContent = title;
  dialogImage.alt = title;
}

document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof imageDialog.showModal !== "function") return;
    event.preventDefault();
    currentImageLink = link;
    dialogImage.src = link.href;
    dialogOriginal.href = link.href;
    updateImageCaption(link);
    imageDialog.showModal();
    document.body.classList.add("dialog-open");
    closeDialogButton.focus();
  });
});
closeDialogButton.addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) {
    const bounds = imageDialog.getBoundingClientRect(); // Границы окна; пример: клик за их пределами означает фон.
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
  }
});
imageDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (currentImageLink) currentImageLink.focus();
});

/* 05. Запуск. .js включается в самом конце: при ошибке загрузки обычные ссылки меню остаются доступными. */
document.querySelector("#year").textContent = new Date().getFullYear(); // Автоматический год; пример: в 2027 появится 2027.
setLanguage(detectLanguage());
document.documentElement.classList.add("js");
