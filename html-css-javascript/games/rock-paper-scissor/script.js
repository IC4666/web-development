let ypoint = 0;
let cpoint = 0;

//-----------------Result Section
function yscore() {
    return ypoint += 1;
}

function cscore() {
    return cpoint += 1;
}

function reset() {
    ypoint = 0;
    cpoint = 0;
    document.getElementById("cs").innerHTML = 0;
    document.getElementById("ys").innerHTML = 0;
    document.getElementById("Mes").innerHTML = "Click the buttons above";
    document.getElementById("Res").innerHTML = "To Play";
}


//---------------Play Section
function rock() {
    let move = Math.random();
    
    if (move > 0 && move < 0.3) {
        document.getElementById("Mes").innerHTML = "Computer Chose Rock👊";
        document.getElementById("Res").innerHTML = "Tie!";
    }
    else if (move > 0.3 && move < 0.6) {
        document.getElementById("Mes").innerHTML = "Computer Chose Paper🖐";
        document.getElementById("Res").innerHTML = "You Lose!"
        document.getElementById("cs").innerHTML = cscore();

    }
    else if (move > 0.6 && move < 1) {
        document.getElementById("Mes").innerHTML = "Computer Chose Scissor✌";
        document.getElementById("Res").innerHTML = "You Win!!!";
        document.getElementById("ys").innerHTML = yscore();
    }
}

function paper() {
    let move = Math.random();

    if (move > 0 && move < 0.3) {
        document.getElementById("Mes").innerHTML = "Computer Chose Rock👊";
        document.getElementById("Res").innerHTML = "You Win!!!";
        document.getElementById("ys").innerHTML = yscore();
    }
    else if (move > 0.3 && move < 0.6) {
        document.getElementById("Mes").innerHTML = "Computer Chose Paper🖐";
        document.getElementById("Res").innerHTML = "Tie!";
    }
    else if (move > 0.6 && move < 1) {
        document.getElementById("Mes").innerHTML = "Computer Chose Scissor✌";
        document.getElementById("Res").innerHTML = "You Lose!";
        document.getElementById("cs").innerHTML = cscore();
    }
}

function scissor() {
    let move = Math.random();
    
    if (move > 0 && move < 0.3) {
        document.getElementById("Mes").innerHTML = "Computer Chose Rock👊";
        document.getElementById("Res").innerHTML = "You Lose!";
        document.getElementById("cs").innerHTML = cscore();
    }
    else if (move > 0.3 && move < 0.6) {
        document.getElementById("Mes").innerHTML = "Computer Chose Paper🖐";
        document.getElementById("Res").innerHTML = "You Win!!!";
        document.getElementById("ys").innerHTML = yscore();
    }
    else if (move > 0.6 && move < 1) {
        document.getElementById("Mes").innerHTML = "Computer Chose Scissor✌";
        document.getElementById("Res").innerHTML = "Tie!";
    }
}


// localStorage.getItem('pointCom');
// localStorage.getItem('pointYou');

// let pointY = toString(ypoint);
// localStorage.setItem('pointYou', 'pointY' );
// let pointC = toString(cpoint);
// localStorage.setItem('pointCom', 'pointC' );