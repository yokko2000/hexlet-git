#!/usr/bin/env node
 //начало
//импорт нужных функций
import readlineSync from 'readline-sync';
//функция генерирующая случайное число от 0 до 100
const getRandomInt = () => {
    return Number(Math.floor(Math.random() * 101));
}
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//здесь идет основная логика игры
console.log('What number is missing in the progression?');
let point = 0;
//цикл на 3 раунда игры
for (let i = 0; i < 3; i++) {
    //генерируем длину прогрессии в промежутке от 5 до 10
    var lenghtOfProgression = Math.floor(Math.random() * (11 - 5) + 5);
    var progression = [];
    //генерируем шаг прогрессии
    var stepOfProgression = getRandomInt();
    //генерируем начальную точку прогрессии
    var startPointOfProgression = getRandomInt();
    //цикл генерирующий прогрессию
    for (let i = 0; i < lenghtOfProgression; i += 1) {
        progression.push(startPointOfProgression);
        startPointOfProgression += stepOfProgression;
    }
    //делаем замену на точки для случайного элемента прогрессии
    var skippedNumber = Math.floor(Math.random() * lenghtOfProgression);
    var correctQuestion = progression[skippedNumber];
    progression[skippedNumber] = '...';
    //здесь вывод вопроса и ввод ответа
    console.log('Question: ' + progression.join(" "));
    var answer = readlineSync.question('Your answer: ');
    //условие на проверку правильности ответа
    if (answer == correctQuestion) {
        console.log('Correct!');
        point += 1;
    } else {
        console.log(answer + ' is wrong answer ;(. Correct answer was ' + correctQuestion + '.');
        console.log('Let\'\s try again, ' + userName)
        break;
    }
}
//конец цикла
//проверка что отвечено на 3 вопроса правильно и вывод поздравления
if (point == 3) {
    console.log('Congratulations, ' + userName + '!')
}
//конец