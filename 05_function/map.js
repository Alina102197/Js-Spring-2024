let numbers = [1, 2, 3, 4, 5];
// let multipliedNumbers = [ ];
// for ( let i=0; i<numbers.length; i++) {
//     multipliedNumbers.push(numbers[i] * 2);
// };
// console.log(multipliedNumbers);

// Map method :
let multipliedNumbers = numbers.map((num) => {
    return num * 2;
} );
console.log(multipliedNumbers);

// ***Write a function to convert celsius to fahrenheit:
//regular block of code:

// let celsiusDegree = [20, 35, 14];

// let convertCelsiusToFahrenheit = celsiusDegree.map((degree) => {
//   return (degree * 9/5) + 32;
// })

// console.log(convertCelsiusToFahrenheit);

//**Convert Fahrenheit to Celsius: */

// let fahrenheitTemperature = [ 32, 68, 86, 104];

// let celsiusTemperature = fahrenheitTemperature.map((temp) => {
//     return (temp - 32) * (5/9);
// });
// console.log(celsiusTemperature);

// Extracting values from an array of objects:
let users = [
    { name: 'Alice', age: 23},
    { name: 'Mike', age: 33},
    { name: 'Bob', age: 26}

]
//Create a new array with only names :
let userNames = users.map((user) => {
    return user.name;
})
console.log(userNames);


