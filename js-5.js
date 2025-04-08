// Задание 1
const array1 = [1, 5, 4, 10, 0, 3];
let i = 0;

while (i < array1.length) {
  console.log(array1[i]); 
  if (array1[i] === 10) {
    break;
  }
  i++;
}

// Задание 2
const array2 = [1, 5, 4, 10, 0, 3];
let index = -1; 

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 4) {
    index = i; 
    break; 
  }
}
console.log(index);

// Задание 3
const array3 = [1, 3, 5, 10, 20];
const result = array3.join(' ');
console.log(result);

// Задание 4                          ............
const matrix = [];
const rows = 3;
const cols = 3;

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(1); 
  }
  matrix.push(row);
}

console.log(matrix);

// Задание 5
const array4 = [1, 1, 1];
array4.push(2, 2, 2);
console.log(array4);


// Задание 6
const array5 = [9, 8, 7, 'a', 6, 5];
const numericArray = array5.filter(item => typeof item === 'number');
numericArray.sort((a, b) => a - b);
console.log(numericArray);

// Задание 7
const array6 = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число из массива [9, 8, 7, 6, 5]:");
const userNumber = Number(userInput);
if (array6.includes(userNumber)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// Задание 8
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

// Задание 9
const array7 = [[1, 2, 3], [4, 5, 6]];
const flatArray = [].concat(...array7);
console.log(flatArray);

// Задание 10
const array8 = [3, 7, 2, 9, 5];

for (let i = 0; i < array8.length - 1; i++) {
    const sum = array8[i] + array8[i + 1];
    
  console.log(`Сумма элементов ${array8[i]} и ${array8[i + 1]}: ${sum}`);
}

// Задание 11
function getSquaredArray(arr) {
  return arr.map(num => num * num);
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = getSquaredArray(numbers);

console.log(squaredNumbers);

// Задание 12
function getWordLengths(arr) {
  return arr.map((word) => word.length);
}
const words = ["apple", "banana", "cherry", "date"];
const lengths = getWordLengths(words);

console.log(lengths);

// Задание 13
function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}
const numbers1 = [3, -1, -4, 2, 0, -7, 10];
const negativeNumbers = getNegativeNumbers(numbers1);

console.log(negativeNumbers);

// Задание 14
function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomValue);
  }
  return array;
}
const randomArray = generateRandomArray(10, 0, 10);
const evenNumbers = randomArray.filter((num) => num % 2 === 0);

console.log("Исходный массив:", randomArray);
console.log("Массив с четными числами:", evenNumbers);

// Задание 15
function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomValue);
  }
  return array;
}

const randomArray1 = generateRandomArray(6, 1, 10);

const sum = randomArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

const average = sum / randomArray.length;

console.log("Исходный массив:", randomArray);
console.log("Среднее арифметическое:", average);