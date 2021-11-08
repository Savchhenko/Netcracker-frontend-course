let word = window.prompt("Введите слово:");

if(word.toLowerCase().trim() == word.toLowerCase().trim().split("").reverse().join("")) {
    alert(`${word} палиндром!`);
} else {
    alert(`${word} не палиндром!`)
}
