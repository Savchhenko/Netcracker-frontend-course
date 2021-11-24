const optionsBtnsArr = [...document.querySelectorAll(".options-btn")],
    modalWindow = document.querySelector(".modal-window"),
    modalBtn = document.querySelector(".modal-content-btn"),
    addRowBtn = document.querySelector(".add-row"),
    deleteRowBtn = document.querySelector(".delete-row"),
    tableElem = document.querySelector(".table-elem"),
    tbodyElem = document.querySelector(".tbody");
let inputText = document.querySelector('input[type="text"]'),
    categoryCellsArr = [...document.querySelectorAll(".category")];

let selectedCell = [];
let selectedRow = [];

//Убирает background-color с дргуих ячеек
function deleteOtherSelectedCells() {
    const pressedCells = document.querySelectorAll(".active");
    if (pressedCells.length > 1) {
        Array.from(pressedCells).forEach((elem) => {
            elem.classList.remove("active");
        })
        selectedCell.classList.add("active");
        return true;
    }
    return true;
}

//Проверяет что пользователь нажал ячейку перед тем как нажать кнопки Добавить/Редактировать/Удалить запись
function checkCellWasSelected() {
    const pressedCells = document.querySelectorAll(".active");
    if (pressedCells.length === 0) {
        alert("Сперва нажмите на ячейку");
        return false;
    }
    return true;
}

//Выбирает ячейку при нажатии, задает ей background-color, который прописан в классе active
function selectsTheCell(elem) {
    elem.target.classList.toggle("active");
    selectedCell = elem.target;
    deleteOtherSelectedCells();
}

//Задает background-color выбранной строке
function categoryCellsHandler(elem) {
    const pressedElem = document.querySelectorAll(".active");
    selectedRow = elem.target.parentNode;
    pressedElem.forEach((elem) => {
        elem.classList.remove("active");
    });
    selectedRow.classList.add("active");
}

//Добавляет значение к выбранную ячейку
function addValueToCell() {
    selectedCell.innerHTML = inputText.value;
}

//Добавляет обработчик на каждую ячейку
const addClickListenerToAllCells = function () {
    let tableCellsArr = [...document.getElementsByTagName("td")];
    tableCellsArr.forEach((elem) => {
        elem.addEventListener("click", (elem) => {
            selectsTheCell(elem);
        });
    });
};

//Добавляет обработчик клика на каждую из строк
categoryCellsArr.forEach((elem) => {
    elem.addEventListener("click", (elem) => {
        categoryCellsHandler(elem);
    });
});

//Добавляет обработчик на каждую из трех кнопок Добавить/Редактировать/Удалить запись и определяет поведение в зависимости, какая кнопка была нажата
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

//Кнопка "Подтвердить" в модальном окне, добавляет запись в ячейку и закрывает модальное окно при нажатии
modalBtn.addEventListener("click", () => {
    addValueToCell();
    inputText.value = "";
    modalWindow.style.display = "none";
});

//Закрывает модальное окно при клике вне его содержимого
modalWindow.addEventListener("click", (event) => {
    if (event.target.classList.toString() === "modal-window") {
        modalWindow.style.display = "none";
    }
});

//Добавляет строку в таблицу
addRowBtn.addEventListener("click", () => {
    let categoryName = "";
    while (!categoryName) {
        categoryName = prompt("Введите название категории:");

        // если пользователь нажал кнопку Отмена во время вызова prompt, то действие добавление строки прерывается
        if (categoryName === null) {
            return ;
        }
    }
    const tr = document.createElement("tr");
    const row = `
        <th class="category">${categoryName}</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `
    tbodyElem.appendChild(tr);
    tr.innerHTML = row;

    tr.addEventListener("click", (tr) => {
        categoryCellsHandler(tr);
    });

    addClickListenerToAllCells();
});

//Удаляет строку из таблицы
deleteRowBtn.addEventListener("click", () => {
    console.log(selectedRow);
    console.log((tableElem.childNodes)[3]);
    if (selectedRow.length === 0) {
        alert("Сперва выберите строку")
    } else {
        Array.from(tableElem.childNodes)[3].removeChild(selectedRow);
    }
});

addClickListenerToAllCells();

