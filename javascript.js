let displayValue = "0";
let firstNum = "0";
let secondNum = "0";
let operator = null;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        return "no";
    }
    return a / b;
}
function operate(firstNum, op, secondNum) {
    if (op == "+") {
        return add(firstNum, secondNum);
    } else if (op == "-") {
        return subtract(firstNum, secondNum);
    } else if (op == "*") {
        return multiply(firstNum, secondNum);
    } else if (op == "/") {
        return divide(firstNum, secondNum);
    } 
}

function buttonFunctionality() {
    const nums = Array.from(document.querySelectorAll(".number"));
    const order = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
    for (let i = 0; i < 9; i++) {
        nums[i].addEventListener("click", () => {
            const display = document.querySelector(".display");
            if (operator == null) {
                if (firstNum === "0") {
                    display.innerText = order[i];
                    displayValue = order[i];
                } else if (displayValue.length < 9) {
                    display.innerText = displayValue + order[i];
                    displayValue = display.innerText;
                }
                firstNum = displayValue;
            } else {
                if (secondNum === "0") {
                    display.innerText = order[i];
                    displayValue = order[i];
                } else if (secondNum.length < 9) {
                    display.innerText = displayValue + order[i];
                    displayValue = display.innerText;
                }
                secondNum = displayValue;
            }
        })
    }
}
function operatorFunctionality() {
    const plus = document.querySelector("#plus");
    plus.addEventListener("click", () => {
        if (displayValue !== firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "+";
        } else if (firstNum != "0" && secondNum != "0") {
            calculate();
            operator = "+";
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const minus = document.querySelector("#minus");
    minus.addEventListener("click", () => {
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "-";
        } else if (firstNum != "0" && secondNum != "0") {
            calculate();
            operator = "-";
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "*";
        } else if (firstNum != "0" && secondNum != "0") {
            calculate();
            operator = "*";
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "/";
        } else if (firstNum != "0" && secondNum != "0") {
            calculate();
            operator = "/";
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const equal = document.querySelector("#equals");
    equal.addEventListener("click", () => {
        calculate();
        firstNum = "0";
    });
    const dele = document.querySelector("#del");
    dele.addEventListener("click", del);
}
function calculate() {
    if (operator != null && secondNum != "0") {
        displayValue = operate(Number(firstNum), operator, Number(secondNum)).toString();
        document.querySelector(".display").innerText = displayValue;
        operator = null;
        firstNum = displayValue;
        secondNum = "0";
    } else if (operator == null) {
        alert("You need to choose an operator!");
    } else if (secondnum != "0") {
        alert("You need a second operand!");
    }
}
function del() {
    document.querySelector(".display").innerText = "0";
    if (operator == null) {
        firstNum = "0";
    } else {
        secondNum = "0";
    }
}
buttonFunctionality();
operatorFunctionality();
