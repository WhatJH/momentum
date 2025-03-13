const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");


const TODOS_KEY = "todos"


const toDos = [];


function saveTodos(){
    localStorage.setItem("todos", toDos);
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id) );
    saveTodos();

    console.log(typeof li.id);
}


function paintTodo(newTodo) {
    console.log("i will paint", newTodo);

    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;

    console.log(li);

    todoList.appendChild
}

function handleToDoSubmit(event) {
    event.preventDefalut();

    console.log(toDoInput.value);

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj ={
        text: newTodo,
        id: Date.now(),

    }

    toDos.push(newTodoObj);

    console.log(newTodo, toDoInput.value);

    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
    console.log("this is the turn of");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveTodos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(saveTodos);
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));


    console.log(parsedToDos);
}
/**
 * forEach는 array의 각 item에 대해 function을 실행하게 해줌.
 * 
 *  //array
 *  parsedToDos.array.forEach(element => {
 *       
 * });
 * 
 * parsedToDos.forEach(sayHello);
 * 이렇게 사용하면 function 생성해야함. 
 * 
 * parsedToDos.forEach(item) => console.log("this is the turn of ", item);
 * 화살표 함수
 */


// function sexyFilter(){
    // 반드시 true를 반환해야한다.

// }

// [1,2,3,4].filter(sexyFilter)

// filter는 forEach랑 비슷하다.