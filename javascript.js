let displayValue = "0";
let firstNum = "0";
let secondNum = null;
let operator = null;
let endsindot = false;
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
    const order = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
    for (let i = 0; i < 10; i++) {
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
                if (secondNum == null) {
                    display.innerText = order[i];
                    displayValue = order[i];
                } else if (secondNum.length < 9) {
                    display.innerText = displayValue + order[i];
                    displayValue = display.innerText;
                }
                secondNum = displayValue;
            }
            endsindot = false;
        })
    }
}
function operatorFunctionality() {
    const plus = document.querySelector("#plus");
    plus.addEventListener("click", () => {
        if (endsindot) {
            displayValue = "0";
            firstNum = "0";
            secondNum = null;
            operator = null;
            document.querySelector(".display").innerText = "SYNTAX ERROR";
            endsindot = false;
        }
        if (displayValue !== firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "+";
            endsindot = false;
        } else if (firstNum != "0" && secondNum != null) {
            calculate();
            operator = "+";
            endsindot = false;
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const minus = document.querySelector("#minus");
    minus.addEventListener("click", () => {
        if (endsindot) {
            displayValue = "0";
            firstNum = "0";
            secondNum = null;
            operator = null;
            document.querySelector(".display").innerText = "SYNTAX ERROR";
            endsindot = false;
        }
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "-";
            endsindot = false;
        } else if (firstNum != "0" && secondNum != null) {
            calculate();
            operator = "-";
            endsindot = false;
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        if (endsindot) {
            displayValue = "0";
            firstNum = "0";
            secondNum = null;
            operator = null;
            document.querySelector(".display").innerText = "SYNTAX ERROR";
            endsindot = false;
        }
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "*";
            endsindot = false;
        } else if (firstNum != "0" && secondNum != null) {
            calculate();
            operator = "*";
            endsindot = false;
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        if (endsindot) {
            displayValue = "0";
            firstNum = "0";
            secondNum = null;
            operator = null;
            document.querySelector(".display").innerText = "SYNTAX ERROR";
            endsindot = false;
        }
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        if (operator == null) {
            operator = "/";
            endsindot = false;
        } else if (firstNum != "0" && secondNum != null) {
            calculate();
            operator = "/";
            endsindot = false;
        } else {
            alert("Operator has already been pressed!");
        }
    });

    const equal = document.querySelector("#equals");
    equal.addEventListener("click", () => {
        calculate();
        if (secondNum != "no") firstNum = "0";
        else secondNum = null;
    });
    const dele = document.querySelector("#del");
    dele.addEventListener("click", del);

    document.querySelector("#pm").addEventListener("click", () => {
        if (displayValue != "0") {
            if (displayValue === firstNum) {
                firstNum = "-" + firstNum;
            } else if (displayValue == secondNum) {
                secondNum = "-" + secondNum;
            }
            displayValue = "-" + displayValue;
        }
        if (displayValue != firstNum && firstNum === "0") {
            firstNum = displayValue;
        }
        document.querySelector(".display").innerText = displayValue;
    });

    document.querySelector("#clear").addEventListener("click", () => {
        displayValue = "0";
        document.querySelector(".display").innerText = "0";
        firstNum = "0";
        secondNum = null;
        operator = null;
        endsindot = false;
    });

    document.querySelector("#dot").addEventListener("click", () => {
        if (operator == true && secondNum == null) {
            display.innerText = "0.";
            displayValue = "0.";
            secondNum = "0.";
            endsindot = true;
            return;
        }
        if (displayValue.indexOf(".") != -1) {
            alert("Number already has decimal place!");
            return;
        }
        display = document.querySelector(".display");
        if (displayValue.length < 10) {
            display.innerText += ".";
            displayValue += ".";
        }
        if (operator == null) {
            firstNum = displayValue;
        } else {
            secondNum = displayValue;
        }
        endsindot = true;
    });
}
function calculate() {
    if (operator != null && secondNum != null) {
        displayValue = operate(Number(firstNum), operator, Number(secondNum)).toString();
        if (displayValue == "no") {
            document.querySelector(".display").innerText = "DIVIDE BY 0";
            operator = null;
            firstNum = "0";
            secondnUm = null;
            displayValue = "0";
            return;
        }
        displayValue = (Math.round(Number(displayValue) * 100000) / 100000).toString();
        document.querySelector(".display").innerText = displayValue;
        if (Number(displayValue) >= 10**10) {
            document.querySelector(".display").innerText = "OVERFLOW";
            operator = null;
            firstNum = "0";
            secondNum = null;
            displayValue = "0";
            return;
        }
        operator = null;
        firstNum = displayValue;
        secondNum = null;
    } else if (operator == null) {
        alert("You need to choose an operator!");
        secondNum = "no";
    } else if (secondNum == null) {
        alert("You need a second operand!");
        secondNum = "no";
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
