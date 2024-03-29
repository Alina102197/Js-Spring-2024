//1. Build Object for Employees
let employees = {
    name : 'John Snow',
    age : 30,
    salary: '$ 70,000',
    jobTitle : 'Data analyst',
    work : function() {
        console.log('Present at work');
    },
    break : function() {
        console.log('On break');
    },
    attentMeeting : function() {
        console.log('Is attending a meeting')
    }
};
//2. Build Object for  Bank accounts:
let bankAccount = {
    accountNumber : '0123456789',
    balance : '$ 1,450.70',
    accountType : 'Savings',
    deposit : function() {
        console.log('Deposit salary');
    },
    withdraw : function() {
        console.log('Withdraw $150');
    },
    transfer : function() {
        console.log('Transfer $100');
    }
};

//3. Build Object for  Dogs:
let dogs = {
    breed : 'Bulldog',
    age : '2 years',
    color : 'Brown',
    bark : function() {
        console.log('Bark');
    },
    wagTail : function() {
        console.log('Wag Tail');
    },
    fetch : function() {
        console.log('Fetch!');
    }
};
// 4. Suppose you are building an e-commerce application and you want
// to create a new Product object with property name, price, manufacturer, category:
let newProduct = {
    propertyName : 'Luna',
    price : 30,
    manufacturer : 'Estel',
    category : 'Mascara'
};
//5.Now add a description property to the Product object you created:
newProduct.description = 'Waterproof'

//6. Suppose the price of the Product object you created earlier changes. Now the price increased by $10
newProduct.price = newProduct.price + 10;
console.log(`$${newProduct.price}`);

//7. Remove the description property from the Product object you created earlier.:
// delete newProduct.description;
// console.log(newProduct);

//8. Find out if date field is empty on any object:
const blockPosts = [
    {
        title : 'The Importance of Regular Exercise',
        author : 'John Doe',
        date : '',
        content : 'Lorem ipsum dolor sit amet'
    },
    {
        title : 'Tips for Eating Healthy on a Budget',
        author : 'Jane Smith',
        date : '2022-02-15',
        content : 'Lorem ipsum dolor sit amet',
    },
    // ...
];

// }
for (let post of blockPosts) {
    if (post.date === null || post.date === '') {
        console.log('date field is empty');
    } else {
        console.log(`date field is ${post.date}`);
    }
}