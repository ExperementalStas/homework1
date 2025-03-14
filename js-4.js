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
