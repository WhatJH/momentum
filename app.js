// alert("hi");

const a = 5;
const b = 2;
let myName = "JH";
// 에러가 뜨는 이유 -> const는 값으 업데이트 할 수 없으므로 에러가 뜬다.


console.log("Hello");
console.log(a + b);
console.log("Hi " + myName);

myName = "soysaouce";

console.log(" your new name is " + myName);

// let 예를 들어 이름을 바꾸고 싶으면 myName을 다시 정의해줌/ let은 새로운 것을 생성할 때 사용함.
//  const (상수) -> 바뀔 수 없다.
// var는 되도록 쓰지마라... 

// boolean : true/false

const ammIFat = true;
console.log(ammIFat);

let something ;
// 값을 주고 있지않은 상태 : undefined  컴퓨터 메모리 안에는 존재함, 공간은 존재하지만 값이 없는 상태이다.

console.log(something);

// user가 로그인 했는지 t/f로 판별 가능하다
//  null -> 아무런 값도 없다. 자연적으로 발생하는 것이 아님.
//  파이썬에는 none, True, False로 사용함.

const mon = "mon";
const tue = "tue";
const wed = "wed";
// 효율적이 아니다 이런 리스트로 그룹화 한다면?!

const daysOfWeek = mon + tue + wed  ;
console.log(daysOfWeek)
// 이건 그냥 문자인 상태이다.

const daysOfWeek2 = [mon, tue, wed ];
const nonsense =[1, 2, "Hello",  false, null, true, undefined, "JH"]
console.log(daysOfWeek2[1], nonsense)
// 배열은 0부터 시작한다.

// 추가
daysOfWeek2.push("sun")
console.log(daysOfWeek2)


const apple = "apple";

const toBuy = ["potato", "tomato", "pizza"]
toBuy.push("kimchi")
console.log(toBuy)