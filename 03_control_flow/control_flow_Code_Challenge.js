// 1.Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
// let number = 10;
// if(number % 2 ===0) {
//     console.log(`number ${number} is even`);
// } else { console.log(`number ${number} is odd`);}

// 2. Write a program based on age and displays a message based on their age using an if-else if statement:
// let age = 24;
// if(age < 18) {
//     console.log('You are a minor');
// } else if(age >=18 && age <=65) {
//     console.log('You are an adult');
// } else { console.log ('You are a senior citizen')}

// 3. Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement:
// let letter = 'e';
// if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//     console.log(`Letter ${letter} is a vowel`);
// } else { console.log(`Letter ${letter} is a consonant`); }

// 4. Write a program based on three numbers and displays the largest number using an if-else statement.
// let numberOne = 30;
// let numberTwo = 15;
// let numberThree = 45;
// if(numberOne > numberTwo && numberOne > numberThree) {
//     console.log(`The largest number is ${numberOne}`);
// } else if(numberTwo > numberOne && numberTwo > numberThree) {
//     console.log(`The largest number is ${numberTwo}`);
// } else { console.log(`The largest number is ${numberThree}`); }

// 5. Write a program based on given password and displays a message based on the password using an if-else statement:
// let password = 'Tes@t1233';
// let passwordLength = password.length;

// const pattern = /^[a-zA-Z0-9]+$/;
// // console.log(pattern.test(password));


// if(passwordLength < 8) {
//     console.log('Password too short');
// } else if (pattern.test(password)) {
//     console.log('Password accepted');
// } else { console.log('Password rejected'); }

let mailAddress = 'alina_c@gmail.com'
const pattern = /^[a-z0-9._@]+$/
console.log(pattern.test(mailAddress));





/**
 * Regular Expression
 *  is a pattern
 * 
 * 1. Create a regularExpression which matches with Alphabets-and-Digits [a-zA-Z0-9]+
 * 2. Test that password contains the patterns mentioned in the regularExpression
 * 
 * 
 * TestPwd1234 - true
 * Test@1234 - false
 * 
 */