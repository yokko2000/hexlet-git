#!/usr/bin/env node
 //начало
//импорт нужных функций
import readlineSync from 'readline-sync';
//функция генерирующая случайное число
const getRandomInt = () => {
    return Number(Math.floor(Math.random() * 101));
}
//функция генерирующая случайный знак операции
const getRandomOperation = () => {
    const array = ['+', '-', '*'];
    return array[Math.floor(Math.random() * 2)];
}
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//здесь идет основная логика игры
console.log('What is the result of the expression?');
let count = 0;
for (let i = 0; i < 3; i++) {
    var question = getRandomInt() + getRandomOperation() + getRandomInt();
    var correctQuestion = eval(question);
    console.log('Question: ' + question);
    var answer = readlineSync.question('Your answer: ');
    if (answer == correctQuestion) {
        console.log('Correct!');
        count += 1;
    } else {
        console.log(answer + ' is wrong answer ;(. Correct answer was ' + correctQuestion + '.');
        console.log('Let\'\s try again, ' + userName)
        break;
    }
}
if (count == 3) {
    console.log('Congratulations, ' + userName + '!')
}
//конец