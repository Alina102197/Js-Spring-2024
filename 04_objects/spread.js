// 1. Copy an array using spread operator:

let originalArray = [1, 2, 3];
let newArray = [...originalArray]
// console.log(originalArray);
// console.log(newArray);

//modify the array we copied:

newArray.push(4);
console.log(newArray)

//2. Use spread to combine arrays:

// let array1 = [1,2,3];
// let array2  = [4,5,6];
// let combinedArray = [...array1,...array2];
// console.log(combinedArray);

//3. Use spread to create objects:

// let originalObject = { a : 1, b : 2};
// let newObject = {...originalObject, c : 3};
// console.log(newObject);

/*  Merge user profile data:
Imagine that you have 2 objects containing user profile data:
one represents the user's basic information and the other representing
their interests. You can use the spread object to combine the two objects:
*/
// let basicInfo = {
//     firstName : "John",
//     lastName : 'Doe',
//     age : 30,
//     gender : 'Male'
// }
 
// let interests = {
//     hobbies : ['reading', 'traveling', 'hiking'],
//     favoriteFood : 'sushi'
// }

// let userProfile = {...basicInfo, ...interests};
// console.log(userProfile);


/**Creata a new array with existing data:
 * Let's say you have an array with books and you want to create a new array that includes 
 * some of the books from the original array with some additional books. 
 * We can use the spread method to create th enew array:
 */
