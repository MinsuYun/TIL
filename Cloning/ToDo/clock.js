const timeBorder = document.querySelector(".js-timer");
const timer = timeBorder.querySelector("h1");


function getTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    timer.innerText =`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`

}

function init(){
    setInterval(getTime, 1000);
};

init();