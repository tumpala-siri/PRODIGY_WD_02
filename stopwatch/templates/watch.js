var ms=0,s=0,m=0,h=0;

var timer;

var display = document.querySelector(".time");
var laping = document.querySelector(".laps");
 function start(){
    if(!timer){
        timer = setInterval(run,10);

    }
 }
 function run(){
    display.innerHTML = gettimer();
    ms++;
    if(ms == 100){
        ms=0;
        s++
    }
    if(s == 60){
        s = 0;
        m++;

    }
    if( m == 60){
        m=0;
        h++;
    }
     if(h == 13){
        h = 1
     }
        
 }
 function gettimer(){
    return((h<10 ? "0" + h : h) +" : " + (m<10 ? "0" + m :m)
             +" : " +(s<10 ? "0" + s :s) +" : " +(ms<10 ? "0" + ms :ms));
 }
  
function pause(){
    stoptimer();
}
function stoptimer(){
    clearInterval(timer);
    timer = false;

}
function reset(){
    stoptimer()
    ms = 0 ;
    s =0;
    m = 0;
    ms = 0;
    h = 0 ;
    display.innerHTML = gettimer() ;
    laping.innerHTML = ""   
}
 function lap(){
    if(timer){
        var li=document.createElement("li");
        li.innerHTML= gettimer();
        laping.appendChild(li)
    }
 }