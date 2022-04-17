//導覽列漢堡鍵
$(function () {
    
})

//熱門話題影片燈箱
const lightBox = document.getElementById(`lightBox`); //宣告 lightBox 是 #lightBox
const colseBtns = document.getElementsByClassName(`closeBtn`); //宣告 colseBtns 是 closeBtn
const videos = document.querySelectorAll('.video'); // 宣告 videos 是 .video

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
    lightBox.innerHTML = `<iframe src='${url}?rel=0&amp;autoplay=1'  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    
    <button class="closeBtn x-btn" onclick="closeLightbox()"> <i class="fa-solid fa-xmark"></i> </button>`    
}

videos.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
})

//熱門城市
//jQuery 寫法：
// $(function () {
//     //宣告 cards 是 .recommend .card。
//     const cards = $('.recommend .card');
//     //先選到所有卡片，並且添加 mouseover 事件監聽，
//     cards.each(function (index) {                   
//         $(cards[index]).mouseover(function () {
//             //當任一張卡片監聽到 mouseover 時，每一張卡片都要執行 removeClass .extend。
//             cards.each(function (removeIndex) {     
//                 $(cards[removeIndex]).removeClass('extend')
//             })
//             //執行 addClass .extend 給被 mouseover 的卡片。
//             $(this).addClass('extend').fadeTo(400);
//         })
//     })
// });

// 原生 Javascript 寫法：
const cards = document.querySelectorAll('.carousel .card')

function cardsRemoveExtend() {
    cards.forEach(function (f) {
            f.classList.remove('extend');
        });
}
function cardsAddExtend() {
    cards.item(0).classList.add('extend');
    cards.item(5).classList.add('extend');
}

cards.forEach(function (e) {
    e.addEventListener('mouseover', function () {
        cardsRemoveExtend();
        this.classList.add('extend');
    });
});

// 熱門城市捲動影片
function $id(id) {
    return document.getElementById(id);    
}
function $cn(carousel_item) {
    return document.getElementsByClassName(carousel_item);
}

window.addEventListener("load", function () {

    let slidePosition = 0;
    let slides = $cn("carousel_item");
    let totalSlides = slides.length;

    let carousel_button_prev = document.getElementById('carousel_button_prev') //前一張按鈕
    let carousel_button_next = document.getElementById('carousel_button_next') //後一張按鈕

    carousel_button_prev.addEventListener("click", function () {
        moveToPrevSlide();
        cardsRemoveExtend();
        cardsAddExtend();
    })
    carousel_button_next.addEventListener("click", function () {
        moveToNextSlide();
        cardsRemoveExtend();
        cardsAddExtend();
    })

    function updateSlidePosition() {
        for (let slide of slides) {                             //選取到所有的 carousel_item 物件，如 foreach
            slide.classList.remove('carousel_item-visible');    //移除 carousel_item-visible 屬性
            slide.classList.add('carousel_item-hidden');        //添加 carousel_item-hidden 屬性
        }
        slides[slidePosition].classList.add('carousel_item-visible'); //將第 slidePosition 個物件 添加 carousel_item-visible 的屬性。
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) { //第一張圖是 slidePosition = 0，當 slidePosition = 8 時，已經是最後一張圖。為了讓 slidePosition = 9 時會回到第一張圖，所以 slidePosition 的值必須和 totalSlides -1 相同才能滿足條件式，以便執行陳述式。陳述式：當 位置的型值 === 陣列的型值 時，讓位置回到 0 。
            slidePosition = 0;
            // console.log(slidePosition)
        } else {
            slidePosition++
            // console.log(slidePosition)
        }
        updateSlidePosition();
    };

    function moveToPrevSlide() {
        if (slidePosition === 0) { //當 slidePosition === 0 時，totalSlides - 1 的值給 slidePosition。
            slidePosition = totalSlides - 1;
            // console.log(slidePosition)
        } else {
            slidePosition--;
            // console.log(slidePosition)
        }
        updateSlidePosition();
    };
})

//偵測螢幕上的 x 和 y 座標位置
$(function () {
    $('.map').mousemove(function (e) {
        let theText = $(this).attr(`X:${e.clientX} | Y:${e.clientY}`);
        $('#coordinate').show().text(`X:${e.clientX} | Y:${e.clientY}`);
        $('#coordinate').text(theText).show().css({
            left: e.clientX + 10,
            top: e.clientY + 10,
        });
    }).mouseout(function () {
        $('#coordinate').hide();
    })
})