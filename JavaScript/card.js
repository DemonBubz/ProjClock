let x1, x2, selectedZoneC1 = defaultZone, selectedZoneC2 = defaultZone;

var firstCardRunning=false;
function dropDown1Interface() {
    var existingElem=document.querySelector('#zeroCunt');
    var cardElem=existingElem.cloneNode(true);
    cardElem.class='container';
    cardElem.id='firstCunt';
    cardElem.style.boxSizing="border-box";
    cardElem.style.width="33vw";
    cardElem.style.display="inline-block";
    cardElem.style.position="relative";
    cardElem.style.fontSize="2vw";
    // cardElem.style.right="2px"
    cardElem.style.float="2px";
    // cardElem.style.background="linear-gradient(to right, rgb(122 123 52), rgb(154 143 9))";
    // cardElem.style.background="linear-gradient(to right, rgb(13 10 27), rgb(13 25 47))";

   
    
    select[0].addEventListener("click", x => {
       existingElem.after(cardElem);
       firstCardRunning=true;
       clearInterval(x2);
       selectedZoneC1 = select[0].options[select[0].selectedIndex].value;
        if (clock12Running) {
            clock12Running = false;
            console.log("selected", selectedZoneC1);
            x2 = setInterval(function () { showClock12(selectedZoneC1,'firstCunt') }, 1000);
            console.log("clock12Running");
        } else if (clock24Running) {
            clock24Running = false;
            x2 = setInterval(function () { showClock24(selectedZoneC1, "firstCunt") }, 1000);
        }
    })
}

var secondCardRunning = false, x3;
function dropDown2Interface() {
    timeZoneMenu(importedTimeZoneList);
    var existingElem = document.querySelector('.container');
    var cardElem = existingElem.cloneNode(true);
    cardElem.class = 'container';
    cardElem.id = 'secondCunt';
    cardElem.style.boxSizing="border-box";
    cardElem.style.width="33vw";
    cardElem.style.display="inline-block";
    cardElem.style.fontSize="2vw";
    cardElem.style.position="realtive";
    cardElem.style.clear="both";
    cardElem.style.float="right";
    // cardElem.style.right="2px"
    // cardElem.style.background="linear-gradient(to right, rgb(109 18 11), rgb(26, 1, 1))";
    // cardElem.style.background="linear-gradient(to right, rgb(13 10 27), rgb(13 25 47))";
    
    
    // cardElem.style.float="right";
    select[1].addEventListener("click", function () {
        existingElem.after(cardElem);
        // console.log("12",clock12Running,"24",clock24Running);
        secondCardRunning = true;

        console.log("second card is running")
        clearInterval(x3);//for reseting timezone after object creation
        selectedZoneC2 = select[1].options[select[1].selectedIndex].value;
        if (clock12Running) {
            console.log('12 is running');
            x3 = setInterval(function () { showClock12(selectedZoneC2, 'secondCunt') }, 1000);
        }
        if (clock24Running) {
            console.log("24 is running");
            x3 = setInterval(function () { showClock24(selectedZoneC2, 'secondCunt') }, 1000)

        }


    })
}
