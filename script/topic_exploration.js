const dom = document.querySelector('.product-list .card .row');
const productData = [
    {
        img:'./image/product/product-topic-card_cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan',
        title: '京都一日遊｜ 嵐山＆清水寺＆伏見稻荷大社＆金閣寺',
        content: '京都一日遊，一天之內走遍必去清水寺、金閣寺、嵐山、伏見稻荷大社！專業中日英語導覽，帶你從大阪梅田出發！搭乘舒適專車，輕鬆遊覽京都熱門景點！',
        score: 4.8,
        count: '5K+已購買'
    },
    {
        img: './image/product/product-taipei_101_towl',
        title: '京都一日遊｜ 嵐山＆清水寺＆伏見稻荷大社＆金閣寺',
        content: '京都一日遊，一天之內走遍必去清水寺、金閣寺、嵐山、伏見稻荷大社！專業中日英語導覽，帶你從大阪梅田出發！搭乘舒適專車，輕鬆遊覽京都熱門景點！',
        score: 4.7,
        count: '4K+已購買'
    },
    {
        img: './image/product/product-he famous roman colosseum',
        title: '京都一日遊｜ 嵐山＆清水寺＆伏見稻荷大社＆金閣寺',
        content: '京都一日遊，一天之內走遍必去清水寺、金閣寺、嵐山、伏見稻荷大社！專業中日英語導覽，帶你從大阪梅田出發！搭乘舒適專車，輕鬆遊覽京都熱門景點！',
        score: 4.3,
        count: '3K+已購買'
    },
]
let productGroup = '';
productData.forEach(productData => {
    productGroup += `<div class="col-md-4">
                        <img src="${productData.img}.webp" class="img-fluid rounded mx-auto d-blockt" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body d-flex align-items-start flex-column bd-highlight" style="height: 100%;">
                            <h5 class="card-title h5_b_ch">${productData.title}</h5>
                            <p class="card-text h6_r_ch">${productData.content}</p>
                            <p class="card-text mt-auto">
                                <i class="fa-solid fa-star score"></i>
                                <small class="score me-2">${productData.score}</small>
                                <small class="text-muted">${productData.count}</small>
                            </p>
                        </div>
                    </div>`
});

dom.innerHTML = productGroup;
console.log(productData, productGroup);