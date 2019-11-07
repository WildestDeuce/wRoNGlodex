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

// var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
// var array2 = [5, 8, 2, 9, 5, 6, 3, 1];

// function reverseArray(arr) {
// 	var newArray = [];
// 	for (var i = arr.length - 1; i > 0; i--) {
// 		newArray.push(arr[i]);
// 	}
// 	console.log(newArray);
// 	return newArray;
// }

// reverseArray(array2);

// //bisection- taking the average guess between two numbers
// function fastWay() {
// 	let high = 65535;
// 	let low = 0;
// 	console.log(`\nFAST METHOD`);
// 	let guesses = 0;
// 	while (true) {
// 		guesses++;
// 		let guess = Math.floor((high + low) / 2);
// 		console.log(`guess#: ${guesses} guess=${guess}`);
// 		let diff = foo(guess);
// 		if (diff === -1) {
// 			// too low
// 			high = guess;
// 		} else if (diff === 1) {
// 			//too high
// 			low = guess;
// 		} else {
// 			console.log(`I GUESSED IT (${guess}) in ${guesses} guesses!`);
// 			return;
// 		}
// 	}
// }
// fastWay();

//write a function that takes in a number and returns the corrsponding day of the week
//Ex:
//Input: 1
//Output: Monday
//Input 4:
//Output: Thursday
//Input 8:
//Output: undefined
// function weekArray(arr) {
// 	let day = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// 	let week = [];
// 	for (i = 0; i < 9; i++)
// 		week.push(arr[i])
// }

// function days(n) {

// 	switch(n)
// }

// Steps:
// 1.) You declare a variable to hold the sum.
// 2.) Give that variable an initial value.
// 3.) Now do a for loop to pass through every single element in the array.
// 4.) The first statement in the for loop sets an initial value to its variable count (can be named anything), int count = 0. The second piece of code (count < ar.length) sets a condition for which the loop will continue to run through the array, in this case, it will run until the end of the array. The third piece of code (count++) will add one to the counter which is the code that makes the counter pass through the array by increments of one (step by step).
// 5.) The code inside the brackets {sum = sum + ar[count]} will take the initial value of sum and add all of the values found inside the array to it.
// 6.) Finally the return statement will simply print out the new values of sum given by the for loop.

// *I hope this helps everyone, let me know if it does!


// let sum = 0;

// let i = 0;
// for (i =0; i <arr.lenght; i++){
// 	sum = sum + arr[count]
// 	return sum
// }



// #2  Rotate the characters in a string by a given input and have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.
let str1 = "MyString";


function rotateLeft(arr, rotations){
	console.log(str1.split())
	 
}
rotateLeft();