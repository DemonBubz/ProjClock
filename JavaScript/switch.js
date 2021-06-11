
function fork(){
document.getElementById("btn2").addEventListener("click",x=>{

    if(clock12Running){
        clearInterval(x1);
        x1=setInterval(function(){showClock24(defaultZone,'zeroCunt')});
        if(firstCardRunning){
        clearInterval(x2);
        console.log(selectedZoneC1,"this is in clock12runtime")
        x2=setInterval(function(){showClock24(selectedZoneC1,"firstCunt")},1000);
        }
        if(secondCardRunning){
            clearInterval(x3);
            x3=setInterval(function(){showClock24(selectedZoneC2,'secondCunt')},1000);
        }
        clock12Running=false;
    }else
     if(clock24Running){
        clearInterval(x1);
        x1=setInterval(function(){showClock12(defaultZone,'zeroCunt')});
        
         if(firstCardRunning){
        clearInterval(x2);
        x2=setInterval(function(){showClock12(selectedZoneC1,"firstCunt")},1000);
     }
        if(secondCardRunning){
            clearInterval(x3);
            x3=setInterval(function(){showClock12(selectedZoneC2,'secondCunt')},1000)
        }
        clock24Running=false;
    }
})
}