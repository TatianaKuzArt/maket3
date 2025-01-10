let init = false;
let swiper;

function swiperCard() {
    if (window.innerWidth <= 767) {
        if (!init) {
            init = true;

            let swiper = new Swiper(".swiper", {
                direction: 'horizontal',
                spaceBetween: 10,
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

swiperCard();
window.addEventListener("resize", swiperCard);

const content = document.querySelectorAll('.swiper-slide');
const buttonShow = document.querySelector('.brand__more_show');
const buttonHide = document.querySelector('.brand__more_hide');


buttonShow.addEventListener("click", event => {
    event.preventDefault();

    buttonHide.classList.toggle('hidden');
    buttonShow.classList.toggle('hidden');


    content.forEach((item) => {
        item.style.display = 'block';
    })
})

buttonHide.addEventListener("click", event => {
    event.preventDefault();
    buttonHide.classList.toggle('hidden');
    buttonShow.classList.toggle('hidden');

    content.forEach((item, index) => {
        if (window.innerWidth > 1119 && index > 7) {
            item.style.display = 'none';
        }
        if (window.innerWidth > 767 && window.innerWidth < 1120 && index > 5) {
            item.style.display = 'none';
        }
    })
})





