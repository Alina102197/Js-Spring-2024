class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

let user1 = new User('John Doe', 'john.doe@example.com');
user1.getInfo();