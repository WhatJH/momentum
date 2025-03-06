/**
 * 이론
 */

// alert("hi");

// const a = 5;
// const b = 2;
// let myName = "JH";
// // 에러가 뜨는 이유 -> const는 값으 업데이트 할 수 없으므로 에러가 뜬다.


// console.log("Hello");
// console.log(a + b);
// console.log("Hi " + myName);

// myName = "soysaouce";

// console.log(" your new name is " + myName);

// // let 예를 들어 이름을 바꾸고 싶으면 myName을 다시 정의해줌/ let은 새로운 것을 생성할 때 사용함.
// //  const (상수) -> 바뀔 수 없다.
// // var는 되도록 쓰지마라... 

// // boolean : true/false

// const ammIFat = true;
// console.log(ammIFat);

// let something ;
// // 값을 주고 있지않은 상태 : undefined  컴퓨터 메모리 안에는 존재함, 공간은 존재하지만 값이 없는 상태이다.

// console.log(something);

// // user가 로그인 했는지 t/f로 판별 가능하다
// //  null -> 아무런 값도 없다. 자연적으로 발생하는 것이 아님.
// //  파이썬에는 none, True, False로 사용함.

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// // 효율적이 아니다 이런 리스트로 그룹화 한다면?!

// const daysOfWeek = mon + tue + wed  ;
// console.log(daysOfWeek)
// // 이건 그냥 문자인 상태이다.

// const daysOfWeek2 = [mon, tue, wed ];
// const nonsense =[1, 2, "Hello",  false, null, true, undefined, "JH"]
// console.log(daysOfWeek2[1], nonsense)
// // 배열은 0부터 시작한다.

// // 추가
// daysOfWeek2.push("sun")
// console.log(daysOfWeek2)


// const apple = "apple";

// const toBuy = ["potato", "tomato", "pizza"]
// toBuy.push("kimchi")
// console.log(toBuy)



// const player = {
//     name: "JH",
//     points: 10,
//     fat: true,
// }
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// // object 뒤에 comma(,)를 사용한다 -> property가 하나 더 올 수 있기 때문.

// // 추가, 업데이트 가능
// player.fat = false;
// console.log(player);

/**
 * function이란 뭘까?
 * -> 내가 계속 반복해서 사용할 수 있는 코드 조각
 * -> 어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해줌
 * 반복을 최소한으로 줄이고 효율성 good
 * 
 */

// function sayHello (nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("JH", 23);
// sayHello("ning ning", 26);

// argument? function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법.


// const player2 = {
//     name: "nico",
//     sayHello2: function(otherPersonsName){
//         console.log("hello! " + otherPersonsName + " nice meet you!");
//     }
// };

// console.log(player2.name);
// player2.sayHello2("lynn");
// function이 object 안에 있을 때만 가능하다.



/** 복습time
 * var 오래된것, 절대로 웬만해서 사용x
 * 개선하는게 아닌, 그 위에 쌓아가는 방식이다.
 * 가끔씩 필요하다면 let을 사용할것
 * 항상 const를 사용해야함.
 * 
 */


// conditional(조건문): true, false인지 알려줌

// prompt는 사용자에게 입력하는 창을 띄워준다.
// const age = parseInt(prompt("How old are you?"));

// console.log(typeof age );
// console.log(typeof "15", typeof parseInt("15"));

// 한 type을 받아서 다른 type으로 바꾸는 작업을 할 것

// typeof로 variable의 type을 볼 수 있음
// parseInt string -> int로 바꿔줌, 숫자만 가능
// const age = parseInt( "43434" );
// string인 경우 NaN으로 출력된다.


// console.log(age)

/**
 * isNan
 * 하나의 인자(argument)를 주면 number인지 아닌지를 알려줌
 * isNan은 boolean을 반환한다.
 */

// console.log(isNan(age));

/** 조건문
 * 
 * if (condition){
 * // condition === true
 * } else {
 * // condition === false
 * }
 */


// if(isNaN(age) || age < 0) {
//     console.log("Please wrute a number");  
// } else if (age < 18) {
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50){
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age > 80){
//     console.log("You can do whatever you want.")
// }
// age 함수에서 string을 받아옴.
// && 둘다 true야지 true가 됨. false가 하나라도 있으면 flase AND연산자.

//  || 둘중 하나만 ture인지 확인해야함, 둘 중 하나만 ture여도 ture가 된다.
//  둘다 ture이거나 둘다 false이면 flase OR연산자.
// else는 선택적 사항이다. 꼭 사용해야는 것은 아님.

// AND 연산자
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// OR 연산자
// true && true === true
// false && true === false
// true && false === false
// false && false === false


/**
 * HTML
 */

// const title = document.getElementById("title")

// console.dir(title);

// title.innerText = "Got you";

// console.log(title.id);
// console.log(title.className);


/**
 * querySelector는 element를 CSS 방식으로 검색할 수 있다.
 * 
 * const title = document.querySelector('#hello form');
 * const title = document.getElementById("hello");
 */


/**
 * CSS
 */

// title.style.color = "blue";

/**
 * event란?
 * 클릭하는 것, h1위로 마우스가 올라가도 event라고 함
 */

const h1 = document.querySelector('div.hello:first-child h1');


// function handleTitleClick(){
//     const currnetColor = h1.style.color;
//     let newColor;
//     if(h1.style.color === "blue") {
//         newColor == "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }



function handleMouserEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOnline(){
    alert(" ALL GOOD")
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouserEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOnline);


/**
 * event를 사용하는 두 가지 방법
 * 1. title.addEventListener("click", handleTItleClick); -> 2보다 많이사용
 * 2. title.onClick = handleTitleClick;

    style은 CSS에서 하자!
    step1. element를 찾아라
    step2. event를 listen 해라
    step3. 그 event에 반응해라
    반응? 무언가를 보여주거나, 감추거나, 색깔을 바꾼다는 것과 같다.

 */


// function handleTitleClick(){
//     const clickedClass = "clikced";
//     if (h1.className.contains(clickedClass) === clickedClass) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }


function handleTitleClick(){
    const clickedClass = "clikced";
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);


// classList는 class들의 목록으로 작업할 수 있게끔 허용해준다.




/**
 * const loginForm = document.querySelector("#login-form");
 * querySelector()를 사용할 때는 대상이 id인지 명확히 해줘야함.
 * className, tagName 모두 검색하기 때문.
 * getElementById()를 사용할 때는 그럴 필요가 없다.
 * 
 */

const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){
    const username = loginInput.value
    if (username === ""){
        alert("Please write your name");
    } else if( username.length > 15){
        alert("Your name is too long.");
    }
}
//  이렇게 하는 방법은 추천하지 않는다. html에서 required maxlength max로 제한둘 수 있음.