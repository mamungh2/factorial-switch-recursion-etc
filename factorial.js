// This is programming hero tutorial
// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// const myFactorial = factorial(5);
// console.log(myFactorial);

// // This is kudvenkit tutorials
// function factorial(n) {
//     var result = n;
//     while (n > 1) {
//         result = result * (n - 1);
//         n = n - 1;
//     }
//     return result;
// }
// var rs = factorial(5);
// console.log(rs);

// function recursion(number) {
//     console.log(number);
//     let newNumber = number - 1;
//     if (newNumber > 0) {
//         recursion(newNumber);
//     }
// }
// recursion(5);


// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 5;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }




// function myFunc(num) {
//     if (num == 0)
//         return 1;
//     myFunc(num - 1);
//     console.log(num);
// }
// myFunc(5);


// function countDown(n) {
//     if (n == 0) {
//         console.log("complete this resursion");
//         return 1;
//     }

//     console.log(n);
//     countDown(n - 1);
// }
// countDown(4);


// function getLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0) {
//         console.log("Yes it is leap year");
//     }
//     else {
//         console.log("sorry not leap year");
//     }
// }
// getLeapYear(365);




// function getResult(number) {
//     switch (false) {

//         case (number >= 80):
//             console.log("Your result is A grade")
//             break;
//         case (number >= 70):
//             console.log("Your result is B grade");
//             break;
//         case (number >= 60):
//             console.log("Your result is C grade");
//             break;
//         case (number >= 50):
//             console.log("Your result is D grade");
//             break;
//         default:
//             console.log("You have faild");
//     }
// }
// getResult(69);

// function myFunc(number) {
//     switch (number) {
//         case 0:
//             console.log("Sunday");
//             break;
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("firday");
//             break;
//         default:
//             console.log("Sorry");
//     }
// }
// myFunc(2);


// function getResult(number) {
//     if (number > 100 || number < 0) {
//         console.log("--------------Please Insert Correct Number---------------")
//     }
//     else if (number >= 80) {
//         console.log("Your result is A plus");
//     }
//     else if (number >= 70) {
//         console.log("Your result is B grade");
//     }
//     else if (number >= 60) {
//         console.log("Your result is C grade");
//     }
//     else if (number >= 50) {
//         console.log("Your result is D grade");
//     }
//     else {
//         console.log("Sorry you have failed");
//     }
// }
// getResult(101);

// check Odd number
// function checkOddNumber(number) {
//     if (number % 2 != 0 && number >= 50 && number <= 80) {
//         console.log("Yes it is Odd number");
//     }
//     else if (number > 80 || number < 50) {
//         console.log("----------Please input valid number----------");
//     }
//     else {
//         console.log("Sorry it is not Odd number");
//     }
// }
// checkOddNumber(62);

// // interest calculation
// function getInterest(money) {
//     let r = money * (1 + 5 / 100) * 1;
//     return r;
// }
// let s = getInterest(200);
// console.log(s);


// function inputNumber(number) {
//     if (number % 2 == 0) {
//         return 'even';
//     }
//     return 'odd';
// }
// var inputFromUser = 11;
// var result = inputNumber(inputFromUser);
// console.log('Your number is', result);

// // ckeck largest number from array
// var arr = [22, 62, 4, 5, 445, 892, 12];
// var j = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (j > arr[i]) {
//         j = arr[i];
//     }


// }
// console.log(j);

// // fibanacci number
// var numbers = [0, 1];
// for (let i = 2; i < 10; i++) {
//     numbers[i] = numbers[i - 1] + numbers[i - 2];


// }
// console.log(numbers);


/* // display foo bar ad foobar
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 3 == 0 && number[i] % 5 != 0) {
        console.log(number[i], 'foo');
    }
    else if (number[i] % 5 == 0 && number[i] % 3 != 0) {
        console.log(number[i], 'bar');
    }
    else if (number[i] % 3 == 0 && number[i] % 5 == 0) {
        console.log(number[i], 'foobar');
    }
    else {
        console.log(number[i]);
    }

} */


/* const friends = [
    { name: 'karim', age: 24, address: 'dhaka' },
    { name: 'Rasel', age: 35, address: 'kushtia' },
    { name: 'jahid', age: 31, address: 'mirpur' }
];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].name);
} */

function x() {
    console.log("I am x");
    y();

}
function y() {
    console.log("I am y");
}
x();