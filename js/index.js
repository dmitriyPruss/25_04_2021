const isPermissionDenied = false;

if (isPermissionDenied) {
    console.log('You haven`t permission');
} else {
    console.log('You have permission');
};

console.log('next instructions');


console.log('5 < 10 :>> ', 5 < 10);
console.log('5 > 10 :>> ', 5 > 10);
console.log('5 <= 10 :>> ', 5 <= 10);
console.log('5 >= 10 :>> ', 5 >= 10);

// const age = prompt('Enter your age:');
// if (age < 18) {
//     alert('You aren`t an adult');
// } else {
//     alert('You are an adult');
// };

console.log('5 == 5 :>> ', 5 == 5);
console.log('5 != 5 :>> ', 5 != 5);
console.log('5 == 6 :>> ', 5 == 6);
console.log('5 != 6 :>> ', 5 != 6);

console.log('5 === 5 :>> ', 5 === 5);
console.log('5 !== 5 :>> ', 5 !== 5);
console.log('5 === 6 :>> ', 5 === 6);
console.log('5 !== 6 :>> ', 5 !== 6);

console.log('5=="5" :>> ', 5 == "5");
console.log('5==="5" :>> ', 5 === "5");



console.log('0 == false :>> ', 0 == false);
console.log('0 === false :>> ', 0 === false);
console.log('1 == true :>> ', 1 == true);
console.log('1 === true :>> ', 1 === true);

// let password = prompt('Enter a password');
// if (password == "go!") {
//     console.log('Go!');
//     alert("Run!")
// } else {
//     console.log("Error!");
// };
console.log('0 == "       " :>> ', 0 == "       ");

console.log('0 === +null :>> ', 0 === +null);

console.group('boolean &&');
console.log('true && true :>> ', true && true);
console.log('true && false :>> ', true && false);
console.log('false && true :>> ', false && true);
console.log('false && false :>> ', false && false);
console.groupEnd();

console.group('boolean ||');
console.log('true || true :>> ', true || true);
console.log('true || false :>> ', true || false);
console.log('false || true :>> ', false || true);
console.log('false || false :>> ', false || false);
console.groupEnd();


