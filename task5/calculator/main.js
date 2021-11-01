const divisionElem = document.getElementById("division"),
    multiplicationElem = document.getElementById("multiplication"),
    subtractionElem = document.getElementById("subtraction"),
    additionElem = document.getElementById("addition"),
    squareRootElem = document.getElementById("square-root"),
    squaringElem = document.getElementById("squaring"),
    deletingElem = document.getElementById("deleting"),
    resetElem = document.getElementById("reset"),
    oneElem = document.getElementById("one"),
    twoElem = document.getElementById("two"),
    threeElem = document.getElementById("three"),
    fourElem = document.getElementById("four"),
    fiveElem = document.getElementById("five"),
    sixElem = document.getElementById("six"),
    sevenElem = document.getElementById("seven"),
    eightElem = document.getElementById("eight"),
    nineElem = document.getElementById("nine"),
    zeroElem = document.getElementById("zero"),
    equalElem = document.getElementById("equal"),
    dotElem = document.getElementById("dot");

const numbers = [oneElem, twoElem, threeElem, fourElem, fiveElem, sixElem, sevenElem, eightElem, nineElem, zeroElem];
const outputTextElem = document.querySelector(".output-text");


function addValueToOutput(elem) {
    let outputText = outputTextElem.textContent;
    if(outputText === "0.") {
        outputText += elem.textContent;
        outputTextElem.innerHTML = outputText;
    } else if(Number(outputText) === 0) {
        outputText = elem.textContent; //поменяли значение
        outputTextElem.innerHTML = outputText; //отразили это значение на странице
    } else {
        outputText += elem.textContent;
        outputTextElem.innerHTML = outputText;
    }
}

function removeLastValueFromOutput() {
    outputTextElem.innerHTML = outputTextElem.textContent.slice(0, outputTextElem.textContent.length-1);
}

//добавляет обработчик на цифры
for (let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {addValueToOutput(numbers[i])});
}

dotElem.addEventListener("click", () => {
    outputTextElem.textContent += dotElem.textContent;
})

divisionElem.addEventListener("click", () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "/") {
        if(lastSymbolOfOutput === "*" || lastSymbolOfOutput === "-" || lastSymbolOfOutput === "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(divisionElem);
    }
});

multiplicationElem.addEventListener("click", () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "*") {
        if(lastSymbolOfOutput === "/" || lastSymbolOfOutput === "-" || lastSymbolOfOutput === "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(multiplicationElem);
    }
});

subtractionElem.addEventListener("click", () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "-") {
        if(lastSymbolOfOutput === "/" || lastSymbolOfOutput === "*" || lastSymbolOfOutput === "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(subtractionElem);
    }
});

additionElem.addEventListener("click", () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "+") {
        if(lastSymbolOfOutput === "/" || lastSymbolOfOutput === "*" || lastSymbolOfOutput === "-") {
            removeLastValueFromOutput();
        }
        addValueToOutput(additionElem);
    }
});

squareRootElem.addEventListener("click", () => {
    let outputText = outputTextElem.innerHTML;
    if(Number.isInteger(Number(outputText))) {
        outputTextElem.innerHTML = Math.sqrt(Number(outputText));
    } else {
        outputTextElem.innerHTML = "0";
        alert("Введите положительное число, из которого вы хотите извлечь квадратный корень.")
    }
});

squaringElem.addEventListener("click", () => {
    if(Number.isInteger(Number(outputTextElem.innerHTML))) {
        outputTextElem.innerHTML = Number(outputTextElem.innerHTML)**2;
    } else {
        outputTextElem.innerHTML = "0";
        alert("Введите число, которое вы хотите возвести в квадрат.");
    }
});

equalElem.addEventListener("click", () => {
    let newOutputText = eval(outputTextElem.textContent);
    outputTextElem.innerHTML = newOutputText;
});

resetElem.addEventListener("click", () => {
    outputTextElem.innerHTML = 0;
});

deletingElem.addEventListener("click", () => {
    if(Number(outputTextElem.textContent.length) === 1) {
        outputTextElem.innerHTML = "0";
    } else {
        outputTextElem.innerHTML = outputTextElem.textContent.slice(0, -1);
    }
});
