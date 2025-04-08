const quiz = [
  {
    question: "Какого цвета небо?",
    options: ["1. Красный", "2. Голубой", "3. Зеленый"],
    correctAnswer: 2,
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Три", "3. Семь"],
    correctAnswer: 3,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Пять", "2. Четыре", "3. Шесть"],
    correctAnswer: 1,
  },
];

document.getElementById("startGame4").addEventListener("click", function () {
  let correctAnswersCount = 0;

  quiz.forEach((quizItem, index) => {
    const optionsString = quizItem.options.join("\n");

    const userAnswer = parseInt(
      prompt(
        `Вопрос ${index + 1}: ${
          quizItem.question
        }\n\n${optionsString}\n\nВведите номер правильного ответа:`
      )
    );

    if (userAnswer === quizItem.correctAnswer) {
      correctAnswersCount++;
    }
  });

  alert(
    `Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`
  );
});
