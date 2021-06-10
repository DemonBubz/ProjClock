let x1,x2,selectedZoneC1=defaultZone,selectedZoneC2=defaultZone;
function dropDown1Interface() {
    select[0].addEventListener("click", x => {
        if (clock12Running) {
            clearInterval(x1);
            clock12Running = false;
            selectedZoneC1 = select[0].options[select[0].selectedIndex].value;
            console.log("selected", selectedZoneC1);
            x1 = setInterval(function () { showClock12(selectedZoneC1, "firstCunt") }, 1000);
            console.log("clock12Running");
        } else if (clock24Running) {
            clearInterval(x2);
            clock24Running = false;
            selectedZoneC1 = select[0].options[select[0].selectedIndex].value;
            x2 = setInterval(function () { showClock24(selectedZoneC1, "firstCunt") }, 1000);
        }
    })
}

var secondCardRunning = false, x3;
function dropDown2Interface() {
    timeZoneMenu(importedTimeZoneList);

    // var secondDropDown=document.querySelector("#div3");
    var existingElem = document.querySelector('.container');
    var cardElem = existingElem.cloneNode(true);
    cardElem.class = 'container';
    cardElem.id = 'secondCunt';
    select[1].addEventListener("click", function () {
        existingElem.after(cardElem);
        if (!secondCardRunning) {
            // console.log("12",clock12Running,"24",clock24Running);
            secondCardRunning = true;
            if (clock12Running) {
                console.log('12 is running');
                x3 = setInterval(function () { showClock12(selectedZoneC2, 'secondCunt') }, 1000);
            }
            if (clock24Running){
                console.log("24 is running");
                x3 = setInterval(function () { showClock24(selectedZoneC2, 'secondCunt') }, 1000)
                
            }
            } else
            if (secondCardRunning) {
                console.log("second card is running")
                clearInterval(x3);
                selectedZoneC2 = select[1].options[select[1].selectedIndex].value;
                if (clock12Running) {
                    console.log('12 is running');
                    x3 = setInterval(function () { showClock12(selectedZoneC2, 'secondCunt') }, 1000);
                }
                if (clock24Running){
                    console.log("24 is running");
                    x3 = setInterval(function () { showClock24(selectedZoneC2, 'secondCunt') }, 1000)
                    
                }

            }
    })
}
// select[1].addEventListener("click",function(){

//     }
// })
// }