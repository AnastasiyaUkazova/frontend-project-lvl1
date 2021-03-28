#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is prime. Otherwise answer "no"');
let value = true;
let time = 0;
const functionRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const primeNumber = (num) => {
  let count = 0;
  if (num === 1) return 'no';
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return (count === 2) ? 'yes' : 'no';
};

while (value) {
  const randomNumber = functionRandom(0, 100);
  console.log('Question:', randomNumber);
  const answer = readlineSync.question('Your answer: ');
  if (answer === primeNumber(randomNumber)) {
    value = true;
    time += 1;
    if (time === 3) {
      console.log(`Congradulation, ${name}!`);
      value = false;
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${primeNumber(randomNumber)}"`);
    console.log(`Let's try again, ${name}!`);
    value = false;
  }
}
