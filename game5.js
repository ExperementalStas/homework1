// Ждем полной загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Получаем кнопку после загрузки страницы
  const startButton = document.getElementById("startGame5");

  // Проверяем, что кнопка существует
  if (startButton) {
    startButton.addEventListener("click", function () {
      // Возможные варианты выбора
      const options = ["камень", "ножницы", "бумага"];

      // Запрос выбора пользователя
      let userChoice = prompt("Выберите: камень, ножницы или бумага", "");

      // Если пользователь нажал "Отмена" - выходим
      if (userChoice === null) return;

      // Приводим к нижнему регистру и обрезаем пробелы
      userChoice = userChoice.trim().toLowerCase();

      // Проверка корректности ввода
      while (!options.includes(userChoice)) {
        userChoice = prompt(
          "Пожалуйста, введите одно из следующих значений: камень, ножницы, бумага",
          ""
        );
        if (userChoice === null) return;
        userChoice = userChoice.trim().toLowerCase();
      }

      // Генерация случайного выбора компьютера
      const computerChoice =
        options[Math.floor(Math.random() * options.length)];

      // Определение победителя
      let result;

      if (userChoice === computerChoice) {
        result = "Ничья!";
      } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
      ) {
        result = "Вы победили!";
      } else {
        result = "Компьютер победил!";
      }

      // Вывод результата
      alert(
        `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`
      );
    });
  } else {
    console.error('Кнопка с id "startGame5" не найдена');
  }
});
