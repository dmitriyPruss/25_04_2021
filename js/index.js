// 1
// if
// const isPermissionDenied = false;

// if (isPermissionDenied) {
//     console.log('You haven`t permission');
// } else {
//     console.log('You have permission');
// };

// console.log('next instructions');


// console.log('5 < 10 :>> ', 5 < 10);
// console.log('5 > 10 :>> ', 5 > 10);
// console.log('5 <= 10 :>> ', 5 <= 10);
// console.log('5 >= 10 :>> ', 5 >= 10);

// const age = prompt('Enter your age:');
// if (age < 18) {
//     alert('You aren`t an adult');
// } else {
//     alert('You are an adult');
// };

// console.log('5 == 5 :>> ', 5 == 5);
// console.log('5 != 5 :>> ', 5 != 5);
// console.log('5 == 6 :>> ', 5 == 6);
// console.log('5 != 6 :>> ', 5 != 6);

// console.log('5 === 5 :>> ', 5 === 5);
// console.log('5 !== 5 :>> ', 5 !== 5);
// console.log('5 === 6 :>> ', 5 === 6);
// console.log('5 !== 6 :>> ', 5 !== 6);

// console.log('5=="5" :>> ', 5 == "5");
// console.log('5==="5" :>> ', 5 === "5");



// console.log('0 == false :>> ', 0 == false);
// console.log('0 === false :>> ', 0 === false);
// console.log('1 == true :>> ', 1 == true);
// console.log('1 === true :>> ', 1 === true);

// let password = prompt('Enter a password');
// if (password == "go!") {
//     console.log('Go!');
//     alert("Run!")
// } else {
//     console.log("Error!");
// };
// console.log('0 == "       " :>> ', 0 == "       ");

// console.log('0 === +null :>> ', 0 === +null);

// console.group('boolean &&');
// console.log('true && true :>> ', true && true);
// console.log('true && false :>> ', true && false);
// console.log('false && true :>> ', false && true);
// console.log('false && false :>> ', false && false);
// console.groupEnd();

// console.group('boolean ||');
// console.log('true || true :>> ', true || true);
// console.log('true || false :>> ', true || false);
// console.log('false || true :>> ', false || true);
// console.log('false || false :>> ', false || false);
// console.groupEnd();

// const isHasExemption = true;
// const age = +prompt("Enter your age");
// if ( (age < 16 || age > 65) && isHasExemption) {
//     console.log("You have some privileges");
// } else {
//     console.log("You don`t have any privileges...");
// };

// 2
// loops

// while

// const stepCount = 4;
// let stepNumber = 0
// while (stepNumber++ < stepCount) {
//     console.log('Hi!');
//     console.log("It is very good!");
//     // stepNumber++;
//     console.log('stepNumber :>> ', stepNumber);
// };

// const quantityPages = prompt('Quantity pages?');
// let counter = 0;
// if (quantityPages > 0) {
//     while (counter < quantityPages){
//         counter++;
//         console.log("page ",counter);
//     }; 
// } else {
//     console.log("ERROR!");
// };

// let i = 5;
// let result = 0;

// while (i <= 10) {
//     result += i;
//     i++; 
// };
// console.log(result);

// for
// for (let i = 2; i <= 10; i = i+2) {
//     console.log('i :>> ', i);
// };

// for (let i = 7; i <= 15; i = i+2) console.log('i :>> ', i);

// for(let i = 10; i >= 0; i--) console.log('i :>> ', i);

// let res = 21;
// res %=6;
// console.log('res :>> ', res);

// const wantedValue = 7;
// let value;

// do {
//     value = Number(prompt("Enter the value"));
// } while (value !== wantedValue);

// console.log('You are lucky! :>> \u{1F600}');

let i = 11;
let result1 = 0;
do {
    console.log('i :>> ', i);
    result1 += i;
    i++;
} while (i <= 10);

console.log('result1 :>> ', result1);
