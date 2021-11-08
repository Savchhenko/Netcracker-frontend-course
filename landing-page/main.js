const formElem = document.querySelector(".modal-form");
const formElems = document.querySelectorAll(".form-elem");
const nameElem = document.querySelector(".name");
const surnameElem = document.querySelector(".surname");
const emailElem = document.querySelector(".email");
const phoneElem = document.querySelector(".phone");
const textareaElem = document.querySelector(".modal-form-textarea");

window.onload = function() {
    nameElem.value = localStorage.getItem("name") || [];
    surnameElem.value = localStorage.getItem("surname") || [];
    emailElem.value = localStorage.getItem("email") || [];
    phoneElem.value = localStorage.getItem("phone") || [];
    textareaElem.value = localStorage.getItem("message") || [];
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function formValidation() {
    console.log("something");
}

function getDataFromForm(formNode) {
    const { elements } = formNode;

    const data = Array.from(elements)
        .map( (element) => {
            const { name, type } = element;
            // если элемент - checkbox, то взяли значение его состояния true/false
            const value = type === 'checkbox' ? element.checked : element.value
            return { name, value }
        })
        .filter((item) => !!item.name); //убрали элементы без названия, т.е. кнопку
        return data;
}

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation();
    const data = getDataFromForm(formElem);
    localStorage.clear();
    localStorage.setItem("Form", JSON.stringify(data));
})
