const container = document.getElementById("container");

let numbers = [];

(function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(!(i % 15)) {
            numbers.push(" FizzBuzz");
        } else if( !(i % 3)) {
            numbers.push(" Fizz");
        } else if(!(i % 5)) {
            numbers.push(" Buzz");
        } else {
            numbers.push(" " + i.toString());
        }
    }
}) ();

container.innerHTML = numbers;
