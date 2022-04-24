/* 斷點設置 */
function breakpoint(winSize) { 
    if (winSize >= 1140)  return 5 
    else if (winSize < 1140 && winSize >= 960) return 4
    else if (winSize < 960 && winSize >= 720) return 3
    else if (winSize < 720 && winSize >= 425) return 2
    else if (winSize < 425 ) return 1
}

/* 推薦主題輪播 */
let pagePosition = 1;
let wrap = document.querySelector(`.carousel_item`);
let items = document.querySelectorAll(`.card`);
let slideContainer = document.querySelector(`.recommend`);

function pageSwitcher() {
    wrap = document.querySelector(`.carousel_item`);
    items = document.querySelectorAll(`.card`);
    slideContainer = document.querySelector(`.recommend`);
};

let itemTotal = items.length;     // 卡片總張數(這邊是7)
let itemNum = 3;                // 一屏要幾張
itemNum = breakpoint(slideContainer.offsetWidth); // 畫面小於等於 570px 時，秀出 2 張，大於 570px 時，秀出 3 張。
let curIndex = 0;
let windowW = slideContainer.offsetWidth;    // 螢幕目前寬度
let itemW = windowW / itemNum;
let wrapW = itemW * itemTotal;    // .wrap 的寬度

function $id(id) {
    return document.getElementById(id);
}
console.log(windowW, wrapW, itemTotal, itemW)

function wrapResize() {
    wrap.style.left = -itemW * curIndex + "px";
    $id("carousel_button_prev").disabled =
        curIndex == 0 ? true : false;

    $id("carousel_button_next").disabled =
        curIndex >= itemTotal - itemNum ? true : false;
}

function widthChange() {
    windowW = slideContainer.offsetWidth; // 螢幕目前寬度
    itemW = windowW / itemNum;
    wrapW = itemW * itemTotal; // .wrap 的寬度

    wrap.style.width = wrapW + 'px';   // .wrap 的寬度
    items.forEach(item => item.style.width = itemW + 'px'); // 卡片的寬度

}

$id("carousel_button_prev")
    .addEventListener('click', function () {
        curIndex--;
        wrapResize();
    })

$id("carousel_button_next")
    .addEventListener('click', function () {
        curIndex++;
        wrapResize();
    })


window.addEventListener('resize', function () {
    itemNum = breakpoint(slideContainer.offsetWidth);
    curIndex =
        curIndex > itemTotal - itemNum
            ? itemTotal - itemNum
            : curIndex;
    wrapResize();
    widthChange();
})

widthChange();