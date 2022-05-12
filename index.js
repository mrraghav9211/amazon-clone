// javascript function
let currentState = 0;

function moveSlide(dir) {
    currentState = currentState + dir;
    if (currentState == 5) {
        currentState = 0;
    }
    else if (currentState == -1) {
        currentState = 4;
    }

    const slides = document.querySelectorAll('.slide');

    //hode the slide
    slides.forEach(slide => slide.style.display = "none");

    //show the slide
    slides[currentState].style.display = "flex";
}
const setTime = function () {
    if (currentState == 4) {
        currentState = 0;
    }
    else if (currentState <= 4) {
        currentState += 1;
    }
    const slides = document.querySelectorAll('.slide');

    //hode the slide
    slides.forEach(slide => slide.style.display = "none");

    //show the slide
    slides[currentState].style.display = "flex";
}
setInterval(setTime, 4000);

// horizontal scroll bar

var btnL = document.getElementById("btnLeft");
var btnR = document.getElementById("btnRight");

var content = document.getElementById("content");

btnR.addEventListener("click", goRight);
btnL.addEventListener("click", goLeft);

var clickedIndex = 0;

function goRight() {
    if (clickedIndex < 13) {
        clickedIndex = clickedIndex + 1;
        content.style.marginLeft = -190 * clickedIndex + "px";
    }
}
function goLeft() {
    if (clickedIndex > 0) {
        clickedIndex = clickedIndex - 1;
        content.style.marginLeft = -190 * clickedIndex + "px";

    }
}