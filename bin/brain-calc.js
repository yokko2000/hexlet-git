#!/usr/bin/env node
//начало
//импорт нужных функций
import readlineSync from 'readline-sync';
import {getUserName} from '../src/cli.js';
import {getRandomInt} from '../bin/brain-even.js';
//функция проверяющая четность числа
const evenNumber = (number) => {
    if (number%2 == 0) {
        return 'even';
    } else if (number%2 == 1) {
        return 'noteven';
    }
}
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//здесь идет основная логика игры
console.log('What is the result of the expression?');
    let count = 0;
    for (let i=0;i<3;i++) {
        var randomNumber = getRandomInt();
      console.log('Question: ' + randomNumber + randomNumber);
      var answer = readlineSync.question('Your answer: ');
      if (evenNumber(randomNumber) === 'even') {
        if (answer === 'yes') {
            console.log ("Correct!");
            count+=1;
        } else if (answer === 'no') {
            console.log ("\'no\' is wrong answer ;(. Correct answer was \'yes\'.");
            console.log ("Let's try again, " + userName)
            break;
        } else {
            console.log ("It is wrong answer ;(. Correct answer was \'yes\'.");
            console.log ("Let's try again, " + userName)
            break;
        }
      }
      if (evenNumber(randomNumber) === 'noteven') {
        if (answer === 'yes') {
            console.log ("\'yes\' is wrong answer ;(. Correct answer was \'no\'.");
            console.log ("Let's try again, " + userName)
            break;
        } else if (answer === 'no') {
            console.log ("Correct!");
            count+=1;
        } else {
            console.log ("Is wrong answer ;(. Correct answer was \'no\'.");
            console.log ("Let's try again, " + userName)
            break;
        }
      }
    }
    if (count == 3) {
   console.log('Congratulations, ' + userName + '!') }
   //конец