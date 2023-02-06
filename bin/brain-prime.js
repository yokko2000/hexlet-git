#!/usr/bin/env node
 //начало
//импорт нужных функций
import readlineSync from 'readline-sync';
//функция генерирующая случайное число от 0 до 100
const getRandomInt = () => {
    return Number(Math.floor(Math.random() * 101));
}
//функция проверяет простое ли число
function isPrime(num) {
    for (var i = 2; i < num; i++)
  if (num % i === 0) return 'no';
return 'yes';
      }
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//здесь идет основная логика игры
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let point = 0;
//цикл на 3 раунда игры
for (let i = 0; i < 3; i++) {
    //генерируем случайное число
    var question = getRandomInt();
     //генерируем правильный ответ
    var correctQuestion = isPrime(question);
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