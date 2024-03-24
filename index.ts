#! /usr/bin/env node

import inquirer from "inquirer";

// Computer will generate a random numbr- Done

// user input for guessing number - Done

// compare user input with computer generated nnumber and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game");
const answers = await inquirer.prompt([
  {
    name: "userguessnumber",
    type: "number",
    message: "Please guess a number between 1-6:",
  },
]);

if (answers.userguessnumber == randomNumber) {
  console.log("Congratulations you guess right number.");
} else {
  console.log("you guess wrong number");
}
