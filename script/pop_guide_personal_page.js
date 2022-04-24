// 【熱門話題】
/* 熱門話題燈箱 */
const lightBox = document.getElementById(`lightBox`); //宣告 lightBox 是 #lightBox
const colseBtns = document.getElementsByClassName(`closeBtn`); //宣告 colseBtns 是 closeBtn
const videos = document.querySelectorAll('.video'); // 宣告 videos 是 .video
const mySwiperSlides = document.querySelectorAll('.intruduce_video'); // 宣告 .intruduce_video 是 .video

const closeLightbox = function () { //宣告 closeLightbox 函式
    lightBox.style.display = 'none';
}

for (let btn of colseBtns) {
    btn.addEventListener("click", function () {
        closeLightbox();
    })
}

const openLightBox = function (url) {  //宣告 openLightBox 函式，帶入 iframe 連結 url
    lightBox.style.display = `flex`;    // lightBox 的 css 屬性的 display 是 `flex`。
}

videos.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
});
mySwiperSlides.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
});


/* 視訊燈箱內的按鈕 */
// const toggleBtns = document.getElementById(`toggle-btn`);
// const toggleBtnsActive = function () {
//     toggleBtns.classList.toggle("active");
// }
// for (let toggle of toggleBtns) {
//     toggle.addEventListener("click", function () {
//         toggleBtnsActive();
//     })
// }


const toggleBtns = document.querySelectorAll(`.btn`);
toggleBtns.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
        toggle.classList.toggle("active");
    })
});
/**/

