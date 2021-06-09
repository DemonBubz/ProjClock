var date = new Date();
customDateFormat = { year: 'numeric', weekday: 'long', month: 'numeric', day: 'numeric' };
function playSound(min, sec) {
    elem = document.getElementById("sou");
    console.log(min, sec);
    if (min % 15 == 0 && sec == 0) {
        elem.play();
        setTimeout(function x() { elem.play(); }, 2000);
    }
}


function updateTime(k) {//to add a digit to clock element if they are in single digits ie <10
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
var showClockRunning=false,convertRunning=false;
function showClock() {
    if(showClockRunning==false){
        showClockRunning=true;
    }
    var date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let set = "";
    let custom = date.toLocaleDateString(undefined, customDateFormat);
    if (hour > 12) { //wrt 24hr clock
        set = "PM";
    } else set = "AM";
    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }
    hour = updateTime(hour);//converted to double digit strings if smaller than 10
    min = updateTime(min);
    sec = updateTime(sec);
    playSound(min, sec);
    let curTime = hour + ':' + min + ":" + sec + " " + set;
    document.querySelector('.container').innerHTML = custom + "<br>" + curTime;
}


function convert(){
    if(convertRunning==false){
        convertRunning=true;
    }
    var date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let set = "";
    let custom = date.toLocaleDateString(undefined, customDateFormat);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    playSound(min, sec);
    let curTime = hour + ':' + min + ":" + sec + " " + set;
    document.querySelector('.container').innerHTML = custom + "<br>" + curTime;
    
}
let x1,x2;
if(!showClockRunning && !convertRunning)
     x1=setInterval(showClock,1000);

document.getElementById("btn2").addEventListener("click",x=>{
    console.log(showClockRunning,convertRunning);
    if(showClockRunning){
        clearInterval(x1);
        showClockRunning=false;
        x2=setInterval(convert,1000);
    }else
     if(convertRunning){
        clearInterval(x2);
        convertRunning=false;
        x1=setInterval(showClock,1000);
    }
})
