var score = 0;
var time = 60;
var hit ;
var frombubbleNum ;


function bubblmaker() {
    var bubblegroup = " ";
    for (var i = 1; i <= 216; i++) {
        var num = Math.floor(Math.random() * 10);
        bubblegroup += `<div class="bubble">${num}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = bubblegroup;
}

function runTimer() {
  var timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timebox").innerHTML = time;
        }
        else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </br> <p>Your Score : ${score}</p></h1>`;
        }

    }, 1000)
}
function targetNumber() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hit;
}
function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", (det) => {
    frombubbleNum = Number(det.target.textContent);
if(frombubbleNum === hit){
    increaseScore();
    bubblmaker();
    targetNumber();
}

});



bubblmaker();
targetNumber();
runTimer();
