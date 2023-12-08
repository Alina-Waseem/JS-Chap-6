console.log("*****Practice exercise 6.1*****");

function addNumber(n1 , n2){
    return n1 + n2;
}

let firstNumber = 4;
let secondNumber = 43;

let result1 = addNumber(firstNumber,secondNumber);
console.log('Result 1 = ' + result1 );

let thirdNumber = 24;
let fourthNumber = 2;

let result2 = addNumber(thirdNumber,fourthNumber);
console.log("Result 2 = " + result2);


console.log("*****Practice exercise 6.2*****");

let descriptiveWords = ['Beautiful' , 'Charming' , 'Pretty' , 'Energetic' , 'Bright' ,'Cute' ] ;

function descriptiveName() {
    let userName = prompt("Please enter a name");

    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomValue = descriptiveWords[randomIndex];

    console.log(userName + " is " + randomValue);
}
descriptiveName();


console.log("*****Practice exercise 6.3*****");

let firstValue = 43;
let secondValue = 24;

let operator = '+';

function calculateValue(firstValue,secondValue,operator) {
    if (operator === '+'){
        return firstValue + secondValue;
    }
    else if (operator === '-'){
        return firstValue - secondValue;
    }
    else {
        return firstValue + secondValue;
    }
}
console.log(calculateValue(firstValue,secondValue));

operator = '-';
console.log(calculateValue(firstValue,secondValue,operator));

console.log("*****Practice exercise 6.4*****");

let resultArray = [];

for (let i = 0; i < 10; i++){
    let value1 = i * 5;
    let value2 = i * i;
    
    function calculatesValue(firsttValue , seconddValue) {
        return firsttValue + seconddValue;
    }
    let result = calculatesValue(value1,value2);
    resultArray.push(result);
}

console.log(resultArray);

console.log("*****Practice exercise 6.5*****");

let value = "1000";

(function() {
    let value = "Local value of IIFE";
    console.log("Local value of IIFE : " , value)
})();

let resultt = (function(){
    let value = "Local Value from IIFE Expression";
    return value;
})();
console.log("Result from IIFE Expression:", resultt);

let anonymousFunction = function(passedValue) {
    let value = passedValue;
    console.log("Value from Anonymous Function:", value);
};
anonymousFunction("New Value from Anonymous Function");

console.log("*****Practice exercise 6.6*****");

function calculateFactorial(n) {
    if (n === 0){
        return 1;
    }
    else {
        return  n * calculateFactorial (n -1);
    }
}
let resullt = calculateFactorial(5);
console.log("Factorial: " , resullt);

console.log("*****Practice exercise 6.7*****");

let start = 10;

function countDown(valuee) {
    console.log(value);

    if (value < 1 ){
        return;
    }
    else{
        return countDown(valuee-1);
    }
}
console.log(start);

console.log("*****Practice exercise 6.8*****");

let logToConsoleExpression = function (argument) {
    console.log(argument);
};

logToConsoleExpression("Hello from function expression!");

function logToConsoleDeclaration(argument) {
    console.log(argument);
}

logToConsoleDeclaration("Hello from function declaration!");

console.log("*****Chapter projects*****");
console.log("*****Create a recursive function*****");

function countUpTo10 (currentvalue){
    console.log(currentvalue);

    if (currentvalue >= 10){
        return;
    }
    else{
        countUpTo10(currentvalue + 1);
    }
}
countUpTo10(1);
countUpTo10(5);
countUpTo10(8);

console.log("*****Set timeout order*****");

const outputOne = () => {
    console.log("One");
};
const outputTwo = () => {
    console.log("Two");
};
const outputThree = () => {
    console.log("Three");
    outputOne();
    outputTwo();
};
const outputFour = () => {
    console.log("Four");
};

setTimeout (() => {
    outputOne();
},0);
setTimeout (() => {
    outputThree();
},0);
setTimeout (() => {
    outputFour();
},0);
