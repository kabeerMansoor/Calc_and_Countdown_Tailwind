var [mili,sec,min] = [99,59,2];
var screen = document.getElementById("screen");
var timer = null;

// Function for conditions:
function timerstart(){
    mili--;
    if(mili == 0){
        sec--;
        mili=99;
        if(sec==0){
            min--;
            sec=59;
        }
    }
   screen.innerHTML = min + ":" + sec + ":" + mili;
};

// For start:
function Start(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(timerstart,10);
};

//For Stop:
function stop(){
    clearInterval(timer); //Here ClearInterval use to stop the time
};

//For Reset:
function Reset(){
    clearInterval(timer); //Here i stop the time the update (min,sec,mili)
    [mili,sec,min]=[99,59,2];
    screen.innerHTML = "02:59:99";
};