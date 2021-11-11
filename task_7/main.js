const tableCellsArr = [...document.getElementsByTagName("td")],
    optionsBtnsArr = [...document.querySelectorAll(".options-btn")],
    modalWindow = document.querySelector(".modal-window"),
    modalContent = document.querySelector(".modal-content"),
    modalBtn = document.querySelector(".modal-content-btn");
let inputText = document.querySelector('input[type="text"]');

let selectedCell = [];

function checkCellWasSelected() {
    const pressedCell = document.querySelectorAll(".active");
    if (pressedCell.length === 0) {
        alert("Сперва нажмите на ячейку");
        return false;
    } else if (pressedCell.length > 1) {
        Array.from(pressedCell).forEach((elem) => {
            elem.classList.remove("active");
        })
        selectedCell.classList.add("active");
    }
    return true;
}

function selectsTheCell(elem) {
    elem.target.classList.toggle("active");
    selectedCell = elem.target;
    checkCellWasSelected();
}

tableCellsArr.forEach((elem) => {
    elem.addEventListener("click", (elem) => {
        selectsTheCell(elem);
    });
});

optionsBtnsArr.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (checkCellWasSelected()) { 
            // добавление/редактирование записи
            if (!Array.from(elem.classList).includes("delete")) {
                modalWindow.style.display = "flex";
                inputText.focus();
                (selectedCell.innerHTML.length > 0) ? inputText.value = selectedCell.innerHTML : inputText.value = "";              
            } else {
                // удаление записи
                (function resetSelectedCell() {
                    selectedCell.innerHTML = "";
                }());
            }
        }
    })
})

function addValueToCell() {
    console.log(selectedCell.innerHTML);
    selectedCell.innerHTML = inputText.value;
}

modalBtn.addEventListener("click", () => {
    addValueToCell();
    inputText.value = "";
    modalWindow.style.display = "none";
});

modalWindow.addEventListener("click", (event) => {
    if (event.target.classList.toString() === "modal-window") {
        modalWindow.style.display = "none";
    }
});

