var input = document.getElementById("input");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var win = 0;
var round = 0; 
var roundcounter = document.getElementById("roundcounter");
var wincounter = document.getElementById("wincounter");
function yourluck() {
    var random = Math.ceil(Math.random()*6);
    h1.innerText = random;
    for (let i = 0; i <= 10; i++) {
        var winFound= false;
        if (input.value == random) {
            h2.innerText = "You Win";
            h2.style.color = "green";
            h2.style.textShadow = " 3px 5px 5px lightgreen"
            winFound = true;
        }else{
            h2.innerText = "Try again "
            h2.style.color = "Red"
            h2.style.textShadow = "3px 5px 52px pink";
        }
    }
    if(winFound) win++; wincounter.innerText = win;
    if(!winFound) round++; roundcounter.innerText = round;
    input.value = "";
}
function playagain() {
    history.go(0);
}