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
};

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function formValidation(emailObj, phoneObj) {
    email = emailObj.value;
    phone = phoneObj.value;
    let result = "";

    if (!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
        alert("Please enter the email like this 'some@some.some'");
        return result = "false";
    } else if (phone.length > 0 && !/^\+\d{1}\(\d{3}\)\d{2}-\d{2}-\d{3}$/.test(phone)) {
        alert("Please enter your phone number like this +9(999)99-99-999");
        return result = "false";
    } else {
        // formElems.forEach((elem) => {
        //     elem.classList.remove("required");
        // });
        return result = "true";
    }
}

function getDataFromForm(formNode) {
    const { elements } = formNode;
    const data = Array.from(elements)
        .map( (element) => {
            const { name, type } = element;
            // если элемент - checkbox, то взяли значение его состояния true/false
            const value = type === 'checkbox' ? element.checked : element.value;
            return { name, value };
        })
        .filter((item) => !!item.name); //убрали элементы без названия, т.е. кнопку
        return data;
}

formElem.addEventListener("focus", () => {
    nameElem.classList.add("required");
    surnameElem.classList.add("required");
    emailElem.classList.add("required");
    textareaElem.classList.add("required");
}, true);

formElem.addEventListener("blur", () => {
    nameElem.classList.remove("required");
    surnameElem.classList.remove("required");
    emailElem.classList.remove("required");
    textareaElem.classList.remove("required");
}, true);

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = getDataFromForm(formElem);
    const validationResult = formValidation(data[2], data[3]);
    if (!data[5].value) {
        alert("Please confirm that you accept terms and conditions")
    } else if (validationResult === "true") {
        event.target.reset();
        alert("Your request has been successfully sent");
    }
    localStorage.clear();
    localStorage.setItem("Form", JSON.stringify(data));
});
