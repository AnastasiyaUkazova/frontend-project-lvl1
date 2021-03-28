#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let value = true;
let time = 0;
let correctAnswer;
const mathOperators = ['+', '-', '*'];

const functionRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

while (value) {
  const randomNumber1 = functionRandom(0, 100);
  const randomNumber2 = functionRandom(0, 100);
  const mathOperator = mathOperators[functionRandom(0, mathOperators.length - 1)];
  const mathExpression = `${randomNumber1} ${mathOperator} ${randomNumber2}`;
  switch (mathOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  console.log('Question:', mathExpression);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    value = true;
    time += 1;
    if (time === 3) {
      console.log(`Congratulations, ${name}!`);
      value = false;
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    console.log(`Let's try again, ${name}!`);
    value = false;
  }
}
