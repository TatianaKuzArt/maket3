window.addEventListener("resize", () => {
    swiperCard()
    hideBrands()
});
document.addEventListener("DOMContentLoaded", () => {
    swiperCard();
    hideBrands();
});

const brandItems = document.querySelector(".brand__items").getElementsByClassName('brand__item');
const showMore = document.querySelector(".brand__show-more");
let hideBrand = true;

document.querySelector(".brand__show-more").onclick = () => {
    if (hideBrand) {
        for (let i = 0; i < brandItems.length; i++) {
            brandItems[i].style.display = 'block';
        }
        hideBrand = false;
        showMore.textContent = 'Скрыть';
        showMore.style.backgroundImage = "url(img/hide.svg)";
    } else {
        hideBrand = true;
        hideBrands();
        showMore.textContent = 'Показать все';
        showMore.style.backgroundImage = "url(img/show-more.svg)";

    }
    return false
}


function hideBrands() {
    for (let i = 0; i < brandItems.length; i++) {
        brandItems[i].style.display = 'block';
        if (window.innerWidth >= 768 && window.innerWidth < 1120 && i > 5) {
            brandItems[i].style.display = 'none';
        }
        if (window.innerWidth >= 1120 && i > 7) {
            brandItems[i].style.display = 'none';
        }
    }
    hideBrand = true;

}

let swiper;
let init = false;
function swiperCard() {
    if (window.innerWidth < 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: 'horizontal',
                spaceBetween: 60,
                slidesPerView: 1.5,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
