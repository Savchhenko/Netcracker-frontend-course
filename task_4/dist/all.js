let a=5,b=100;console.log(`Initial values: a = ${a}, b = `+b);let c;c=a,a=b,b=c,console.log(`After the first swap: a = ${a}, b = `+b),console.log(`Now a = ${a}, b = `+b),[a,b]=[b,a],console.log(`After the second swap: a = ${a}, b = `+b),alert("Привет, JavaScript");let userName=window.prompt("Введите своё имя: "),userAge=window.prompt("Введите свой возраст: ");for(;!/^[a-z]+$/i.test(userName)||!/^[а-яё]+$/i.test(userName);)userName=window.prompt("Введите корректное имя:");for(;userAge<=0||!/^\d+$/.test(userAge);)userAge=window.prompt("Введите корректный возраст:");let rightUserName=userName[0].toUpperCase()+userName.slice(1);alert(`Привет, ${rightUserName}, тебе уже ${userAge} лет!`);let arr=[];const asc=!0,desc=!1;function bubbleSort(t,o){for(let r=t.length-1;0<r;r--)for(let e=0;e<r;e++){var a=t[e];(1==o&&t[e]>t[e+1]||0==o&&t[e]<t[e+1])&&(t[e]=t[e+1],t[e+1]=a)}return console.log("Sorted array: ",t),t}function sum(r){let t=0;for(let e=0;e<r.length;e++)e%2&&(t+=r[e]**2);return console.log(r,"Sum of squares of odd elements: ",t),t}for(let e=0;e<10;e++)randomNumber=Math.floor(101*Math.random()),-1==arr.indexOf(randomNumber)&&arr.push(randomNumber);console.log("Initial array: ",arr),bubbleSort(arr,asc),bubbleSort(arr,desc),sum(arr);const container=document.getElementById("container");let numbers=[];!function(){for(let e=1;e<=100;e++)e%15?e%3?e%5?numbers.push(" "+e.toString()):numbers.push(" Buzz"):numbers.push(" Fizz"):numbers.push(" FizzBuzz")}(),container.innerHTML=numbers;let word=window.prompt("Введите слово:");word.toLowerCase().trim()==word.toLowerCase().trim().split("").reverse().join("")?alert(word+" палиндром!"):alert(word+" не палиндром!");const btn=document.getElementById("btn");let count=0,secretNumber=Math.floor(1001*Math.random(1e3));function startGame(){count++,console.log(`Это уже ${count} попытка`);var e=Number(window.prompt("Введите число:"));Number.isInteger(e)?e<secretNumber?alert("Искомое число больше!"):e>secretNumber?alert("Искомое число меньше!"):e==secretNumber&&window.confirm(`Вы угадали! Количество попыток: ${count}. Начать заново?`)&&(secretNumber=Math.floor(1001*Math.random(1e3)),console.log(secretNumber),count=0):alert("Вы ввели не число")}console.log(secretNumber),btn.addEventListener("click",startGame);