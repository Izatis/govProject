// Открывает версию для слабовидящих
const eyeBurger = document.querySelector(".eye-burger");
const accessibilityHeader = document.querySelector(".access-header");

const toggleAccessibilityHeader = function () {
  accessibilityHeader.classList.toggle("access-header_show");
};

eyeBurger.addEventListener("click", toggleAccessibilityHeader);

// Функция - для добавление активных стилей
const activeButton = (button) => {
  button.style.background = "gray";
  button.style.border = "1px solid #ffffff";
  button.style.color = "#ffffff";
};

// Функция - для удаление активных стилей
const notActiveButton = (...buttons) => {
  buttons.map((button) => {
    button.style.background = "";
    button.style.border = "";
    button.style.color = "";
  });
};

// Изменение кнопок
const fontSizeLargeBtn = document.getElementById("font-size-large");
const fontSizeMediumBtn = document.getElementById("font-size-medium");
const fontSizeSmallBtn = document.getElementById("font-size-small");

// Обработчик клика на кнопке для изменения размера шрифта
fontSizeLargeBtn.addEventListener("click", () => {
  document.body.style.fontSize = "24px";
  notActiveButton(fontSizeMediumBtn, fontSizeSmallBtn);
  activeButton(fontSizeLargeBtn);
});

fontSizeMediumBtn.addEventListener("click", () => {
  document.body.style.fontSize = "18px";
  notActiveButton(fontSizeLargeBtn, fontSizeSmallBtn);
  activeButton(fontSizeMediumBtn);
});

fontSizeSmallBtn.addEventListener("click", () => {
  document.body.style.fontSize = "12px";
  notActiveButton(fontSizeLargeBtn, fontSizeMediumBtn);
  activeButton(fontSizeSmallBtn);
});

const letterSpacingLargeBtn = document.getElementById("letter-spacing-large");
const letterSpacingMediumBtn = document.getElementById("letter-spacing-medium");
const letterSpacingSmallBtn = document.getElementById("letter-spacing-small");

// Обработчик клика на кнопке для изменения интервала между буквами
letterSpacingLargeBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.2em";
  notActiveButton(letterSpacingMediumBtn, letterSpacingSmallBtn);
  activeButton(letterSpacingLargeBtn);
});

letterSpacingMediumBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.1em";
  notActiveButton(letterSpacingLargeBtn, letterSpacingSmallBtn);
  activeButton(letterSpacingMediumBtn);
});

letterSpacingSmallBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.05em";
  notActiveButton(letterSpacingLargeBtn, letterSpacingMediumBtn);
  activeButton(letterSpacingSmallBtn);
});

// Обработчик клика на кнопке Изображения
const bwButtons = document.getElementById("bw-button");
const colorButtons = document.getElementById("color-button");
const images = document.querySelectorAll(".my-image");

//Черно-белое
bwButtons.addEventListener("click", () => {
  images.forEach((image) => {
    image.style.filter = "grayscale(100%)";
  });
  notActiveButton(colorButtons);
  activeButton(bwButtons);
});

//Цветные
colorButtons.addEventListener("click", () => {
  images.forEach((image) => {
    image.style.filter = "none";
  });
  notActiveButton(colorButtons);
  activeButton(colorButtons);
});

// Cбрасывает все стили
const resetStylesBtn = document.getElementById("reset-styles-button");

resetStylesBtn.addEventListener("click", () => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.cssText = "";
  }
});
// Открывает версию для слабовидящих

//Для подсписков
const menuToggle = document.getElementById("menu-toggle");
const aboutLink = document.querySelector(".select[href='#']");
const sectionsLink = document.querySelectorAll(".select[href='#']");
const submenus = document.querySelectorAll(".burger__item > ul");

// Функция, которая открывает/закрывает подменю при клике на ссылку "О нас" или "Разделы"
function toggleSubmenu(event) {
  event.preventDefault();
  const submenu = this.nextElementSibling;
  submenu.classList.toggle("open");
}

// Функция, которая закрывает меню при клике на любое место вне меню
function closeMenu(event) {
  if (!event.target.closest(".burger")) {
    menuToggle.checked = false;
    submenus.forEach((submenu) => submenu.classList.remove("open"));
  }
}

// Назначаем обработчики событий на ссылки и на документ
aboutLink.addEventListener("click", toggleSubmenu);
sectionsLink.forEach((link) => link.addEventListener("click", toggleSubmenu));
document.addEventListener("click", closeMenu);

// Устанавливаем обновляемую дату
function updateDate() {
  var now = new Date();
  var dateElements = document.querySelectorAll(".date");
  var options = { year: "numeric", month: "long", day: "numeric" };
  dateElements.forEach(function (dateElement) {
    dateElement.innerHTML = now.toLocaleDateString("ru-RU", options);
  });
}

setInterval(updateDate, 100);
// Устанавливаем обновляемую дату

// Карточки свайпера
// const slides = [
//   {
//     image: "./images/Ala-Too-Square-Bishkek-Kyrgyzstan.webp",
//     description:
//       "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
//   },
//   {
//     image: "./images/random.jpg",
//     description:
//       "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
//   },
//   {
//     image: "./images/42227f99ce45d942a1824c6beadbb4e4.jpg",
//     description:
//       "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
//   },
//   {
//     image: "./images/772604.c2d590a5b031d53cc9add60339607368.jpg",
//     description:
//       "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
//   },
//   {
//     image: "./images/Kyrgyzatan_Summary_tcm10-33237.jpg",
//     description:
//       "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
//   },
// ];

// const slidesHtml = slides
//   .map(
//     (slide) => `
//     <div class="slide swiper-slide">
//     <div class="slide__image my-image">
//       <img src="${slide.image}" alt="random"/>
//     </div>
//     <div class="slide__info">
//       <h2 class="text">${slide.description}</h2>
//       <span class="date"></span>
//     </div>
//   </div>
// `
//   )
//   .join("");

// document.querySelector(".swiper-wrapper").innerHTML = slidesHtml;
// Карточки свайпера

// Каточки новостей
// const news = [
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/Ala-Too-Square-Bishkek-Kyrgyzstan.webp",
//   },
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/42227f99ce45d942a1824c6beadbb4e4.jpg",
//   },
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/772604.c2d590a5b031d53cc9add60339607368.jpg",
//   },
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/Kyrgyzatan_Summary_tcm10-33237.jpg",
//   },
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/flagFirst.jpg",
//   },
//   {
//     title:
//       "Аскар Сыдыков: Бизнес сталкивается с проблемами из-за ограничения на экспорт",
//     image: "./images/flagSecond.jpg",
//   },
// ];

// const newsHtml = news
//   .map(
//     (item) => `
//   <div class="news-list__card">
//   <div class="news-list__image">
//     <img src="${item.image}" alt="card-image" />
//   </div>
//   <div class="news-list__text">
//     <p>
//     ${item.title}
//     </p>
//   </div>
//   <div class="news-list__data-eye">
//     <i class="fa-solid fa-clock" style="color: #1f3b99"></i
//     ><span class="date"></span>
//     <i id="views-icon" class="fas fa-eye"></i>
//     <span class="views">0</span>
//   </div>
// </div>
// `
//   )
//   .join("");

// document.querySelector(".news-list").innerHTML = newsHtml;
// Каточки новостей

//Карточки вакансий
const data = [
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
  {
    title: "Водитель такси",
    price: "15 000 сом.",
    text: "Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения",
  },
];

const vacancyContainer = document.querySelector(".vacancy");
data.map((item) => {
  const html = `
    <input type="checkbox" id="menu-state"/>
    <div class="overlay-background"></div>
    
    <div class="modal">
      <div class="modal__content">
        <div class="modal__body">
          <div class="modal__header">
            <div class="modal__title"><h3>${item.title}</h3><span class="price">${item.price}</span></div>
            <label for="menu-state">
              <div class="modal__close">X</div>
            </label>
          </div>
          <p>
          ${item.text}
          </p>
        </div>
      </div>
    </div>
      <div class="vacancy__item">
        <h3>${item.title}</h3>
        <span class="price">${item.price}</span>
        <p>${item.text}</p>
        <label for="menu-state">
        <div class="vacancy__button"><span>Read More</span></div>
        </label>

      </div>
    `;
  vacancyContainer.insertAdjacentHTML("beforeend", html);
});
//Карточки вакансий

// Footer/Туултип
function showTooltip(event) {
  const element = event.target;
  const text = element.innerText.trim();

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = "Скопировано!";

  document.body.appendChild(tooltip);
  const elementRect = element.getBoundingClientRect();
  const elementTop =
    elementRect.top + window.pageYOffset - tooltip.offsetHeight - 5; // отступ сверху
  const elementLeft = elementRect.left + window.pageXOffset;

  tooltip.style.top = elementTop + "px";
  tooltip.style.left = elementLeft + "px";
  navigator.clipboard.writeText(text);

  setTimeout(() => {
    document.body.removeChild(tooltip);
  }, 1000);
}
// Footer/Туултип

// Для запрета прокрутки когда модалка открыто
const menuCheckbox = document.getElementById("menu-state");
const body = document.querySelector("body");

menuCheckbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("modal-open");
  } else {
    body.classList.remove("modal-open");
  }
});
// Для запрета прокрутки когда модалка открыто
