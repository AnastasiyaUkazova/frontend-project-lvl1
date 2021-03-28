#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let value = true;
let time = 0;
const lengthProgression = 10;
const functionRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

while (value) {
  const firstNumber = functionRandom(0, 50);
  const step = functionRandom(1, 20);
  const arr = [];
  for (let index = 1; index <= lengthProgression; index += 1) {
    const a = firstNumber + ((index - 1) * step);
    arr.push(a);
  }
  const correctIndex = functionRandom(0, 9);
  const correctAnswer = arr[correctIndex];
  arr[correctIndex] = '..';
  console.log('Question:', arr.join(' '));
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === Number(correctAnswer)) {
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
