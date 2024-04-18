
// get New Hit
hitrn = 0;
score = 0;
timer=6;

function getHit() {
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hitrn;
}

function setscore() {
    score += 10;
    document.querySelector("#score").textContent = score;

}

function setTimer() {
  var timerInterval  =  setInterval(function(){
    if (timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(timerInterval);
        document.querySelector(".contentBottom").innerHTML="";
    }

    },1000) 
}


// make Bubble
function makeBubble() {
    var ball = ""
    for (var i = 1; i <= 35; i++) { 
        var rn = Math.floor(Math.random() * 10)
        ball += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".contentBottom").innerHTML = ball
}

document.querySelector(".contentBottom").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitrn) {
        setscore(); 
        makeBubble();
        getHit();
       
    }

});

makeBubble();
getHit(); 
setTimer();
