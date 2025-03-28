// Задание 1
function findMin(a, b) {
  if (a === b) {
    return a;
  }
  return a < b ? a : b;
}
console.log(findMin(8, 4)); 
console.log(findMin(6, 6)); 

// Задание 2
function checkEvenOrOdd(n) {
  if (n % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}
console.log(checkEvenOrOdd(1)); 
console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(3)); 

// Задание 3
function printSquare(n) {
  const square = n * n;
  console.log(`Квадрат числа ${n} равен ${square}`); 
}
function getSquare(n) {
  return n * n; 
}
printSquare(10); 
printSquare(20); 

const squareOfFour = getSquare(4); 
console.log(squareOfFour);

// Задание 4
function checkAge() {
  const age = prompt("Сколько вам лет?");
  const ageNumber = parseInt(age);
  if (isNaN(ageNumber) || ageNumber < 0) {
    alert("Вы ввели неправильное значение");
  } else if (ageNumber >= 0 && ageNumber <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
checkAge();

// Задание 5
function multiplyNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return a * b;
  }
}
console.log(multiplyNumbers(5, 10)); 
console.log(multiplyNumbers(3, 'abc')); 
console.log(multiplyNumbers(null, 5)); 
console.log(multiplyNumbers(7, true)); 

// Задание 6
function cubeNumber() {
  const input = prompt("Введите число:");
  const number = parseFloat(input);
  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  } else {
    const cube = number ** 3; 
    return `${number} в кубе равняется ${cube}`;
  }
}
console.log(cubeNumber()); 

// Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 10, 
  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle1.getArea()); 
console.log(circle1.getPerimeter()); 

console.log(circle2.getArea()); 
console.log(circle2.getPerimeter()); 