// 1.a  Create a function that takes 2 parameters and outputs or return their sum:
// function addNumbers(a, b) {
//     return a + b;
// }
// 1.b Or, we can write the function this way:
// function addNumbers (a, b) {
//     let sum  = a + b;
//     console.log(`${a} + ${b} = ${sum}`);
//     return sum;
//}
// * call the above function to add the two values:
// let result = addNumbers(3, 4);
// console.log(result);

/* Counting vowels
Create a program that counts the number of vowels in a given string
The program should run on a declared string variable, and then display the nr of vowels
*/ 
// Regular block of code:

// let sentence = 'New York';
// let vowels = 'aeiouAEIOU'
// let count = 0;

// for ( let i = 0; i< sentence.length; i++) {
//     if (vowels.includes(sentence[i])) {
//         count++;
//         console.log(sentence[i]);
//     }
// }
// console.log(`Number of vowels in "${sentence}": ${count}`);

// Use a function to execute this code: 

// function findVowelCount(text) {
//     let vowels = 'aeiouAEIOU'
//     let count = 0;
    
//     for ( let i = 0; i< text.length; i++) {
//         if (vowels.includes(text[i])) {
//             console.log(text[i]);
//             count ++;
//         }
//     }
//     return count;
// }
// let result = findVowelCount('New York');
// let result2 = findVowelCount('I am a good programmer')
// console.log(result2);

/**Multiplication Table
Create a function that generates a multiplication table for a given number.
The program should prompt the user to enter a number and then display a multiplication table for that number
Exemple for number 5 in a regular for loop: */

// let number = 5;
// for ( let i = 1; i<=10; i++) {
//    console.log(`${number} x ${i} = ${number * i}`);
// }

// exemple using function:
// function multiplicationTable(number) {
//     for ( let i = 1; i<=10; i++) {
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
        
//     }
// };
// multiplicationTable(5);

// ***Write a function that calculates the area of a rectangle:
// function calculateRectangleArea(width, height) {
//     let area = width * height;
//     return area;
// }
// let areaOfTheTable = calculateRectangleArea(12, 10);
// console.log(areaOfTheTable);

// ***Write a function to convert celsius to fahrenheit:
// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// };
// console.log(celsiusToFahrenheit(30));

// ***Write a function that filters even numbers from an array and returns the new array:
// function filterEvenNumbers(numbers) {
//     let evenNumbers = [];
//     for (i=0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0 ) {
//             evenNumbers.push(numbers[i])
//         }
//     }
//     return evenNumbers
// }
// let numberArray = [1,2,3,4,5,6,88,33,44];
// console.log(filterEvenNumbers(numberArray));

// ***Annonymous functions:
// let square = function(x) {
//     return x*x;
// };

// *** Arrow function:
// let square = (x) => {
//     return x*x;
// }
// console.log(square(4));