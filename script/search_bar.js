$(function () {
    $('#search').keyup(function () {   //每次keyup時，偵測按下甚麼鍵。 #: id屬性
        let name = $(this).value();
        //console.log(name);

        $(`ul span`).removeClass('highlight');

        if ($(this).value() != '') {  //如果(if) ('#search') 的值( value() )不是( != ) 空字串( '' )時，才執行下面程式。
            $(`ul span:contains(${name})`).addClass('highlight'); // 選到在 ul 裡面的子層，可以直接使用 ul(空白鍵) 子層標籤
        }
    });
});