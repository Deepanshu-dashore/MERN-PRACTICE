// Task 1: Array / Object Destructuring
const car = { brand: "Tesla", model: "Model 3", color: "white" };
const { brand, model } = car;
console.log(`Brand: ${brand}, Model: ${model}`);
document.getElementById("out1").innerText = `Brand: ${brand}, Model: ${model}`;

// Task 2: Spread & Rest Practice
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];
const allFruits = [...fruits, ...moreFruits];

const printFruits = (...items) => items.join(", ");
console.log("Merged:", allFruits);
document.getElementById("out2").innerText = `Merged: ${printFruits(...allFruits)}`;

// Task 3: Template Literals
const name = "Priya";
const course = "JavaScript Mastery";
const welcomeMsg = `Hello ${name}! Welcome to ${course}.`;
console.log(welcomeMsg);
document.getElementById("out3").innerText = welcomeMsg;

// Task 4: Code Refactor (ES5 -> ES6)
const user = { name: "Aman", age: 22 };
const greet = ({ name, age }) => `Hello ${name}, you are ${age} years old.`;
console.log(greet(user));
document.getElementById("out4").innerText = greet(user);

// Mini Challenge: ES6 Code Transformer
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);
document.getElementById("out5").innerText = `Doubled: [${doubled.join(", ")}]`;
