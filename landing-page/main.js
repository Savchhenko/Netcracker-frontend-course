const formElem = document.querySelector(".modal-form");

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
    console.log(data);
    return data;
}

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    getDataFromForm(formElem);
})
