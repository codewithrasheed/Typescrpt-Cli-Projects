#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuessedNumber",
        message: "Let's Guess a number."
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed the correct number.");
}
else {
    console.log(`Sorry! The correct number was ${randomNumber}.`);
}
