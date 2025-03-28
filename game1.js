let randomNumber = Math.floor(Math.random() * 100) + 1;
function startGame() {
  let isGameOver = false;
  while (!isGameOver) {
    const userGuess = prompt("Угадайте число от 1 до 100:");
    if (userGuess === null) {
      alert("Игра завершена.");
      break;
    }
    const guess = parseInt(userGuess);
    if (isNaN(guess)) {
      alert("Пожалуйста, введите число!");
      continue;
    }
    if (guess === randomNumber) {
      alert("Поздравляем! Вы угадали число!");
      isGameOver = true;
    } else if (guess < randomNumber) {
      alert("Загаданное число больше. Попробуйте еще раз!");
    } else {
      alert("Загаданное число меньше. Попробуйте еще раз!");
    }
  }
}
const startGameButton = document.getElementById("startGame1");
startGameButton.addEventListener("click", function () {
  startGame();
});
