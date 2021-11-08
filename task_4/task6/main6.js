const btn = document.getElementById('btn');
let count = 0; //количество попыток
let secretNumber = Math.floor(Math.random(1000)*1001); //загаданное число
console.log(secretNumber);

function startGame() {
    count++;
    console.log(`Это уже ${count} попытка`);

    let value = Number(window.prompt("Введите число:"));

    if(!Number.isInteger(value)) {
        alert("Вы ввели не число");
    } else if(value < secretNumber) {
        alert("Искомое число больше!");
    } else if(value > secretNumber) {
        alert("Искомое число меньше!")
    } else if(value == secretNumber) {
        if(window.confirm(`Вы угадали! Количество попыток: ${count}. Начать заново?`)) {
            secretNumber = Math.floor(Math.random(1000)*1001);
            console.log(secretNumber);
            count = 0;
        }
    }
}

btn.addEventListener("click", startGame);