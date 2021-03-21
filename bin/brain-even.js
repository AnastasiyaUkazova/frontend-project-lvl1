#!/usr/bin/env node
import readlineSync from 'readline-sync';
//import welcome from '../src/cli.js';

console.log('Welcome to the Brain Games!');
//const welcome = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
//  };
//welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let value = true;
let time = 0;
let correctAnswer = '';

while (value) {
    console.log('!!!');
    const functionRandom = () => {
        const min = 0;
        const max = 100;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomNumber = functionRandom ();
    console.log('Question:', randomNumber);
    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no'
    }
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
        value = true;
        time = time + 1;
        if (time === 3) {
            console.log(`Congradulation, ${name}!`);
            value = false;
        }
    } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
        console.log(`Let's try again, ${name}!`);
        value = false;
    }
}
