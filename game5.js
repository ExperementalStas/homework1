document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startGame5");

  if (startButton) {
    startButton.addEventListener("click", function () {
      const options = ["камень", "ножницы", "бумага"];

      let userChoice = prompt("Выберите: камень, ножницы или бумага", "");
      if (userChoice === null) return;

      userChoice = userChoice.trim().toLowerCase();
      while (!options.includes(userChoice)) {
        userChoice = prompt(
          "Пожалуйста, введите одно из следующих значений: камень, ножницы, бумага",
          ""
        );
        if (userChoice === null) return;
        userChoice = userChoice.trim().toLowerCase();
      }
      const computerChoice =
        options[Math.floor(Math.random() * options.length)];

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

      alert(
        `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`
      );
    });
  } else {
    console.error('Кнопка с id "startGame5" не найдена');
  }
});
