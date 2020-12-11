/* initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

} */

let table;

let picElements = document.getElementsByClassName("picture");
let picsElements = [...picElements];
let selectedPics = [];

console.log(picElements)

const ELEMENT_NUM = 12;

function buttonClicked(event) {
    console.log("button clicked: " + event.target.id);

    const div = document.querySelector("#" + event.target.id);
    const pic = div.querySelector("img");

    if (selectedPics.length < 2) {
        showPic(pic);
        const id = event.target.id;
        selectedPics.push(id);
    }
    if (selectedPics.length === 2) {
        evaluateSelection();
        selectedPics = [];
    }
    console.log(selectedPics);
}

function evaluateSelection() {
    const firstSelected = document.querySelector("#" + selectedPics[0]);
    const secondSelected = document.querySelector("#" + selectedPics[1]);
    const firstImg = firstSelected.querySelector("img")
    const secondImg = secondSelected.querySelector("img")
    if (firstImg.currentSrc === secondImg.currentSrc) {
        firstImg.classList.add("same")
        secondImg.classList.add("same")
    } else {
        setTimeout(() => {
            firstImg.classList.remove("revealed")
            secondImg.classList.remove("revealed")
            firstImg.classList.add("unavailable")
            secondImg.classList.add("unavailable")
        }, 1000);
    }
}

let samePic = document.querySelector(".same");

let revealedPics = [];

let showPic = function (pic) {
    pic.classList.toggle("revealed");
}

window.onload = function () {
    table = document.getElementById("picture-box");
    console.log("onload");
    picElements = document.getElementsByClassName("divPicture");
    picsElements = [...picElements];

    for (let index = 0; index < picsElements.length; index++) {
        picsElements[index].addEventListener("click", buttonClicked);
    }
}