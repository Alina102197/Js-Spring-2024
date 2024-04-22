let products = [
    { name: 'Dresses', price: 10, quantity: 5 },
    { name: 'Pants', price: 20, quantity: 3 },
    { name: 'Shirts', price: 15, quantity: 7 },
    { name: 'Socks', price: 25, quantity: 2 },
    { name: 'Hats', price: 30, quantity: 4 }
]
// ***2. Loop through the array using a for loop and print out the name and price of each product:

// for (let value of products) {
//     console.log(value.name + ':' + ' $' + value.price);
// }

// ***3. Use a while loop to find the product with the lowest price. Print out the name and price of the product:
// let cheapestProduct = products[0];
// let productsLength = products.length;
// let i = 1;

// while (i < productsLength) {
//     if (products[i].price < cheapestProduct.price) {
//         cheapestProduct = products[i];
//     }
//     i++;
// }
// console.log(`Cheapest product -> ${cheapestProduct.name}, with price -> $${cheapestProduct.price}`);


// ***4. Use a for of loop to calculate the total value of all products in the array.

// let sum = 0;
// for (let value of products) {
// sum += value.price * value.quantity
// } console.log(`Total value of all products is: $${sum}`)

// ***5. Use a for in loop to print out all the properties of each product in the array:

// for (let value of products) {
//     console.log('\nProduct detail:');
//     for (let prod in value) {
//         console.log(`${prod} : ${value[prod]}`);
//     }

// }

// *** 6. Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", 
// multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else { 
//         console.log(i);
//     }
// }
    
   

