//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let iphone = 2007;
alert(iphone);

//Задание 3
let creatjs = "Brendan Eich";
alert(creatjs);

//Задание 4
let a1 = 10;
let b1 = 2;
alert(a1 + b1);
alert(a1 - b1);
alert(a1 * b1);
alert(a1 / b1);

//Задание 5
let result = 2 ** 5;
alert(result);

//Задание 6
let a2 = 9;
let b2 = 2;
alert(a2 % b2);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
const user = {
  name: "Stan",
  age: "35",
  isAdmin: "true",
};
alert(user.name);
alert(user.age);
alert(user.isAdmin);

//Задание 10
let name1 = prompt("Как вас зовут?");
alert(`Привет, ${name1}!`);

//Доп Дз

let number = prompt("Загадайте любое число:");
number = Number(number);
let doubledNumber = number * 2;
alert(`Удвоенное число: ${doubledNumber}`);
let plusTen = doubledNumber + 10;
alert(`Удвоенное число + 10: ${plusTen}`);
let dividedByTwo = plusTen / 2;
alert(`Результат деления на 2: ${dividedByTwo}`);
let finalResult = dividedByTwo - number;
alert(`Результат после вычитания: ${finalResult}`);
alert("Ответ равен 5!");
