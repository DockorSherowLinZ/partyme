function $id(id) {  //$id("btnLeft")//---------------
    return document.getElementById(id);  //document.getElementById("btnRight")
}

window.addEventListener("load", function () {
    // const totalSlides = wrap.length;
    let wrap = $id('carousel');
    let curIndex = 0;
    let slides = document.getElementsByClassName('card');
    let totalSlides = slides.length;    

    $id("carousel_button_next").onclick = function () {
        
        wrap.style.right = 60 * curIndex + "px";
        if (curIndex === totalSlides - 1) {
            curIndex = 0;
            $id("carousel_button_prev").disabled = true;
        } else {
            curIndex++;
        }
        $id("carousel_button_next").disabled = false;
    }

    $id("carousel_button_prev").onclick = function () {
        
        wrap.style.left = -60 * curIndex + "px";
        if (curIndex === 0) {
            curIndex = totalSlides - 1;
            $id("carousel_button_next").disabled = true;
        } else {
            curIndex--;
        }
        $id("carousel_button_prev").disabled = false;
    };
});