// Задание 1
console.log("js".toUpperCase());

// Задание 2
function filterStringsStartingWith(arr, str) {
  const lowerStr = str.toLowerCase();
  return arr.filter(item => 
    item.toLowerCase().startsWith(lowerStr)
  );
}

const fruits = ['Apple', 'Banana', 'apricot', 'orange', 'Avocado'];
console.log(filterStringsStartingWith(fruits, 'ap')); 

// Задание 3
const number = 32.58884;
const floorNumber = Math.floor(number);
console.log('До меньшего целого:', floorNumber); 

const ceilNumber = Math.ceil(number);
console.log('До большего целого:', ceilNumber);

const roundNumber = Math.round(number);
console.log('До ближайшего целого:', roundNumber);

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers);
console.log('Минимальное значение:', minNumber); 

const maxNumber = Math.max(...numbers);
console.log('Максимальное значение:', maxNumber); 

// Задание 5
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}
getRandomNumber();

// Задание 6
function generateRandomArray(num) {
  if (!Number.isInteger(num) || num <= 0) {
    console.error('Пожалуйста, введите целое положительное число');
    return [];
  }
  const length = Math.floor(num / 2);
  const result = Array.from({ length }, () => Math.floor(Math.random() * (num + 1)));
  return result;
}
console.log(generateRandomArray(10)); 
console.log(generateRandomArray(7));  
console.log(generateRandomArray(3));  

// Задание 7
function getRandomInRange(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return randomNumber;
}

console.log(getRandomInRange(1, 10));  
console.log(getRandomInRange(5, -3));  
console.log(getRandomInRange(10, 10));

// Задание 8
console.log(new Date().toString());

// Задание 9
const currentDate = new Date();
console.log(
  "Через 73 дня:",
  new Date(
    currentDate.getTime() + 73 * 24 * 60 * 60 * 1000
  ).toLocaleDateString()
);

// Задание 10
function formatDateToRussian(date) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = days[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `Дата: ${dayOfMonth} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const currentDatex = new Date();
console.log(formatDateToRussian(currentDate));