const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username"

function onLoginSubmit(event){
    event.preventDefalue(); // 기본동작 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    // greeting.innerText = `Hello #{username} `;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetins(username);
}


function paintGreetins(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetins(savedUsername);
}

/**
 * event.preventDefault(); 
 * 이것을 호출하면 브라우저의 기본 동작을 막아줌. 
 * 
 * 
 */
