/* Initialize Swiper */
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        320: {  //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {  //当屏幕宽度大于等于768 
            slidesPerView: 2,
            spaceBetween: 20
        },
        1280: {  //当屏幕宽度大于等于1280
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
    loop: true, // 循環播放：https://swiperjs.com/swiper-api#param-loop

    disableOnInteraction: true,//滑鼠事件設定
    autoplay: {
        delay: 5000,
    },
    mousewheel: false,
    keyboard: true,    
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
    el: ".swiper-pagination",
clickable: true,
    },
navigation: {
    nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
    },
});