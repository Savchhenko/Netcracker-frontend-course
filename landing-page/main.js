const formElem = document.querySelector(".modal-form");
const formElems = document.querySelectorAll(".form-elem");
const nameElem = document.querySelector(".name");
const surnameElem = document.querySelector(".surname");
const emailElem = document.querySelector(".email");
const phoneElem = document.querySelector(".phone");
const textareaElem = document.querySelector(".modal-form-textarea");

// заполнение полей формы, если страница была закрыта до отправки этой формы
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

//проверка как имени так и фамилии - type
const nameValidation = function(type, name) {
    if (!/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i.test(name)) {
        alert(`Please enter the correct ${type}`);
        return false;
    }
    return true;
}

const emailValidation = function(email) {
    if (!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
        alert("Please enter the email like this 'some@some.some'");
        return false;
    }
    return true;
}

const phoneValidation = function(phone) {
    if (phone.length > 0 && !/^\+\d{1}\(\d{3}\)\d{2}-\d{2}-\d{3}$/.test(phone)) {
        alert("Please enter your phone number like this +7(999)99-99-999");
        return false;
    }
    return true;
}

function formValidation(nameObj, surnameObj, emailObj, phoneObj) {
    let result = "";
    const name = nameObj.value;
    const surname = surnameObj.value;
    const email = emailObj.value;
    const phone = phoneObj.value;

    result = nameValidation("name", name) && nameValidation("surname", surname) && emailValidation(email) && phoneValidation(phone);
    if (result) {
        formElems.forEach((elem) => {
            elem.classList.remove("required");
        });
    }
    return result;
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
    const [name, surname, email, phone, , acception] = data;
    const validationResult = formValidation(name, surname, email, phone);

    let cookies = document.cookie.split("; ");

    if (!acception.value) {
        alert("Please confirm that you accept terms and conditions")
    }
    if (cookies.includes(`${name.value}=${surname.value}=the request has been sent`)) {
        alert(`${name.value} ${surname.value}, your request is being processed`);
        event.target.reset();
    } else if (validationResult === true) {
        event.target.reset();
        document.cookie = `${name.value}=${surname.value}=the request has been sent`;
        alert(`${name.value} ${surname.value}, thank you for your request!`);
    }
    localStorage.clear(); 
    saveToLocalStorage("Form", JSON.stringify(data));
});
