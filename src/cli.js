import readlineSync from 'readline-sync';

// Wait for user's response.
const userName = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}
export {userName};