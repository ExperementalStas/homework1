// Задание 1

let password = "444";
let userInput = prompt("Введите пароль");
if (userInput === password) {
  alert("Пароль введен верно");
} else {
 alert("Пароль введен неправильно");
}

//Задание 2

let x = 7; 

if (x > 0 && x < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
// Задание 3

let d = 120; 
let e = 80;  
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 4
let a = "2";
let b = "3";

alert(+a + +b);

//Задание 5

let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
  console.log("Некорректный номер месяца. Введите число от 1 до 12.");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
    default:
      console.log("Некорректный номер месяца.");
  }
}

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