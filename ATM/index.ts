#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter You Pin Number"
    },
]);
if(pinAnswer.pin === myPin){
    console.log("Correcty Pin Code!");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select Options",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        },
    ])
    if(operationAnswer.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);

        myBalance -= amountAns.amount;
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
    else if(operationAnswer.operation === "Fast Cash"){
        let fastCashAmount = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Please Select Amount",
                choices: ["500","1000","2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCashAmount.operation;
        console.log(`Your Remaining Balance is: ${myBalance}`)
    }
    else if(operationAnswer.operation === "Check Balance"){
        console.log(`You'r total Balance is: ${myBalance}`)
    }
} else {
    console.log("Incorrect Pin Number!!");
}



