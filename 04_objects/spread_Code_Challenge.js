//1. Write a function that takes in two arrays of numbers and returns 
//a new array containing all the elements of both arrays:

// function combinedArray() {
//     let array1 = [1, 2, 3];
//     let array2 = [4, 5, 6];
//     let newArray = [...array1, ...array2];
//     return newArray
// }
// console.log(combinedArray());

//2. Write a function that takes in an array of strings and a string to add to the 
//beginning of the array, and returns a new array with the string added to the beginning.
// ****Why I can't use the method "unshift " inside a function?

// let originalArray = ['banana', 'apple', 'cherry']
// originalArray.unshift('mango');
// let modifiedArray = [...originalArray];
// console.log(modifiedArray);


/** 3. Write a function that takes in an object and a key-value pair to add to the object, 
 * and returns a new object with the key-value pair added. */
let person = {
    name : 'John',
    age : 34,
    isMarried : false
}
person.dob = '01/05/1990'
console.log(person);



/** 4. Write a function that takes in an array of numbers and returns the largest number in the array. */
// ***** not working!!!!!!!!!!!!!!!!
// function returnTheLargestNr(number) {
//     let largestNumber = number[0];
//     for (i=1; i< number.length; i++) {
//         if (number[i] > number[0]) {
//             largestNumber = number[i];
//         }
//     }
//     return largestNumber;
// }
// let numberArray = [ 4, 88, 75, 145, 7];
// console.log(returnTheLargestNr(numberArray));

/** 5. Write a function that takes in an array of strings and returns a new array containing all the 
 * strings in alphabetical order. */

// function sortArray(text) {
//     text.sort();
//     return text;
// }

// let originalArray = ['banana', 'apple', 'mango', 'cherry', 'acai', 'lemon', 'orange'];
// console.log(sortArray(originalArray));