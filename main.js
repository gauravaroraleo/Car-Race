c1 = document.getElementById("myCanvas");
ctx = c1.getContext("2d");
car1width = 100;
car1height = 100;
car2width = 100;
car2height = 100;
car1x = 10;
car1y = 10;
car2x = 10;
car2y = 500;
bg = "download (35).jpeg"
car1img = "Car1.jpeg";
car2img = "car2.jpeg";

function add() {
    bgimg = new Image();
    bgimg.onload = Uploadbg;
    bgimg.src = bg;
    car1image = new Image();
    car1image.onload = Uploadcar1;
    car1image.src = car1img;
    car2image = new Image();
    car2image.onload = Uploadcar2;
    car2image.src = car2img;
}

function Uploadbg() {
    ctx.drawImage(bgimg, 0, 0, c1.width, c1.height);

}

function Uploadcar1() {
    ctx.drawImage(car1image, car1x, car1y, car1width, car1height);
}

function Uploadcar2() {
    ctx.drawImage(car2image, car2x, car2y, car2width, car2height)
}

//adding event listener//
window.addEventListener("keydown", mykeydown);

//defining mykeydown function and all the keys for both Cars//
function mykeydown(e){
keypress = e.keyCode;

if (keypress == '38') {
    car1up();
    console.log("The user pressed the up key");
}
if (keypress == '40') {
    car1down();
    console.log("The User Pressed The down key");
}
if (keypress == '37') {
    car1left();
    console.log("The user pressed the left key");
}
if (keypress == '39') {
    car1right();
    console.log("The user pressed the right key");
}
if (keypress == '87') {
    car2up();
    console.log("The user pressed the W key");
}
if (keypress == '65') {
    car2down();
    console.log("The User Pressed The A key");
}
if (keypress == '83') {
    car2left();
    console.log("The user pressed the S key");
}
if (keypress == '68') {
    car2right();
    console.log("The user pressed the D key");
}
}


//defining functions to control car1//
function car1up() {
    if (car1y >= 0) {
        car1y = car1y - 10;
        Uploadbg();
        Uploadcar1();
        Uploadcar2();
    }
}

function car1down() {
    if (car1y <= 500) {
        car1y = car1y + 10;
        Uploadbg();
        Uploadcar1();
        Uploadcar2();
    }
}
function car1left() {
    if (car1x >= 0) {
        car1x = car1x - 10;
        Uploadbg();
        Uploadcar1();
        Uploadcar2();
    }
}
function car1right() {
    if (car1x <= 700) {
        car1x = car1x + 10;
        Uploadbg();
        Uploadcar1();
        Uploadcar2();
    }
    //while defining right movement winner can be identified so added condition//
    if (car1x > 700) {
        document.getElementById("status").innerHTML = "Winner Is Car 1"
    } else {
        document.getElementById("status").innerHTML = "Winner Is Car 2"
    }
}


//defining functions to control car2//

function car2up() {
    if (car2y >= 0) {
        car2y = car2y - 10;
        Uploadbg();
        Uploadcar2();
        Uploadcar1();
    }
}

function car2down() {
    if (car2y <= 500) {
        car2y = car2y + 10;
        Uploadbg();
        Uploadcar2();
        Uploadcar1();

    }
}

function car2left() {
    if (car2x >= 0) {
        car2x = car2x - 10;
        Uploadbg();
        Uploadcar2();
        Uploadcar1();

    }
}

function car2right() {
    if (car2x <= 700) {
        car2x = car2x + 10;
        Uploadbg();
        Uploadcar2();
        Uploadcar1();
    }
}
//end of codes//
