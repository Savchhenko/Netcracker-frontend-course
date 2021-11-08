let arr = [];
const asc = true; // сортировка по возрастанию
const desc = false; // сортировка по убыванию

function bubbleSort(arr, descOrAscParam) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        const t = arr[i];
        if(descOrAscParam == true && arr[i] > arr[i + 1]) {
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
        } else if(descOrAscParam == false && arr[i] < arr[i + 1]) {
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
        }
      }
    }
    console.log("Sorted array: ", arr);
    return arr;
  }

function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i%2) {
            sum += arr[i] ** 2;
        }
    }
    console.log(arr, "Sum of squares of odd elements: ", sum); 
    return sum;
}

//заполняем массив десятью случайными числами
for(let i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 101);
    if(arr.indexOf(randomNumber) == -1) {
        arr.push(randomNumber);
    }
}

console.log("Initial array: ", arr);
bubbleSort(arr, asc);
bubbleSort(arr, desc);
sum(arr);
