import readlineSync from 'readline-sync';
const gameLogic = (nameGame, question, correctQuestion) => {
//спрашиваем как зовут пользователя
var userName = readlineSync.question('May I have your name? ');
//задаем вопрос пользователю 
if (nameGame === 'game-calc') {
   console.log('What is the result of the expression?');
}
let count = 0;
//цикл на 3 раунда игры
for (let i = 0; i < 3; i++) {
    
    //здесь генерируем правильный ответ
    
    //здесь вывод вопроса и ввод ответа
    console.log('Question: ' + question);
    var answer = readlineSync.question('Your answer: ');
    //условие на проверку правильности ответа
    if (answer == correctQuestion) {
        console.log('Correct!');
        count += 1;
    } else {
        console.log(answer + ' is wrong answer ;(. Correct answer was ' + correctQuestion + '.');
        console.log('Let\'\s try again, ' + userName)
        break;
    }
}
//конец цикла
//проверка что отвечено на 3 вопроса правильно и вывод поздравления
if (count == 3) {
    console.log('Congratulations, ' + userName + '!')
}
}
export {gameLogic};