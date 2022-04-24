/* const swiper_pop_guide 宣告變數；new Swiper 不可以更改；可以使用 class 或 id 來命名物件 "#pop_guide_carousel" */
const swiper_pop_guide = new Swiper("#pop_guide_carousel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,  // 循環播放：https://swiperjs.com/swiper-api#param-loop

    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 60,
        modifier: 1,
        scale: 0.86,
        slideShadows: true,
    },
    roundLengths: true,         //模糊特效
    disableOnInteraction: true, //滑鼠事件設定
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
const pop_guide_autoplay = document.getElementById('pop_guide_carousel');

pop_guide_autoplay.addEventListener('mouseenter', function () {
    swiper_pop_guide.autoplay.stop();
    console.log('slider stopped');
})
pop_guide_autoplay.addEventListener('mouseleave', function () {
    swiper_pop_guide.autoplay.start();
    console.log('slider start again');
})