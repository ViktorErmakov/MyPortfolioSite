
var startX = null;
var startY = null;

// document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchstart", touchstart);
document.addEventListener("touchend", touchend);


function touchstart(event) {

    if (event.touches.length === 1) {
        //just one finger touched
        startX = event.touches.item(0).clientX;
        startY = event.touches.item(0).clientY;
    } else {
        //a second finger hit the screen, abort the touch
        startX = null;
        startY = null;
    }

    // console.log(event);
    
}

function touchend(event) {

    // console.log(startX);
    // console.log(startY);

    const offsetX = 100; //at least 100px are a swipe
    const offsetY = 50;

    if (startX) {

        //the only finger that hit the screen left it
        var endX = event.changedTouches.item(0).clientX;
        var endY = event.changedTouches.item(0).clientY;

        if (endY > startY + offsetY) {
            console.log('слишком большой свайп вверх');
            return;
        }
        if (endY < startY - offsetY) {
            console.log('слишком большой свайп вниз');
            return;
        }

        // Найти текущий выбранный элемент
        let checkedNumber = 0;
        let checkedHTML = document.querySelectorAll('.slider_html');
        checkedHTML.forEach(function(element, key) {
            if (element.checked) {
                checkedNumber = key;
            }
        });


        if (endX > startX + offsetX) {
            //a left -> right swipe
            // console.log('свайп вправо');
            checkedNumber -= 1;
            if (checkedNumber < 0) {
                checkedNumber = document.querySelectorAll('.slider_html').length - 1;
            }
            document.querySelectorAll('.slider_html')[checkedNumber].click();
        }
        if (endX < startX - offsetX) {
            //a right -> left swipe
            // console.log('свайп влево');
            // console.log(checkedNumber);
            checkedNumber += 1;
            console.log(checkedNumber);
            if (checkedNumber > document.querySelectorAll('.slider_html').length - 1) {
                checkedNumber = 0;
            }
            document.querySelectorAll('.slider_html')[checkedNumber].click();
        }
    }
}