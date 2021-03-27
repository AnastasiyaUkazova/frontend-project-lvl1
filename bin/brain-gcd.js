#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let value = true;
let time = 0;
const functionRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gcd = (min, max) => {
  let correctAnswer = max;
  if (min === 0) {
    correctAnswer = max;
  } else {
    for (let i = 1; i <= min; i += 1) {
      if (min % i === 0 && max % i === 0) {
        correctAnswer = i;
      }
    }
  }
  return correctAnswer;
};

while (value) {
  const randomNumber1 = functionRandom(0, 50);
  const randomNumber2 = functionRandom(0, 50);
  const maxNumber = Math.max(randomNumber1, randomNumber2);
  const minNumber = Math.min(randomNumber1, randomNumber2);
  console.log('Question:', minNumber, maxNumber);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === gcd(minNumber, maxNumber)) {
    console.log('Correct!');
    value = true;
    time += 1;
    if (time === 3) {
      console.log(`Congradulation, ${name}!`);
      value = false;
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gcd(minNumber, maxNumber)}"`);
    console.log(`Let's try again, ${name}!`);
    value = false;
  }
}
