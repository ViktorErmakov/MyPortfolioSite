
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

    console.log(event);
    
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
        }
        if (endY < startY - offsetY) {
            console.log('слишком большой свайп вниз');
        }

        // Найти текущий выбранный элемент
        let checkedNumber = 0;
        let checkedHTML = document.querySelectorAll('.slider_html');
        checkedHTML.forEach(function(element, key) {
            if (element.checked) {
                checkedNumber = key;
                // console.log(checkedNumber);
            }
            
            // console.log(element.checked);
        });


        if (endX > startX + offsetX) {
            //a left -> right swipe
            console.log('свайп вправо');
            // document.querySelectorAll('.slider_html')[checkedNumber].checked = false;
            checkedNumber -= 1;
            console.log(checkedNumber);
            // попытка установить чекед
            document.querySelectorAll('.slider_html')[checkedNumber].click();
            // document.querySelectorAll('.slider_html')[checkedNumber].checked = true;
        }
        if (endX < startX - offsetX) {
            //a right -> left swipe
            console.log('свайп влево');
            console.log(checkedNumber);
            // document.querySelectorAll('.slider_html')[checkedNumber].checked = false;
            checkedNumber += 1;
            console.log(checkedNumber);
            // document.querySelectorAll('.slider_html')[checkedNumber].checked = true;
            document.querySelectorAll('.slider_html')[checkedNumber].click();
        }
    }
}