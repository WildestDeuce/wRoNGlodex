const interview = require('../vol.1/Interview_Practice');


//What will be printed on the browser console?

// var a = 10;
// function foo() {
//     console.log(a); //20
//     var a = 20;
// }
// foo();

// var a = 10;


//Will output be the seame if we use let or const   
//instead of var?

// function foo() {
//     console.log(a); //20
//     let a = 20;
// }
// foo();


//What elements will be in the "newArray"?

// var array = [];
// for (var i = 0; i < 3; i++) {
// 	array.push(() => i);
// }
// var newArray = array.map(el => el());
// console.log(newArray);


//will there be a stack overflow error?

// function foo() {
//     setTimeout(foo, 0); 
// }


//Will the UI of the page (tab) remain responsive 
//if we run the following function in the console?
// function foo() {
//     return Promise.resolve().then(foo);
// }


// var i;
// for(i=0; i<3; i = i + 1) {
//     console.log(i)
// }


// var myArray = ["A", "B", "C"];
// for (var i = 0; i < myArray.length; i++) {
//     console.log("The member of myArray in index" +  i + "is" +  myArray[i])
// }

// var i = 99;
// while (true) {
//     console.log(i + "bottles of beer on the wall");
//     i -= 1;
//     if (i ==0)
//     {
//         break;
//     }
// }

// var array2 = [5, 8, 2, 9, 5, 6, 3, 1];

// function reverseArray(array1) {
//     var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
//     var newArray = [];
//     for (var i = array.length - 1; i > 0; i--) {
//         newArray.push(array1[i]);
//         console.log(array1);
//     }
//     return newArray;
// }

// let isValidPass = function (password) {
//     let hasLower = false;
//     let hasUpper = false;

//     if (password.length < 8) {
//         return false;
//     }
//     for (let i = 0; i < password.length; i++) {
//         if (password[i].toLowerCase() === password[i]) {
//             hasLower = true;
//         }
//         if (password[i].toUpperCase() === password[i]) {
//             hasUpper = true;
//         }

//     }
// }
// return hasLower && hasUpper;

//wrtie a function that takes an array and element to find without using array methods
//return true if the element is in the array or false otherwise.
// newArray = [];
// input = "";
// let search = () => {
//     for (i = 0; i < newArray.length; i++)
//         if (newArray[i] === input)
//             return true
//         else return false
// }
// search();

// numArray = [1, 2, 3];
// newArray = [];

// let double = () => {
//     for (i = 0; i < numArray.length; i++){
//         numArray[i] * 2 
//         newArray.push(numArray)
//     }
//     return newArray;


// }
let newArray = [];
let numArray = [1, 2, 3];
var map = function (arr, callback) {
    for (i = 0; i < numArray.length; i++) {
        var newNum = callback(arr[i]);
        newArray.push(newNum);
        console.log(newNum)
    }
    return newArray;
}
