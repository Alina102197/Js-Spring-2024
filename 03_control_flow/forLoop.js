// for ( let i = 1; i<= 10; i++) {
//     console.log(i);
// }
/**Multiplication Table
Create a program that generates a multiplication table for a given number.
The program should prompt the user to enter a number and then display a multiplication table for that number
Exemple for number 5:
*/

// let number = 5;
// for ( let i = 1; i<=10; i++) {
//    console.log(`${number} x ${i} = ${number * i}`);
// }

/* Counting vowels
Create a program that counts the number of vowels in a given string
The program should run on a declared string variable, and then display the nr of vowels
*/
let sentence = 'New York';
let vowels = 'aeiouAEIOU'
let count = 0;

for ( let i = 0; i< sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
        count++;
        console.log(sentence[i]);
    }
}
console.log(`Number of vowels in "${sentence}": ${count}`);
