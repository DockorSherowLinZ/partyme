window.addEventListener("load", function () {

    const dom = document.querySelector(`.guides .row`);

    /* 要建立出來的資料 */
    const guidesData = [
        {
            title: 'Jolin',
            score: 4.1,
            category: '美食探索',
            frequency: '1,621',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                    <button><i class="fa-solid fa-bell"></i></button>
                    <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //0
        {
            title: 'Brandon',
            score: 4.0,
            category: '深山探險',
            frequency: '685',
            contact: `<button><i class="fa-solid fa-message"></i></button>
                                <button><i class="fa-solid fa-video"></i></button>
                                <button class="item">
                                    <i class="fa-solid fa-list-ul"></i>
                                    <div class="list-ul">
                                        <div class="record note-books">
                                            <i class="fa-solid fa-clipboard"></i>
                                            <span>筆記本</span>
                                        </div>
                                        <div class="record photo-books">
                                            <i class="fa-solid fa-images"></i>
                                            <span>相簿</span>
                                        </div>
                                    </div>
                                </button>`
        }, //1
        {
            title: 'Mindy',
            score: 3.5,
            category: '知性旅遊',
            frequency: '2,206',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //2
        {
            title: 'Jarrett',
            score: 3.8,
            category: '知名景點旅遊',
            frequency: '2,183',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //3
        {
            title: 'Maria',
            score: 3.6,
            category: '藝術文化',
            frequency: '1,235',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //4
        {
            title: 'Trent',
            score: 3.3,
            category: '跳島郵輪',
            frequency: '736',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //5
        {
            title: 'Nixon',
            score: 3.7,
            category: '露營車旅行',
            frequency: '1,936',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //6
        {
            title: 'Paige',
            score: 3.9,
            category: '野外草原攝影',
            frequency: '4,317',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //7
        {
            title: 'Christopher',
            score: 4.1,
            category: '城市跑酷',
            frequency: '883',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //8
        {
            title: 'Claire',
            score: 3.2,
            category: '異國美食探索',
            frequency: '1,533',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //9
        {
            title: 'Alexandra',
            score: 4.0,
            category: '藝術與深度文化',
            frequency: '3,622',
            contact: `<button><i class="fa-solid fa-message"></i></button>
                                <button><i class="fa-solid fa-video"></i></button>
                                <button class="item">
                                    <i class="fa-solid fa-list-ul"></i>
                                    <div class="list-ul">
                                        <div class="record note-books">
                                            <i class="fa-solid fa-clipboard"></i>
                                            <span>筆記本</span>
                                        </div>
                                        <div class="record photo-books">
                                            <i class="fa-solid fa-images"></i>
                                            <span>相簿</span>
                                        </div>
                                    </div>
                                </button>`
        }, //10
        {
            title: 'Frank',
            score: 4.1,
            category: '藝術與深度文化',
            frequency: '5,327',
            contact: `<button><i class="fa-solid fa-message"></i></button>
                                <button><i class="fa-solid fa-video"></i></button>
                                <button class="item">
                                    <i class="fa-solid fa-list-ul"></i>
                                    <div class="list-ul">
                                        <div class="record note-books">
                                            <i class="fa-solid fa-clipboard"></i>
                                            <span>筆記本</span>
                                        </div>
                                        <div class="record photo-books">
                                            <i class="fa-solid fa-images"></i>
                                            <span>相簿</span>
                                        </div>
                                    </div>
                                </button>`
        }, //11
        {
            title: 'Jolin',
            score: 4.1,
            category: '美食探索',
            frequency: '1,621',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                    <button><i class="fa-solid fa-bell"></i></button>
                    <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //12
        {
            title: 'Brandon',
            score: 4.0,
            category: '深山探險',
            frequency: '685',
            contact: `<button><i class="fa-solid fa-message"></i></button>
                                <button><i class="fa-solid fa-video"></i></button>
                                <button class="item">
                                    <i class="fa-solid fa-list-ul"></i>
                                    <div class="list-ul">
                                        <div class="record note-books">
                                            <i class="fa-solid fa-clipboard"></i>
                                            <span>筆記本</span>
                                        </div>
                                        <div class="record photo-books">
                                            <i class="fa-solid fa-images"></i>
                                            <span>相簿</span>
                                        </div>
                                    </div>
                                </button>`
        }, //13
        {
            title: 'Mindy',
            score: 3.5,
            category: '知性旅遊',
            frequency: '2,206',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //14
        {
            title: 'Jarrett',
            score: 3.8,
            category: '知名景點旅遊',
            frequency: '2,183',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //15
        {
            title: 'Maria',
            score: 3.6,
            category: '藝術文化',
            frequency: '1,235',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //16
        {
            title: 'Trent',
            score: 3.3,
            category: '跳島郵輪',
            frequency: '736',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //17
        {
            title: 'Nixon',
            score: 3.7,
            category: '露營車旅行',
            frequency: '1,936',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //18
        {
            title: 'Paige',
            score: 3.9,
            category: '野外草原攝影',
            frequency: '4,317',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //19
        {
            title: 'Christopher',
            score: 4.1,
            category: '城市跑酷',
            frequency: '883',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //20
        {
            title: 'Claire',
            score: 3.2,
            category: '異國美食探索',
            frequency: '1,533',
            contact: `<button><i class="fa-solid fa-user-plus"></i></button>
                                <button><i class="fa-solid fa-bell"></i></button>
                                <button><i class="fa-solid fa-bookmark"></i></button>`
        }, //21
        {
            title: 'Alexandra',
            score: 4.0,
            category: '藝術與深度文化',
            frequency: '3,622',
            contact: `<button><i class="fa-solid fa-message"></i></button>
                                <button><i class="fa-solid fa-video"></i></button>
                                <button class="item">
                                    <i class="fa-solid fa-list-ul"></i>
                                    <div class="list-ul">
                                        <div class="record note-books">
                                            <i class="fa-solid fa-clipboard"></i>
                                            <span>筆記本</span>
                                        </div>
                                        <div class="record photo-books">
                                            <i class="fa-solid fa-images"></i>
                                            <span>相簿</span>
                                        </div>
                                    </div>
                                </button>`
        }, //22
        {
            title: 'Frank',
            score: 4.1,
            category: '藝術與深度文化',
            frequency: '5,327',
            contact: `  <button><i class="fa-solid fa-message"></i></button>
                        <button><i class="fa-solid fa-video"></i></button>
                        <button class="item">
                            <i class="fa-solid fa-list-ul"></i>
                            <div class="list-ul">
                                <div class="record note-books">
                                    <i class="fa-solid fa-clipboard"></i>
                                    <span>筆記本</span>
                                </div>
                                <div class="record photo-books">
                                    <i class="fa-solid fa-images"></i>
                                    <span>相簿</span>
                                </div>
                            </div>
                        </button>`
        }, //23
    ]
    /* 在 wallOfFame 裡面建立HTML物件 */
    let wallOfFame = '';
    guidesData.forEach(guideData => {
        wallOfFame += `<div class="col">
                        <a href="./pop_guide_personal_page.html" class="card">
                            <div class="guide">
                                <h3 class="name h4_b_ch">${guideData.title}</h3>
                                <div class="detial">
                                    <div class="score">
                                        <i class="fa-solid fa-star"></i><span>${guideData.score}</span>
                                    </div>
                                </div>
                                <h4 class="t1_r_ch">${guideData.category}</h4>
                                <p class="t1_r_ch">出團次數 ${guideData.frequency} 次</p>
                            </div>
                            <div class="contact">
                                ${guideData.contact}
                            </div>
                        </a>
                    </div>`
    });

    dom.innerHTML = wallOfFame; // 建立 HTML 物件

});