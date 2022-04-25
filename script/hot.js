// 【換頁按鈕】
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            switchPage(page_id);
            pageSwitcher();
        });
    }

function switchPage(page_id) {

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}





//推薦話題卡片 hover
// jQuery 寫法：
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
    });


// 【推薦話題】
// 推薦話題hover卡片效果
// const cards = document.querySelectorAll('.carousel .card')

// function cardsRemoveExtend() {
//     cards.forEach(function (f) {
//             f.classList.remove('extend');
//         });
// }
// function cardsAddExtend() {
//     cards.item(0).classList.add('extend');
//     cards.item(5).classList.add('extend');
// }

// cards.forEach(function (e) {
//     e.addEventListener('mouseover', function () {
//         cardsRemoveExtend();
//         this.classList.add('extend');

//     });
// });