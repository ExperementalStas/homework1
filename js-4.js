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