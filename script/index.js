//導覽列漢堡鍵
$(function () {
    
})

// 【熱門話題】
//熱門話題燈箱
const lightBox = document.getElementById(`lightBox`); //宣告 lightBox 是 #lightBox
const colseBtns = document.getElementsByClassName(`closeBtn`); //宣告 colseBtns 是 closeBtn
const videos = document.querySelectorAll('.video'); // 宣告 videos 是 .video
const mySwiperSlides = document.querySelectorAll('.swiper-slide .card , .swiper-slide .card_mobile'); // 宣告 .swiper-slide .card , .swiper-slide .card_mobile 是 .video

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
mySwiperSlides.forEach(function (video) {
    video.addEventListener("click", function () {
        openLightBox(video.dataset.url);
    })
})

// 【熱門城市】
// 地圖ICON
const defaultIcons = [  //預設畫的座標
    { city: '台北', "x": "83%", "y": "45%" },
    { city: '江蘇', "x": "82%", "y": "40%" },
    { city: '馬爾地夫', "x": "69%", "y": "55.00000000000001%" },
    { city: '西安', "x": "78%", "y": "35%" },
    { city: '曼哈頓', "x": "28.000000000000004%", "y": "38%" },
];

const map = document.querySelector('.map');
const mapImg = document.querySelector('.map img');
const icon = document.getElementById('icon');
const result = document.getElementById('result');


// 抓地圖座標
// map.addEventListener('click', function (e) {
//     const rect = map.getBoundingClientRect();
//     const x = (Math.round((e.offsetX / rect.width) * 100) / 100) * 100 + '%';
//     const y = (Math.round((e.offsetY / rect.height) * 100) / 100) * 100 + '%';
//     icon.style.left = x;
//     icon.style.top = y;
//     // show text from arr
//     const obj = { x, y };
//     arr.push(obj);
//     console.log(arr);
//     result.innerHTML = arr.map(t => JSON.stringify(t)).join('<br>');
// });

//畫預設座標
function drawIcons(position, first = null) {
    const new_icon = document.createElement('div');
    new_icon.className = `icon ${first ? 'text-active' : 'text-gray'}`;
    new_icon.dataset.city = position.city
    new_icon.innerHTML = `<i class="fa-solid fa-location-dot ${first && 'fa-bounce'}"> ${position.city}</i>`;
    map.appendChild(new_icon);
    new_icon.style.left = position.x;
    new_icon.style.top = position.y;
}
defaultIcons.forEach((item, i) => {
    drawIcons(item, i === 0 ? true : null)
});

//點到的座標會跳起來
// const icons = document.getElementsByClassName('icon');
// for (let item of icons) {
//     item.addEventListener('click', function (e) {
//         for (let ii of icons) {
//             ii.firstChild.classList.remove('fa-bounce');
//             ii.classList.remove('text-active');
//             ii.classList.add('text-gray');
//         }
//         this.firstChild.classList.add('fa-bounce');
//         this.classList.add('text-active');
//         this.classList.remove('text-gray');
//     });
// }

function jumpIcon(cityName) {
    const icons = document.getElementsByClassName('icon');
    for (let ii of icons) {
        ii.firstChild.classList.remove('fa-bounce');
        ii.classList.remove('text-active');
        ii.classList.add('text-gray');
        if (ii.dataset.city === cityName) {
            ii.firstChild.classList.add('fa-bounce');
            ii.classList.add('text-active');
            ii.classList.remove('text-gray');
        }
    }
}


// 熱門城市hover卡片效果
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
 
        // hover 卡片後  座標家跳動的class
        const card_city = this.dataset.city;
        jumpIcon(card_city)
    });
});


// 輪播影片
// function $id(id) {
//     return document.getElementById(id);    
// }
// function $cn(carousel_item) {
//     return document.getElementsByClassName(carousel_item);
// }

// window.addEventListener("load", function () {

//     let slidePosition = 0;
//     let slides = $cn("carousel_item");
//     let totalSlides = slides.length;

//     let carousel_button_prev = document.getElementById('carousel_button_prev') //前一張按鈕
//     let carousel_button_next = document.getElementById('carousel_button_next') //後一張按鈕

//     carousel_button_prev.addEventListener("click", function () {
//         moveToPrevSlide();
//         cardsRemoveExtend();
//         cardsAddExtend();
//     })
//     carousel_button_next.addEventListener("click", function () {
//         moveToNextSlide();
//         cardsRemoveExtend();
//         cardsAddExtend();
//     })

//     function updateSlidePosition() {
//         for (let slide of slides) {                             //選取到所有的 carousel_item 物件，如 foreach
//             slide.classList.remove('carousel_item-visible');    //移除 carousel_item-visible 屬性
//             slide.classList.add('carousel_item-hidden');        //添加 carousel_item-hidden 屬性
//         }
//         slides[slidePosition].classList.add('carousel_item-visible'); //將第 slidePosition 個物件 添加 carousel_item-visible 的屬性。
//     }

//     function moveToNextSlide() {
//         if (slidePosition === totalSlides - 1) { //第一張圖是 slidePosition = 0，當 slidePosition = 8 時，已經是最後一張圖。為了讓 slidePosition = 9 時會回到第一張圖，所以 slidePosition 的值必須和 totalSlides -1 相同才能滿足條件式，以便執行陳述式。陳述式：當 位置的型值 === 陣列的型值 時，讓位置回到 0 。
//             slidePosition = 0;
//             // console.log(slidePosition)
//         } else {
//             slidePosition++
//             // console.log(slidePosition)
//         }
//         updateSlidePosition();
//     };

//     function moveToPrevSlide() {
//         if (slidePosition === 0) { //當 slidePosition === 0 時，totalSlides - 1 的值給 slidePosition。
//             slidePosition = totalSlides - 1;
//             // console.log(slidePosition)
//         } else {
//             slidePosition--;
//             // console.log(slidePosition)
//         }
//         updateSlidePosition();
//     };
// })


//熱門城市卡片 hover
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