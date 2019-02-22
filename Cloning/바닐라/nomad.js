const greeting = document.querySelector("#banana")

const CLICKED_CLASS = "clicked"

function handleClick() {
    // const hasClass = greeting.classList.contains(CLICKED_CLASS)
    // if(hasClass) {
    //     greeting.classList.remove(CLICKED_CLASS);
    // } else {
    //     greeting.classList.add(CLICKED_CLASS);
    // }
    greeting.classList.toggle(CLICKED_CLASS);
    //토글은 있으면 삭제 없으면 추가하는 기능을 가지고 있음
}
//
function init() {
    greeting.addEventListener("click", handleClick);
}
init();


