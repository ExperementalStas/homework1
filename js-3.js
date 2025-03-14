// Задание 1
console.log("Привет");
console.log("Привет");

// Задание 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Задание 3
for (let r = 7; r <= 22; r++) {
  console.log(r);
}
// Задание 4
let obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);




