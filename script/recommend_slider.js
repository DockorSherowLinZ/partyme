let pagePosition = 1;
let wrap = document.querySelector(`[data-page="${pagePosition}"] .carousel_item`);
let items = document.querySelectorAll(`[data-page="${pagePosition}"] .card`);
let slideContainer = document.querySelector(`[data-page="${pagePosition}"] .recommend`);

function pageSwitcher() {
    wrap = document.querySelector(`[data-page="${pagePosition}"] .carousel_item`);
    items = document.querySelectorAll(`[data-page="${pagePosition}"] .card`);
    slideContainer = document.querySelector(`[data-page="${pagePosition}"] .recommend`);
};

let itemTotal = items.length;     // 卡片總張數(這邊是7)
let itemNum   = 3;                // 一屏要幾張
itemNum = slideContainer.offsetWidth <= 960  ?  2  : 4; // 畫面小於等於 570px 時，秀出 2 張，大於 570px 時，秀出 3 張。
let curIndex = 0;                   
let windowW = slideContainer.offsetWidth;    // 螢幕目前寬度
let itemW   = windowW / itemNum;
let wrapW   = itemW * itemTotal;    // .wrap 的寬度

function $id(id){  
    return document.getElementById(id);
}
console.log(windowW, wrapW, itemTotal, itemW)

function wrapResize(){
    wrap.style.left = -itemW * curIndex   +"px";
    $id("carousel_button_prev").disabled =
        curIndex == 0 ? true : false;
    
    $id("carousel_button_next").disabled = 
        curIndex >= itemTotal - itemNum ? true : false;
}

function widthChange(){
    windowW = slideContainer.offsetWidth; // 螢幕目前寬度
    itemW   = windowW / itemNum;
    wrapW   = itemW * itemTotal; // .wrap 的寬度
    
    wrap.style.width = wrapW + 'px';   // .wrap 的寬度
    items.forEach(item => item.style.width = itemW + 'px'); // 卡片的寬度

}

$id("carousel_button_prev")
.addEventListener('click',function(){
    curIndex--;
    wrapResize();
})

$id("carousel_button_next")
.addEventListener('click', function(){  
    curIndex++;
    wrapResize();
})


window.addEventListener('resize', function() {
    itemNum = slideContainer.offsetWidth <= 960  ?  2  : 3;
    curIndex = 
        curIndex > itemTotal - itemNum
        ? itemTotal - itemNum
        : curIndex;
    wrapResize();
    widthChange();
})

widthChange();