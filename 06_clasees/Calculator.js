class Calculator {
    add (a,b) {
        return a + b;
    }

    substract (a, b) {
        return a - b;
    }

    multiply (a, b) {
        return a * b;
    }
    
    divide (a, b) {
        return a / b;
    }
}
let calculator1 = new Calculator();
console.log(calculator1.add(4, 6));
console.log(calculator1.substract(5, 6));
console.log(calculator1.multiply(5, 3));
console.log(calculator1.divide(6, 2));