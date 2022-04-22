const wrap  = document.querySelector(".carousel_item");
const items = document.querySelectorAll('.card');
const itemTotal = items.length;     // 卡片總張數(這邊是9)
let itemNum   = 3;                // 一屏要幾張
itemNum = window.innerWidth <= 570  ?  2  : 3;
let curIndex = 0;                   
let windowW = window.innerWidth;    // 螢幕目前寬度
let itemW   = windowW >= 960        // 卡片寬度
        ? 960     / itemNum
        : windowW / itemNum;
let wrapW   = itemW * itemTotal;    // .wrap 的寬度

function $id(id){  
    return document.getElementById(id);
}

function wrapResize(){
    wrap.style.left = -itemW * curIndex   +"px";
    $id("carousel_button_prev").disabled =
        curIndex == 0 ? true : false;
    
    $id("carousel_button_next").disabled = 
        curIndex >= itemTotal - itemNum ? true : false;
}

function widthChange(){
    windowW = window.innerWidth; // 螢幕目前寬度
    itemW   = windowW >= 960     // 卡片寬度
        ? 960     / itemNum
        : windowW / itemNum;
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
    itemNum = window.innerWidth <= 570  ?  2  : 3;
    curIndex = 
        curIndex > itemTotal - itemNum
        ? itemTotal - itemNum
        : curIndex;
    wrapResize();
    widthChange();
})

widthChange();