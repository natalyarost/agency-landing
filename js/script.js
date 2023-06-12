const footerYearEl = document.querySelector('.footer__year');
const topButton = document.querySelector('.top__content_button');
const contactSection = document.querySelector('.contact__box');
const servicesButton = document.querySelector('.services__content_button');
const sectionProducts = document.querySelector('.products__heading');
const menuBurger = document.querySelector ('.menu__burger');
const headerMenu = document.querySelector ('.menu');
const toTopBtn = document.querySelector(".to-up");

let year = newFunction(); // 2023

function newFunction() {
    let today = new Date();
    let year = today.getFullYear(); // 2023
    return year;
}

footerYearEl.textContent = year.toString(); // привязан к css стилю span

//бургер меню
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
});

//кнопка контента топ переход на контакты
topButton.addEventListener('click', () => {
    contactSection.scrollIntoView({
        behavior: "smooth",
    });
});

//кнопка сервиса переход на продукты
servicesButton.addEventListener('click', () => {
    sectionProducts.scrollIntoView({
        behavior: "smooth",
    });
});

// скролл
document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function () {
        if (window.scrollY > 580) {           
            toTopBtn.style.display = "block"
        } else {
            toTopBtn.style.display = "none"
        }
    }

// плавный скролл наверх
    toTopBtn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});

