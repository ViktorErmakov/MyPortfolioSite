
var startX = null;
document.addEventListener("touchstart", touchstart);
document.addEventListener("touchend", touchend);
const slider_html = document.querySelectorAll('.slider_html');
const slider_1С = document.querySelectorAll('.slider_1С');

function touchstart(event) {

    if (event.target.offsetParent.className !== "slides" && event.target.offsetParent.className !== "slides_1C") {
        return;
    }
    
    if (event.touches.length === 1) {
        //just one finger touched
        startX = event.touches.item(0).clientX;
        startY = event.touches.item(0).clientY;
    } else {
        //a second finger hit the screen, abort the touch
        startX = null;
    }
}

function touchend(event) {

    if (event.target.offsetParent.className !== "slides" && event.target.offsetParent.className !== "slides_1C") {
        return;
    }

    const offsetX = 100; //at least 100px are a swipe

    if (startX) {

        //the only finger that hit the screen left it
        var endX = event.changedTouches.item(0).clientX;

        // 1С слайды
        if (event.target.offsetParent.className === "slides_1C") {

            // Найти текущий выбранный элемент
            let checkedNumber = 0;
            slider_1С.forEach(function (element, key) {
                if (element.checked) {
                    checkedNumber = key;
                }
            });


            if (endX > startX + offsetX) {
                //a left -> right swipe
                checkedNumber -= 1;
                if (checkedNumber < 0) {
                    checkedNumber = slider_1С.length - 1;
                }
                slider_1С[checkedNumber].click();
            }
            if (endX < startX - offsetX) {
                //a right -> left swipe
                checkedNumber += 1;
                if (checkedNumber > slider_1С.length - 1) {
                    checkedNumber = 0;
                }
                slider_1С[checkedNumber].click();
            }
        }

        // HTML слайды
        if (event.target.offsetParent.className === "slides") {

            // Найти текущий выбранный элемент
            let checkedNumber = 0;
            slider_html.forEach(function (element, key) {
                if (element.checked) {
                    checkedNumber = key;
                }
            });


            if (endX > startX + offsetX) {
                //a left -> right swipe
                checkedNumber -= 1;
                if (checkedNumber < 0) {
                    checkedNumber = slider_html.length - 1;
                }
                slider_html[checkedNumber].click();
            }
            if (endX < startX - offsetX) {
                //a right -> left swipe
                checkedNumber += 1;
                if (checkedNumber > slider_html.length - 1) {
                    checkedNumber = 0;
                }
                slider_html[checkedNumber].click();
            }
        }
    }
}