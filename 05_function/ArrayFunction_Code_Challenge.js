//1. Write a function that takes an array of objects representing books
// and returns an array containing the titles of those books:
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

// function getBookTitles(bookArray) {
//     return bookArray.map((book) => {
//         return book.title;
//     })
// }

// let titleArray = getBookTitles(books);
// console.log(titleArray);

//2. Write a function that takes an array of objects representing products
//and returns an array containing only the products that are currently in stock:

let products = [
    { name: 'Dresses', price: 10, status: 'in stock'},
    { name: 'Pants', price: 20, status: 'in stock'},
    { name: 'Shirts', price: 15, status: 'out of stock' },
    { name: 'Socks', price: 25, status: 'in stock' },
    { name: 'Hats', price: 30, status: 'out of stock' } 
];

// function productsinStock(productsArray) {
//     return productsArray.filter((product) => {
//         return product.status === 'in stock';
// })
// };
// let inStockProduct = productsinStock(products);
// console.log(inStockProduct);

//3. Write a function that takes an array of objects representing users 
// and returns the first user whose email address matches a given email.

let users = [
    {id: 1, name: 'Alice', email: 'alice.example.com'},
    {id: 1, name: 'bob', email: 'bob.example.com'},
    {id: 1, name: 'charlie', email: 'charlie.example.com'},
    {id: 1, name: 'dave', email: 'dave.example.com'}
]

// function emailMatchUser(usersArray) {
//     return usersArray.find((user) => {
//         return user.email === 'bob.example.com'
//     })
// };

// console.log(emailMatchUser(users));

//4. Write a function that takes an array of objects representing tasks 
//and returns true if all the tasks are marked as complete, otherwise returns false.

let tasks = [
    {Unit1: 'Onboarding to AI Fullstack', status: 'completed'},
    {Unit2: 'SDLC and Manual Testing', status: 'completed'},
    {Unit3: 'Javascript 101', status: 'completed'},
    {Unit4: 'Intro to Selenium', status: 'uncompleted'},
    {Unit5: 'Intro to Rest AP', status: 'uncompleted'},
    {Unit6: 'AI/GPT Assisted QA Engineering (SDET)', status: 'uncompleted'}
]

// function tasksMarkedComplete(tasksArray) {
//     return tasksArray.map((unit) => {
//         return unit.status === 'completed'
//     })
// };
// let completedTasks = tasksMarkedComplete(tasks);
// console.log(completedTasks);

//5.Write a function that takes an array of objects representing purchases 
//and returns the total amount spent on those purchases.
let purchases = [
    {purchaseNr1 : 'bread', price: 3.5},
    {purchaseNr1 : 'tomatoes', price: 5},
    {purchaseNr1 : 'salmon', price: 15},
    {purchaseNr1 : 'avocado', price: 7.20},
    {purchaseNr1 : 'eggs', price: 10},
]

// function totalAmountSpent(purchasesArray) {
//     let totalPrice = 0;
//         for (let purchase of purchasesArray) {
//         totalPrice += purchase.price;
//         return totalPrice;
//         }
// } 
// console.log(totalAmountSpent(purchases))

//Regular block of code:
// let totalPrice = 0;
// for (let purchase of purchases) {
//     totalPrice += purchase.price
// }
// console.log(totalPrice);

//6. Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
//****Regular block of code using forLoop:

let numbersArray = [7, 15, 32, 104, 75];
let sum  = 0;
//Regular block of code:
// for (i=0; i<numbersArray.length; i++) {
//     sum += numbersArray[i];
// }
// console.log(sum);

function sumOfNumbers(numberArray) {
    return numberArray.forEach((number) => 
    { return sum += number; })
}

console.log(sumOfNumbers(numbersArray))


//7.Write a function that takes an array of strings as input
// and returns a new array with all the strings converted to uppercase:

// let fruitArray = ['apple', 'cherry', 'banana', 'strawberry'];

// function convertToUppercase (stringArray) {
//     return stringArray.map((fruit) => { return fruit.toUpperCase() })
// }
// let convertedArray = convertToUppercase(fruitArray);
// console.log(convertedArray)


//8.Write a function that takes an array of numbers as input and returns 
//a new array with all the even numbers from the original array.

let numbers = [7, 15, 32, 104, 75];

// function evenNumbers(numbersArray) {
//     return numbersArray.filter((num) => {
//         return num % 2 === 0;
//     })
// };
// let evenNumbersArray = evenNumbers(numbers);
// console.log(evenNumbersArray);

//9. Write a function that takes an array of strings as input and 
//returns a new array with all the strings that have a length of 4 or less.

let names = ['Bob', 'Maria', 'Paul', 'Amy', 'Nicholas', 'Alex', 'Michael'];

// function stringLengthof4(namesArray) {
//     return namesArray.filter((name) => {
//         return name.length <= 4;
//     })
// }
// console.log(stringLengthof4(names));
