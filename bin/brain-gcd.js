#!/usr/bin/env node
//начало
//импорт нужных функций
import readlineSync from 'readline-sync';
//функция генерирующая случайное число
const getRandomInt = () => {
    return Number(Math.floor(Math.random() * 101));
}
//функция поиска НОД
function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//здесь идет основная логика игры
console.log('Find the greatest common divisor of given numbers.');
let point = 0;
//цикл на 3 раунда игры
for (let i = 0; i < 3; i++) {
    //здесь генерируем вопрос пользователю
    var numberOne = getRandomInt();
    var numberTwo = getRandomInt()
    var question = numberOne + ' ' + numberTwo;
    //здесь генерируем правильный ответ
    var correctQuestion = gcd_rec(numberOne, numberTwo);
    //здесь вывод вопроса и ввод ответа
    console.log('Question: ' + question);
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