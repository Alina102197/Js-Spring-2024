let numbers = [1, 2, 3, 4, 5];
// let oddNumbers = [ ];

// for( i = 0; i< numbers.length, i++;) {
//    if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i])
//    }
// };
// console.log(oddNumbers);

// let oddNumbers = numbers.filter((number) => {
//     return number % 2 !== 0;
// })
// console.log(oddNumbers);

//Filter out string that have a certain character in the array:
let words = ['apple', 'banana', 'cherry', 'date'];
let wordsWithoutA = words.filter((word) => {
    return !word.includes('a');
})
console.log(wordsWithoutA);