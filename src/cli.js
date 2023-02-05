import readlineSync from 'readline-sync';

// Wait for user's response.
const getUserName = () => {
console.log("Welcome to the Brain Games!");
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
return userName;
}
export {getUserName};