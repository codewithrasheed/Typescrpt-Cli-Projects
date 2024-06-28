#! /usr/bin/env node
import inquirer from "inquirer";
let Tasks = [];
let condition = true;
while (condition) {
    let addTodo = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter a task: "
        },
        {
            name: "action",
            type: "confirm",
            message: "Do you want to add more tasks: ",
            default: false
        },
    ]);
    Tasks.push(addTodo.task);
    condition = addTodo.action;
    console.log(Tasks);
}
