//導覽列搜尋欄
$(function () {
    
})




//熱門城市
//jQuery 寫法：
$(function () {

    //宣告 cards 是 .recommend .card。
    const cards = $('.recommend .card');

    //先選到所有卡片，並且添加 mouseover 事件監聽，
    cards.each(function (index) {                   
        $(cards[index]).mouseover(function () {

            //當任一張卡片監聽到 mouseover 時，每一張卡片都要執行 removeClass .extend。
            cards.each(function (removeIndex) {     
                $(cards[removeIndex]).removeClass('extend')
            })
            //執行 addClass .extend 給被 mouseover 的卡片。
            $(this).addClass('extend').fadeTo(400);

        })
    })
});

// 原生 Javascript 寫法：
// const cards = document.querySelectorAll('.recommend .card')
// cards.forEach(function (item) {
//     item.addEventListener('mouseover', function () {
//         cards.forEach(function (iitem) {
//             iitem.classList.remove('extend');
//         });
//         this.classList.add('extend')
//     });
// });