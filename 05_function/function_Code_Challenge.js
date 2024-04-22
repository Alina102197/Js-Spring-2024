//  1. Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
// function sumOfNumbersinArray(numbers) {
//     let sum = 0;
//     for (i=0; i< numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// let arrayOfNumbers = [1,3,15,20,30]
// console.log(sumOfNumbersinArray(arrayOfNumbers));

// 2. Write a function that takes in a string and returns the string reversed:

// function reverseString(str) {
//     let splitStringinArray = str.split('');
//     let reversedArray = splitStringinArray.reverse();
//     let joinReversedArray = reversedArray.join('')
//     return  joinReversedArray;
// }
// let originalString = 'I am a good programmer'
// console.log(reverseString(originalString));

// function reverseString(str) {
//     let result = '';    // to store my final answer (reversed string)
//     let splitStringinArray = str.split(''); // [g, o, o, d,  , d, a, y]
//     for (let i = splitStringinArray.length-1 ; i >= 0 ; i--) {
//         result = result + splitStringinArray[i]; //  'yad' + ' ' = 'yad '
//     }
//     return  result;
// }
// let originalString = 'good day'
// console.log(reverseString(originalString));


// 3. Write a function that takes in an array of objects representing people, where each object has properties for 
//name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.
// [{}, {}, {}, {}]
//  function peopleOver18(arr) {
//     let result = [ ];
//     for (let pObject of arr) {
//         if (pObject.age >= 18) {
//             result.push(pObject)
//         }
//     }
//     return result;
//  }

//  function peopleOver181(arr) {
//     let result = arr.filter( pObject => pObject.age >= 18)
//     return result;
//  }

//  let people = [
//     {
//         name : 'John Doe',
//         age : 30,
//         gender : 'male'
//     },
//     {
//         name : 'Maria Brown',
//         age : 14,
//         gender : 'female'
//     },
//     {
//         name : 'Leslie Hill',
//         age : 54,
//         gender : 'female'
//     },
//     {
//         name : 'Brad Cooper',
//         age : 18,
//         gender : 'male'
//     }
// ];
// console.log(peopleOver18(people));
// console.log(peopleOver181(people));

// 4. Write a function that takes in an array of numbers and returns a new array 
//containing only the even numbers from the original array.:
// function evenNumberArray(numbers) {
//     let evenArray = [ ];
//     for (i=0; i<= numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenArray.push(numbers[i]);
//         }
//     }
//     return evenArray;
// }

// function evenNumberArray1(numbers) {
//     return numbers.filter(num => num%2===0);
// }


// let numberArray = [10, 55, 6, 73, 100, 13, 42]
// console.log(evenNumberArray(numberArray));
// console.log(evenNumberArray1(numberArray));

//5. Write a function that takes in an array of strings and returns a new array containing only the 
//strings that start with the letter "A".
let originalArray = ['Apple', 'Grape', 'Lemon','Avocado', 'Apricot']; // ['Apple', 'Avocado', 'Apricot']
let convertToString = originalArray.toString();
console.log(convertToString);
// for (i = 0; i< convertToString.length; i++) {
//     if (convertToString[i].startsWith('A')) {
//         console.log(convertToString[i])
//     }
// let newArray = convertToString.split()

// }
// function arrayValStartsWithA(userArray) {
//     let arrayStartsWithA = [];
//     for (let i=0 ; i<userArray.length ; i++) {
//         if(userArray[i].startsWith('A')) {
//             arrayStartsWithA.push(userArray[i])
//         }
//     }
//     return arrayStartsWithA;
// }
// function arrayValStartsWithA1(userArray) {
//     return userArray.filter(val => val.startsWith('A'));
// }


// console.log(arrayValStartsWithA(originalArray))
// console.log(arrayValStartsWithA1(originalArray))

// 6. Write a function that takes in an array of objects representing books, 
//where each object has properties for title, author, and published, and returns an array of strings 
//representing the titles of all the books published in the year 1900 or later.
let books = [
    {
        title : 'The Great Gatsby',
        author : 'F. Scott Fitzgerald',
        published : 1925
    },
    {
        title : 'To Kill a Mockingbird',
        author : 'harper Lee',
        published : 1960
    },
    {
        title : 'Pride and Prejudice',
        author : 'Jane Austin',
        published : 1813
    }
];
//*Regular block of code:
// let modifiedArray = [ ];
// for (i=0; i<books.length; i++) {
//     if (books[i].published >=1900) {
//         modifiedArray.push(books[i].title)
//     }
// }
// console.log(modifiedArray);
// function getTitlesBeyond1900(booksArray) {
//     let modifiedArray = [];
//     for (i=0; i<booksArray.length; i++) {
//         if (booksArray[i].published >=1900) {
//              modifiedArray.push(booksArray[i].title)
//         }
//     }
//     return modifiedArray;
// }
// console.log(getTitlesBeyond1900(books))

//7. Write a function that takes in two numbers and returns the larger of the two.
// function findLargerNumer(a,b) {
//     let largerNumber = a;
//     if (b > a) { 
//         largerNumber = b;

//     }
//    return largerNumber;
// }
// console.log(findLargerNumer(4,7));

//8. Write a function that takes in an array of numbers and returns the smallest number in the array.
// function smallestNrInArray(numbers) {
//     let smallestNumber = numbers[0];
//     for (i=1; i < numbers.length; i++) {
//         if (numbers[i] < smalletNumber) {
//             smallestNumber = numbers[i]
//         }
//     }
// return smallestNumber;
// }

// let numberArray = [ 2, 5, 85, 90, 7];
// console.log(smallestNrInArray(numberArray));

//9. Write a function that takes in an array of strings and returns the longest string in the array
// *****Regular block of code:
// let longestString = fruits[0];
// let i = 1;
// while (i < fruits.length) {
//     if (fruits[i].length > longestString.length) {
//         longestString = fruits[i];
//     }
//     i++;
// }
// console.log(longestString);

function longestStringInArray(text) {
    let longestString = text[0];
    let i = 1;
    while (i < text.length) {
        if (text[i].length > longestString.length) {
            longestString = text[i];
        }
        i++
    }
    return longestString
}
let fruits = ['apple', 'banana', 'pineaple', 'strawberry'];
console.log(longestStringInArray(fruits));

//10.Write a function that takes in an array of objects representing students,
// where each object has properties for name and grade, and returns an array of objects representing only the students 
//who have a grade of "A":
let students = [
    {
        name : 'John Doe',
        grade : 'A'
    },
    {
        name : 'Leslie Cooper',
        grade : 'C'
    },
    {
        name : 'Maria Brown',
        grade : 'A'
    },
    {
        name : 'Brad William',
        grade : 'B'
    },
    {
        name : 'Jason Smith',
        grade : 'A'
    }
]


function studentswithgradeA(studentsArray) {
    let modifiedArray = [ ];
    for (i=0; i<studentsArray.length; i++) {
        if (studentsArray[i].grade === 'A') {
            modifiedArray.push(studentsArray[i])
        }
    }
    return modifiedArray;
}
console.log(studentswithgradeA(students));