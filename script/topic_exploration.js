const dom = document.querySelector('.product-list .card .row');
const productData = [
    {
        img:'./image/product/product-topic-card_cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan',
        title: '京都一日遊｜ 嵐山＆清水寺＆伏見稻荷大社＆金閣寺',
        content: '京都一日遊，一天之內走遍必去清水寺、金閣寺、嵐山、伏見稻荷大社！專業中日英語導覽，帶你從大阪梅田出發！搭乘舒適專車，輕鬆遊覽京都熱門景點！',
        score: 4.8,
        count: '5K+已購買',
        category: [ '熱門景點'
            
        ],
    },
    {
        img: './image/product/product-taipei_101_towl',
        title: '台北一日遊｜ 101大樓&貓空纜車&淡水漁人碼頭',
        content: '台北一日遊，一天之內走遍必去101大樓&貓空纜車&淡水漁人碼頭！專業中日英語導覽，帶你從台北車站出發！搭乘舒適專車，輕鬆遊覽台北熱門景點！',
        score: 4.7,
        count: '4K+已購買',
        category: [ '景點門票'

        ],
    },
    {
        img: './image/product/product-he famous roman colosseum',
        title: 'Colosseum Roman Forum and Palatine Hill tour',
        content: 'Book your experience the best of ancient Rome with skip-the-line tickets and an expert local guide to the Colosseum, Roman Form and Palatine Hill.',
        score: 4.3,
        count: '3K+已購買',
        category: [ '歷史景點'
            
        ],
    },
    {
        img:'./image/product/product-Mont Saint Michel Paris',
        title: '巴黎聖米歇爾山一日遊',
        content: '參加巴黎當地聖米歇爾山 Mont Saint-Michel 一日遊行程，帶你細細品味名列世界文化遺產的絕美修道院，不用煩惱巴黎到聖米歇爾山約 360 公里的交通規劃，行程包含修道院入場費，專業導覽人員將為你詳細解說，讓你輕鬆體驗深具文化歷史氣息的經典巴黎一日行。',
        score: 4.8,
        count: '5K+已購買',
        category: ['熱門景點','景點門票'
            
        ],
    },
    {
        img: './image/product/product-Venice Italy',
        title: '義大利威尼斯｜經典徒步＋貢多拉之旅',
        content: '來到威尼斯不知怎麼開始玩起嗎？此行程提供您經典的威尼斯徒步之旅加上貢多拉體驗，讓您的寶貴旅行時間有最超值的體驗。您將透過專業導遊的導覽下，走過威尼斯的經典景點並跟著導遊穿梭在如迷宮般的巷弄，走過一座座小巧可愛的橋，盡情體驗威尼斯的不同面貌！',
        score: 4.7,
        count: '4K+已購買',
        category: ['景點門票','博物館&美術館'

        ],
    },
    {
        img: './image/product/product-Giethoorn Holland',
        title: '荷蘭近郊一日遊｜羊角村',
        content: '從交通便利的阿姆斯特丹中央車站出發，搭乘專車巴士前往有「荷蘭威尼斯」之稱的羊角村。由專業導遊帶您遊覽這座美麗的運河之城，更能乘船穿梭在羊角村大大小小的運河之中，一窺羊角村的獨特風貌和美景。',
        score: 4.3,
        count: '3K+已購買',
        category: ['主題樂園','熱門景點'
            
        ],
    },
]


function productRender(outData) {
    let productGroup = '';  //執行的每一次都要先清空。
    outData.forEach(data => {
        productGroup += `<div class="col-md-4">
                            <img src="${data.img}.webp" class="img-fluid rounded mx-auto d-blockt" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex align-items-start flex-column bd-highlight" style="height: 100%;">
                                <h5 class="card-title h5_b_ch">${data['title']}</h5>
                                <p class="card-text h6_r_ch">${data.content}</p>
                                <p class="card-text mt-auto">
                                    <i class="fa-solid fa-star score"></i>
                                    <small class="score me-2">${data.score}</small>
                                    <small class="text-muted">${data.count}</small>
                                </p>
                            </div>
                        </div>`
    });
    dom.innerHTML = productGroup;
}

// console.log(productData, productGroup);

/* 做一個篩選器 Filter */ 
const FilterControler = function (chooses) { 
    if (chooses.length === 0) { 
        productRender(productData);
        return;
    }
    const newArr = productData.filter(data => {
        const arr = data.category.filter(cc => { 
            const inside = chooses.find(chose => chose===cc);
            if (inside) { return cc}
        })
        // console.log (arr)
        if (arr.length !== 0) { return data}
    });
    productRender(newArr);
};

const myForm = document.getElementById('myForm');
myForm.addEventListener('change', function () {   // change：有發生改變的意思，像是 checked、input... ...。
    // console.log(myForm['attractions[]']);
    const arr = [];     // 把有勾選到的 checkbox，放入陣列內。
    const names = ['attractions[]', 'delicacy[]', 'parentChildTravel[]', 'party[]', 'diyWorkShop[]', 'OutdoorActivity[]'];  // 對
    
    names.forEach(myname => {   // 對 names 陣列裡的每一個字串(myname)做事
        myForm[myname].forEach(item => {    // 對 myForm 裡的每一個 names 做事：'attractions[]', 'delicacy[]', 'parentChildTravel[]', 'party[]', 'diyWorkShop[]', 'OutdoorActivity[]'。
            if (item.checked) {     // 如果 myForm 的 names 陣列裡的每一個 checkbox 有被checked
                arr.push(item.value)    // 把 checked 的 checkbox 的值(value) 推入 (arr) 陣列裡。
            }
        });
    })
    FilterControler(arr)

    /* 下面是 foreach 的寫法
    myForm['attactions[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    myForm['delicacy[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    myForm['parentChildTravel[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    myForm['party[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    myForm['diyWorkShop[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    myForm['OutdoorActivity[]'].forEach(item => {
        if (item.checked) {
            arr.push(item.value)
        }
    });
    */
});

productRender(productData);