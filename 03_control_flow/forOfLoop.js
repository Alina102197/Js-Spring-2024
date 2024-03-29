let numbers = [1, 2, 3, 4, 5];

// for (let value of numbers) {
//     console.log(value);
// }

// **Tranditional for loop:
// for (let i = 0; i<= numbers.length; i++) {
//    console.log(numbers[i]); 
// }

// let sum = 0;
// for (let value of numbers) {
//     sum += value
// }
// console.log(`Sum of numbers ${numbers}: ${sum}`);

let tempString = 'ABC';
for (let char of tempString) {  // char is just a variable, in every iteration index-value will be assigned to char (starting from index-0)
    console.log(char);
}
console.log('Normal for-loop');
for (let i=0 ; i<tempString.length ; i++) {
    console.log(tempString[i]);
}