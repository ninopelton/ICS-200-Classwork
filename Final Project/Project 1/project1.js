document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.getElementById("calculator");
    const resultDisplay = calculator.querySelector(".result");
    let currentInput = "0";
    let operator = "";
    let previousInput = "";

    function updateDisplay() {
        resultDisplay.textContent = currentInput;
    }

    function clear() {
        currentInput = "0";
        previousInput = "";
        operator = "";
        updateDisplay();
    }

    function calculate() {
        let result = "";
        switch (operator) {
            case "+":
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case "/":
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
            default:
                break;
        }
        currentInput = result.toString();
        previousInput = "";
        operator = "";
        updateDisplay();
    }

    calculator.addEventListener("click", function(event) {
        const clickedButton = event.target;
        if (clickedButton.classList.contains("teal-bg")) {
            const digit = clickedButton.textContent;
            if (currentInput === "0") {
                currentInput = digit;
            } else {
                currentInput += digit;
            }
            updateDisplay();
        } else if (clickedButton.classList.contains("orange-bg")) {
            const clickedOperator = clickedButton.textContent;
            if (operator !== "") {
                calculate();
                // Remove glow effect from previously selected operator
                const previousOperator = calculator.querySelector(".glow");
                previousOperator.classList.remove("glow");
            }
            operator = clickedOperator;
            previousInput = currentInput;
            currentInput = "0";
            // Add glow effect to selected operator
            clickedButton.classList.add("glow");
        } else if (clickedButton.classList.contains("equals")) {
            calculate();
        } else if (clickedButton.classList.contains("ac")) {
            clear();
            // Remove glow effect from all operator buttons
            const operatorButtons = calculator.querySelectorAll(".orange-bg");
            operatorButtons.forEach(button => {
                button.classList.remove("glow");
            });
        }
    });

    const clickableDivs = calculator.querySelectorAll("div");
    clickableDivs.forEach(div => {
        div.style.cursor = "pointer";
    });
});
