// 【熱門話題】
//熱門話題燈箱
const lightBox = document.getElementById(`lightBox`); //宣告 lightBox 是 #lightBox
const colseBtns = document.getElementsByClassName(`closeBtn`); //宣告 colseBtns 是 closeBtn
const videos = document.querySelectorAll('.video'); // 宣告 videos 是 .video
const mySwiperSlides = document.querySelectorAll('.intruduce_video'); // 宣告 .intruduce_video 是 .video

const closeLightbox = function () { //宣告 closeLightbox 函式
    lightBox.style.display = 'none';
    lightBox.innerHTML = ``;
}

for (let btn of colseBtns) {
    btn.addEventListener("click", function () {
        closeLightbox();
    })
}

const openLightBox = function (url) {  //宣告 openLightBox 函式，帶入 iframe 連結 url
    lightBox.style.display = `flex`;    // lightBox 的 css 屬性的 display 是 `flex`。
    lightBox.innerHTML = `<iframe src='${url}?rel=0&amp;autoplay=1'  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <button class="closeBtn x-btn" onclick="closeLightbox()"> <i class="fa-solid fa-xmark"></i> </button>`
}

videos.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
})
mySwiperSlides.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
})