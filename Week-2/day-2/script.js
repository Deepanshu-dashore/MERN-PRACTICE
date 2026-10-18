// Task 1: map() and filter()
const prices = [120, 250, 300, 450, 600];
const filteredPrices = prices.filter(price => price > 250);
const discountedPrices = filteredPrices.map(price => price * 0.9);

console.log("Original Prices:", prices);
console.log("Filtered (>250):", filteredPrices);
console.log("Discounted (10% off):", discountedPrices);
document.getElementById("out1").innerHTML = `Original: [${prices.join(", ")}]<br>Filtered (&gt;250): [${filteredPrices.join(", ")}]<br>Discounted (10% off): [${discountedPrices.join(", ")}]`;

// Task 2: Total Expense with reduce()
const expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 150 },
    { category: "Shopping", amount: 400 },
];

const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
console.log(`Total Expense: ₹${totalExpense}`);
document.getElementById("out2").innerText = `Total Expense: ₹${totalExpense}`;

// Task 3: Combine map(), filter(), reduce()
const scores = [45, 80, 90, 35, 60, 75];
const passingBonusTotal = scores
    .filter(score => score >= 50)
    .map(score => score + 10)
    .reduce((sum, score) => sum + score, 0);

console.log("Passing with Bonus Total:", passingBonusTotal);
document.getElementById("out3").innerText = `Passing Scores with Bonus Total: ${passingBonusTotal}`;

// Mini Challenge: Student Score Analyzer
const students = [
    { name: "Rahul", score: 85 },
    { name: "Pooja", score: 42 },
    { name: "Amit", score: 92 },
    { name: "Neha", score: 58 }
];

const passedStudents = students.filter(s => s.score >= 50);
const averageScore = students.reduce((sum, s) => sum + s.score, 0) / students.length;

document.getElementById("out4").innerHTML = `Average Score: ${averageScore.toFixed(1)}<br>Passed Students: ${passedStudents.map(s => s.name).join(", ")}`;
