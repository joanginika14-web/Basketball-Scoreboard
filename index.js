let scoreH = 0;
let scoreG = 0;
function home1() {
    scoreH = scoreH + 1;
    document.getElementById("score1").innerHTML= scoreH;
}

function home2() {
    scoreH = scoreH + 2;
    document.getElementById("score1").innerHTML= scoreH;
}

function home3() {
    scoreH = scoreH + 3;
    document.getElementById("score1").innerHTML= scoreH;
}

function guest1() {
    scoreG = scoreG + 1;
    document.getElementById("score2").innerHTML= scoreG;
}

function guest2() {
    scoreG = scoreG + 2;
    document.getElementById("score2").innerHTML= scoreG;
}

function guest3() {
    scoreG = scoreG + 3;
    document.getElementById("score2").innerHTML= scoreG;
}

function reset() {
    console.log(scoreH);
    scoreH = 0;
    scoreG = 0;
    document.getElementById("score1").innerHTML= scoreH;
    document.getElementById("score2").innerHTML= scoreG;
}


