function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  let num1, num2, correctAnswer;

  if (operation === "+") {
    num1 = getRandomNumber(1, 20);
    num2 = getRandomNumber(1, 20);
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    num1 = getRandomNumber(1, 20);
    num2 = getRandomNumber(1, num1); 
    correctAnswer = num1 - num2;
  } else if (operation === "*") {
    num1 = getRandomNumber(1, 10);
    num2 = getRandomNumber(1, 10);
    correctAnswer = num1 * num2;
  } else if (operation === "/") {
    num2 = getRandomNumber(1, 10);
    correctAnswer = getRandomNumber(1, 10);
    num1 = num2 * correctAnswer; 
  }

  const taskText = `${num1} ${operation} ${num2}`;
  return { taskText, correctAnswer };
}

function startGameWithPrompt() {
  const { taskText, correctAnswer } = generateTask();
  const userAnswer = parseFloat(prompt(`Решите задачу: ${taskText} = ?`));

  if (userAnswer === null) {
    alert("Игра завершена.");
    return;
  }

  if (isNaN(userAnswer)) {
    alert("Пожалуйста, введите число.");
  } else if (userAnswer === correctAnswer) {
    alert("Правильно!");
  } else {
    alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
  }

  const playAgain = confirm("Хотите сыграть еще раз?");
  if (playAgain) {
    startGameWithPrompt();
  } else {
    alert("Спасибо за игру!");
  }
}

document.getElementById("startGame2").addEventListener("click", () => {
  startGameWithPrompt();
});
