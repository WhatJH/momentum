// 계산기 예제
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

plus(8,60);

// NaN = Not a Number (숫자가 아님)

function divide(a, b){
    console.log(a / b)
}
divide(98, 20)

// function multiply(a, b){
//     console.log(a * b)
// }

// function minus(potato, salad){
//     console.log(potato - salad);
// }
// minus(5, 1)

// 과제
const calculator = {
    add: function(a, b){
        console.log(a, b);
    },
    sub: function(a, b){
        console.log(a - b);
    },
    mul: function(a, b){
        console.log(a * b)
    },
    div: function(a, b){
        console.log(a / b);
    },
    squre:  function(a, b){
        console.log(a ** b)
    }
};

calculator.add(5, 1);
calculator.sub(5, 2);
calculator.mul(5, 3);
calculator.div(5, 4);
calculator.squre(5, 5);




const calculator2 = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b
    },
    div: function(a, b){
        return a / b;
    },
    squre:  function(a, b){
        return a ** b
    }
};


const plusResult = calculator2.add(2, 3);
const minusResult = calculator2.sub(plusResult, 10);
const multiplyResult =  calculator2.mul(10, minusResult);
const divideResult = calculator2.div(multiplyResult, plusResult);
const squreResult = calculator2.squre(divideResult, minusResult);




const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
// funtion 안에서 무언가를 return 하면 누군가 function을 실행할때 krAge의 결과로 대체한다.
// KrAge는 calculateKrAge의 반환 값이 된다.
// return 사용하면 console.log 쓸 필요가 없다.


const KrAge = calculateKrAge
console.log(KrAge)

