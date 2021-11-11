const tableCellsElems = [...document.getElementsByTagName("td")],
    btnAddElem = document.querySelector(".options-btn-add"),
    btnEditElem = document.querySelector(".options-btn-edit"),
    btnDeleteElem = document.querySelector(".options-btn-delete"),
    modalWindow = document.querySelector(".modal-window"),
    modalBtn = document.querySelector(".modal-content-btn");

function selectsTheCell(elem) {
    console.log(elem.target);
    elem.target.classList.toggle("active");
}

tableCellsElems.forEach((elem) => {
    elem.addEventListener("click", (elem) => selectsTheCell(elem));
});

btnAddElem.addEventListener("click", () => {
    modalWindow.style.display = "flex";
});

btnEditElem.addEventListener("click", () => {
    modalWindow.style.display = "flex";
});

modalBtn.addEventListener("click", () => {
    modalWindow.style.display = "none";
});








// function func2() {
//     console.log("Обработчик 2 работает");
//     this.removeEventListener("click", func());
//     this.removeEventListener("dblclick", func2());
// }

// tableCellsElems.forEach((elem) => {
//     elem.addEventListener("click", (elem) => selectsTheCell(elem));
//     elem.addEventListener("dblclick", (elem) => func2(elem));
// });

