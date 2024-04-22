//1. Write a function that takes in two arrays of numbers and returns 
//a new array containing all the elements of both arrays:

// function combinedArray(userarray1, userarray2) {
// return [...userarray1, ...userarray2]
   
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// console.log(combinedArray(array1,array2))



//2. Write a function that takes in an array of strings and a string to add to the 
//beginning of the array, and returns a new array with the string added to the beginning.
// ****unshift method add a string and return the length value!!!!!!!!!!!!!!!1


// let originalArray = ['banana', 'apple', 'cherry']


// function addStringToArray(array1, string1) {
//    array1.unshift(string1);
//    return array1;
// }
// console.log(addStringToArray(originalArray, 'mango'));


/** 3. Write a function that takes in an object and a key-value pair to add to the object, 
 * and returns a new object with the key-value pair added. */
let person = {
    name : 'John',
    age : 34,
    isMarried : false
}


 function addKeyValue(userObject, key, value ) {
    userObject[key] = value;
    return userObject;
 }
console.log(addKeyValue(person, 'dob','01/05/1990' ));


/** 4. Write a function that takes in an array of numbers and returns the largest number in the array. */
// 
// function returnTheLargestNr(number) {
//     let largestNumber = number[0];
//     for (i=1; i< number.length; i++) {
//         if (number[i] > largestNumber) {
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
//    return text.sort();
   
// }

// let originalArray = ['banana', 'apple', 'mango', 'cherry', 'acai', 'lemon', 'orange'];
// console.log(sortArray(originalArray));