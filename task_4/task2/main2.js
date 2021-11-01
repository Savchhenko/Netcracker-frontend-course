let userName = window.prompt("Введите своё имя: ");
let userAge = window.prompt("Введите свой возраст: ");

while(!/^[a-z]+$/i.test(userName) || !/^[а-яё]+$/i.test(userName)) {
    userName = window.prompt("Введите корректное имя:");
}
while(userAge <= 0 || !/^\d+$/.test(userAge)) {
    userAge = window.prompt("Введите корректный возраст:");
}

let rightUserName = userName[0].toUpperCase() + userName.slice(1);

alert(`Привет, ${rightUserName}, тебе уже ${userAge} лет!`);
