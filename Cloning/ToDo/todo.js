const todoForm = document.querySelector(".todoForm")
const todoInput = todoForm.querySelector("input");
const todoList =  document.querySelector(".js-todoList");


const TODO_LS = "Todos";
let toDoStorage = [];


function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDoStorage))
} 

function deleteBtn(event) {
    const btn = event.target; //이벤트안에서 현재 버튼을 가리키고 있다는 것을 나타냄
    const li = btn.parentNode;//내가 클릭한 버튼이 어떤 버튼인지 알아내고 있음
    todoList.removeChild(li); //html에서 해당 태그가 사라지도록 하는 것
    
    const cleanToDos = toDoStorage.filter( function(obj) {
        return obj.id !== parseInt(li.id)        
   });
   toDoStorage = cleanToDos;
   saveTodo();
}


function paintValue(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteBtn );
    const span = document.createElement("span");
    const todoID = toDoStorage.length+1;
    delBtn.innerText = "❌";
    span.innerText = text;
    //document.querySelector("")가 HTML에 있는 요소를 자바스크립트로 가져오는 기능이라고 하면
    //document.createElement("")는 자바스크립트에서 HTML에 엘리먼트를 생성하도록 하는 기능을 가진다.
    li.appendChild(delBtn); //appendChild는 어떤 특정 태그가 다른 태그에 귀속이 되도록 하는 property다 
    li.appendChild(span);
    li.id = todoID;
    todoList.appendChild(li);
    
    const todoObj = {
        text: text,
        id : todoID
    };
    toDoStorage.push(todoObj);
    saveTodo();
}  


function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintValue(currentValue);
    todoInput.value = ''; // 사용자가 enter를 치면 input창에 입력한 값이 삭제되도록 함
}



function loadTodo(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if( loadedToDos !== null ) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach( arr => paintValue(arr.text) );
   }
}


function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();

