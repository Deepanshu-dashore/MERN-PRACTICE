function calculate(operator) {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const errorDiv = document.getElementById("calcError");
    const resultDiv = document.getElementById("calcResult");

    const val1 = num1Input.value.trim();
    const val2 = num2Input.value.trim();

    // Validate non-empty fields
    if (val1 === "" || val2 === "") {
        errorDiv.innerText = "Please enter both numbers";
        resultDiv.innerText = "Result: --";
        return;
    }

    errorDiv.innerText = "";
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    let res = 0;

    switch (operator) {
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                errorDiv.innerText = "Cannot divide by zero";
                resultDiv.innerText = "Result: --";
                return;
            }
            res = n1 / n2;
            break;
    }

    resultDiv.innerText = `Result: ${res}`;
}
