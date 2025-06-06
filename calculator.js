function add(num1, num2) {
    //may need to add error checking for non-numbers
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2)
    }
    else if (operator == "/") {
        return divide(num1, num2)
    }
    else {
        return "Not a valid operator";
    }
}

function generateCalculator() {
    let calculator = document.querySelector(".calculator");
    let operators = ["+", "-", "*", "/", "="]

    for (let i = 0; i < 10; i++) {
        let num = document.createElement("button");
        num.className = "numbers";
        num.textContent = i;
        displayCalculations(num);
        calculator.appendChild(num);
    }
    for (let i = 0; i < operators.length; i++) {
        let op = document.createElement("button");
        op.className = "operators";
        op.textContent = operators[i];
        displayCalculations(op);
        calculator.appendChild(op);
    }
    let clear = document.createElement("button");
    clear.className = "clear";
    clear.textContent = "clear";
    displayCalculations(clear);
    calculator.appendChild(clear)
};

function displayCalculations(button) {
    let screen = document.querySelector(".calculation");
    //most likely need special eventlistner of "=" operator
    if (button.textContent == "clear") {
        button.addEventListener("click", function() {
            screen.textContent = "";
        });
    }
    else {
        button.addEventListener("click", function() {
            screen.textContent += button.textContent;
        });
    }
};

generateCalculator();