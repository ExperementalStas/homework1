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

// Доп Дз 1

let input = prompt("Пожалуйста, введите любое число:");
let number = parseFloat(input);
if (isNaN(number)) {
  alert("Вы ввели не число!");
} else {
  if (number % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
}

// Доп Дз 2 совместно с 3

let clientOS = parseInt(prompt("Введите 0 для iOS или 1 для Android:"));
let clientDeviceYear = prompt("Введите год выпуска телефона:");
let currentYear = new Date().getFullYear();

if (clientDeviceYear < 2015) {
  if (clientOS === 0) {
    alert("Установите облегченную версию приложения для iOS по ссылке");
  } else if (clientOS === 1) {
    alert("Установите облегченную версию приложения для Android по ссылке");
  }
} else {
  if (clientOS === 0) {
    alert("Установите версию приложения для iOS по ссылке");
  } else if (clientOS === 1) {
    alert("Установите версию приложения для Android по ссылке");
  }
}
