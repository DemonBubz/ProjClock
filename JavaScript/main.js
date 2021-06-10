function beginConstruct(){
    if(!clock12Running && !clock24Running){
        timeZoneMenu(importedTimeZoneList)
         x1=setInterval(function(){showClock12(defaultZone,"zeroCunt")},1000);
        }
        dropDown1Interface();
        dropDown2Interface();
        fork();
}
beginConstruct();