// let numbers = [5, 8, 12, 18, 20];
// let numbertoFind = numbers.find((number) => {
//     return number > 10;
// })
// console.log(numbertoFind);

let users = [
    {id: 1, name: 'Alice', email: 'alice.example.com'},
    {id: 1, name: 'bob', email: 'bob.example.com'},
    {id: 1, name: 'charlie', email: 'charlie.example.com'},
    {id: 1, name: 'dave', email: 'dave.example.com'}
]
let neededuser = users.find((user) => {
    return user.name === 'charlie';

})
console.log(neededuser);