//***1. Create a class called Animal that has a name property and a speak method.
// The speak method should log a message to the console saying "Hello, my name is {name}." 
//Create an instance of the Animal class and call the speak method. 
class Animal {
    constructor (name) {
        this.name = name;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}.`);
    }

}
// let animal1 = new Animal('Simba');
// animal1.speak();

//***2. Create a class called Person that has name and age properties, and a greet method 
//that logs a message to the console saying "Hello, my name is {name} and I am {age} years old." 
//Create an instance of the Person class and call the greet method.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }
// let person1 = new Person('Alex Brown', 29);
// person1.sayHello();

//***3. Create a class called Car that has make, model, and year properties, 
//and a start method that logs a message to the console saying "The {make} {model} is starting." 
//Create an instance of the Car class and call the start method.

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     Start() {
//         console.log(`The ${this.make} ${this.model} is starting`)
//     }
// }
// let car1 = new Car('Toyota', 'Corolla', 2020);
// car1.Start();

//***4. Create a class called Rectangle that has width and height properties, and a getArea method that returns 
//the area of the rectangle. Create an instance of the Rectangle class and call the getArea method.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        
    }
    getArea () {
        console.log(`The Area of the rectangle is ${this.width * this.height}`);
    }
}
let rectangle1= new Rectangle(17, 15);
rectangle1.getArea();

//***5. Create a class called Square that extends the Rectangle class and has a sideLength property. 
//Override the getArea method in the Square class to return the area of the square. 
//Create an instance of the Square class and call the getArea method.
//*******Need Help!!!!!!!!! */

class Square extends Rectangle {
    constructor(sideLength) {
        super()
        this.sideLength = sideLength;
    }
    getArea () {
        console.log(`The Area of the square is ${this.sideLength * this.sideLength}`);
    }
}
let square1 = new Square(10);
square1.getArea();
//***6.Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, 
//and a deposit method that takes in an amount and adds it to the balance. 
//Create an instance of the BankAccount class and call the deposit method with an amount.

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber= accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount
        console.log(`\nDeposit successful.\nNew Balance is $${this.balance}`);
    }

}

let account = new BankAccount(1234, "Abcd", 1000000);
account.deposit(500);



//***7. Create a class called Person that has name and email properties, and a sendEmail method 
//that takes in a message and sends an email to the person's email address. 
//Create an instance of the Person class and call the sendEmail method with a message. */

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sendEmail(message) {
        console.log(`${message} is sent`)
    }
}
let person1 = new Person('John Doe', 'john.doe@message.com')
person1.sendEmail('"Hello"');
//***8. Create a class called Product that has name, price, and description properties, 
//and a discount method that takes in a percentage and returns the discounted price. 
//Create an instance of the Product class and call the discount method with a percentage. */

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price= price;
        this.description = description;
    }
    discount(x) {
        let discountedprice = this.price - (this.price*(x/100))
        console.log(`Discounted price is $${discountedprice}`);
    }
}
let discount = 20;
let product1 = new Product('Table', 100, 'For outdoor patio')
product1.discount(discount);