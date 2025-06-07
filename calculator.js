let nums = []
let number = "";
let op = "";
let operators = ["+", "-", "*", "/", "="]
let screen = document.querySelector(".calculation");
let num1 = "";
let num2 = "";

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
    if(num2 == 0) {
        return "sorry we can't divide by 0";
    }
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

    for (let i = 0; i < 10; i++) {
        let num = document.createElement("button");
        num.className = "numbers";
        num.textContent = i;
        displayCalculations(num);
        calculator.appendChild(num);
    }
    for (let i = 0; i < operators.length; i++) {
        let o = document.createElement("button");
        o.className = "operators";
        o.textContent = operators[i];
        displayCalculations(o);
        calculator.appendChild(o);
    }
    let clear = document.createElement("button");
    clear.className = "clear";
    clear.textContent = "clear";
    displayCalculations(clear);
    calculator.appendChild(clear)
};

function clear() {
    screen.textContent = "";
    num1 = "";
    num2 = "";
    op = "";
}

function equal() {
    //error checking
    if(num1 == "" || num2 == "") {
        op = "";
        screen.textContent = "Error. not enough numbers";
        return;
    }
    hold = operate(op, Number(num1), Number(num2));
    screen.textContent = hold;
}

function operatorEntered(opEntered) {
    if (num1 != "" && num2 != "" && op != "") {
        num1 = operate(op, Number(num1), Number(num2));
        num2 = "";
        op = opEntered;
        screen.textContent = num1;
    }
    else {
        op = opEntered;
        screen.textContent = ""
    }
}

function numberEntered(num) {
    if (op == "") {
        num1 += num;
        screen.textContent = num1;
        return num1;
    }
    num2 += num;
    screen.textContent = num2;
    return num2;

}
function displayCalculations(button) {
    let buttonText = button.textContent;
    if (buttonText == "clear") {
        button.addEventListener("click", function() {
            clear();
        });
    }
    else if(buttonText == "=") {
        button.addEventListener("click", function() {
            equal();
        });
    }
    else if(operators.includes(button.textContent)) {
        button.addEventListener("click", function() {
            operatorEntered(buttonText);
        });
    }
    else {
        button.addEventListener("click", function() {
            numberEntered(buttonText);
        });
    }
}

generateCalculator();