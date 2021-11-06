const divisionElem = document.getElementById("division"),
    multiplicationElem = document.getElementById("multiplication"),
    subtractionElem = document.getElementById("subtraction"),
    additionElem = document.getElementById("addition"),
    squareRootElem = document.getElementById("square-root"),
    squaringElem = document.getElementById("squaring"),
    deletingElem = document.getElementById("deleting"),
    resetElem = document.getElementById("reset"),
    equalElem = document.getElementById("equal"),
    dotElem = document.getElementById("dot");

const numbers = document.getElementsByClassName("number");
const outputTextElem = document.querySelector(".output-text");

function addValueToOutput(elem) {
    let outputText = outputTextElem.textContent;

    // Функция для демонстрации замыкания
    function addAndDisplayTextFromElemToOutput() {
        outputText += elem.textContent;
        return outputTextElem.innerHTML = outputText;
    }

    if (outputText === "0.") {
        addAndDisplayTextFromElemToOutput();
    } else if (Number(outputText) === 0) {
        outputTextElem.innerHTML = elem.textContent; 
    } else {
        addAndDisplayTextFromElemToOutput();
    }
}

let removeLastValueFromOutput = function () {
    outputTextElem.innerHTML = outputTextElem.textContent.slice(0, -1);
};

//добавляет обработчик на цифры
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => { addValueToOutput(numbers[i]) });
}

dotElem.addEventListener("click", () => {
    outputTextElem.textContent += dotElem.textContent;
});

divisionElem.addEventListener("click", () => {
    const lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if (lastSymbolOfOutput !== "/") {
        if (["*", "-", "+"].includes(lastSymbolOfOutput)) {
            removeLastValueFromOutput();
        }
        addValueToOutput(divisionElem);
    }
});

multiplicationElem.addEventListener("click", () => {
    const lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if (lastSymbolOfOutput !== "*") {
        if (["/", "-", "+"].includes(lastSymbolOfOutput)) {
            removeLastValueFromOutput();
        }
        addValueToOutput(multiplicationElem);
    }
});

subtractionElem.addEventListener("click", () => {
    const lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if (lastSymbolOfOutput !== "-") {
        if (["/", "*", "+"].includes(lastSymbolOfOutput)) {
            removeLastValueFromOutput();
        }
        addValueToOutput(subtractionElem);
    }
});

additionElem.addEventListener("click", () => {
    const lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if (lastSymbolOfOutput !== "+") {
        if (["/", "*", "-"].includes(lastSymbolOfOutput)) {
            removeLastValueFromOutput();
        }
        addValueToOutput(additionElem);
    }
});

squareRootElem.addEventListener("click", () => {
    let outputText = outputTextElem.innerHTML;
    if (Number(outputText) >= 0) {
        outputTextElem.innerHTML = Math.sqrt(Number(outputText));
    } else {
        outputTextElem.innerHTML = "0";
        alert("Введите положительное число, из которого вы хотите извлечь квадратный корень.")
    }
});

squaringElem.addEventListener("click", () => {
    if (Number(outputTextElem.innerHTML)) {
        outputTextElem.innerHTML = Number(outputTextElem.innerHTML)**2;
    } else {
        outputTextElem.innerHTML = "0";
        alert("Введите число, которое вы хотите возвести в квадрат.");
    }
});

equalElem.addEventListener("click", () => {
    const newOutputText = eval(outputTextElem.textContent);
    outputTextElem.innerHTML = newOutputText;
});

resetElem.addEventListener("click", () => {
    outputTextElem.innerHTML = "0";
});

deletingElem.addEventListener("click", () => {
    if (Number(outputTextElem.textContent.length) === 1) {
        outputTextElem.innerHTML = "0";
    } else {
        removeLastValueFromOutput();
    }
});
