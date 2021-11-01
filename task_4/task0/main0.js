let a = 5;
let b = 100;

console.log(`Initial values: a = ${a}, b = ${b}`);

let c;
c = a;
a = b;
b = c;
console.log(`After the first swap: a = ${a}, b = ${b}`);

console.log(`Now a = ${a}, b = ${b}`);

[a, b] = [b, a];
console.log(`After the second swap: a = ${a}, b = ${b}`);
