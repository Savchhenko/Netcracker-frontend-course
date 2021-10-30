const divisionElem = document.getElementById('division'),
    multiplicationElem = document.getElementById('multiplication'),
    subtractionElem = document.getElementById('subtraction'),
    additionElem = document.getElementById('addition'),
    squareRootElem = document.getElementById('square-root'),
    squaringElem = document.getElementById('squaring'),
    deletingElem = document.getElementById('deleting'),
    resetElem = document.getElementById('reset'),
    oneElem = document.getElementById('one'),
    twoElem = document.getElementById('two'),
    threeElem = document.getElementById('three'),
    fourElem = document.getElementById('four'),
    fiveElem = document.getElementById('five'),
    sixElem = document.getElementById('six'),
    sevenElem = document.getElementById('seven'),
    eightElem = document.getElementById('eight'),
    nineElem = document.getElementById('nine'),
    zeroElem = document.getElementById('zero'),
    equalElem = document.getElementById('equal'),
    dotElem = document.getElementById('dot');

const numbers = [oneElem, twoElem, threeElem, fourElem, fiveElem, sixElem, sevenElem, eightElem, nineElem, zeroElem];
let outputTextElem = document.querySelector('.output-text');


function addValueToOutput(elem) {
    let outputText = outputTextElem.textContent;
    if(outputText == 0) {
        outputText = elem.textContent; //поменяли значение
        outputTextElem.innerHTML = outputText; //отразили это значение на странице
    } else {
        outputText += elem.textContent;
        outputTextElem.innerHTML = outputText;
    }
}

function removeLastValueFromOutput() {
    let outputText = outputTextElem.textContent;
    let newOutputText = outputText.slice(0, outputText.length-1);
    outputTextElem.innerHTML = newOutputText;
}

for (let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {addValueToOutput(numbers[i])});
}

divisionElem.addEventListener('click', () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "/") {
        if(lastSymbolOfOutput == "*" || lastSymbolOfOutput == "-" || lastSymbolOfOutput == "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(divisionElem);
    }
});

multiplicationElem.addEventListener('click', () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "*") {
        if(lastSymbolOfOutput == "/" || lastSymbolOfOutput == "-" || lastSymbolOfOutput == "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(multiplicationElem);
    }
});

subtractionElem.addEventListener('click', () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "-") {
        if(lastSymbolOfOutput == "/" || lastSymbolOfOutput == "*" || lastSymbolOfOutput == "+") {
            removeLastValueFromOutput();
        }
        addValueToOutput(subtractionElem);
    }
});

additionElem.addEventListener('click', () => {
    let lastSymbolOfOutput = outputTextElem.textContent.toString().slice(-1);
    if(lastSymbolOfOutput !== "+") {
        if(lastSymbolOfOutput == "/" || lastSymbolOfOutput == "*" || lastSymbolOfOutput == "-") {
            removeLastValueFromOutput();
        }
        addValueToOutput(additionElem);
    }
});


squareRootElem.addEventListener('click', (event) => {console.log(event.target);});
squaringElem.addEventListener('click', (event) => {console.log(event.target);});
deletingElem.addEventListener('click', (event) => {console.log(event.target);});
resetElem.addEventListener('click', (event) => {console.log(event.target);});