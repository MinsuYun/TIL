const body = document.querySelector("body");

const NUM_IMG = 20;

function handleImage(){
    console.log("wow");
}

function printImg(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber+1}.jpg`
    body.prepend(image);
    image.classList.add("body_BG")
    image.addEventListener("loadend", handleImage);
}

function getRandom() {
    return Math.floor(Math.random()*NUM_IMG)
}

function init() {
    const randomNumber = getRandom();
    printImg(randomNumber);

}
init();