#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
while (true) {
    menu();
    let op = await input("string", "Operator (1-5):");
    if (op == "5") {
        console.log(chalk.bgGreen("Good Bye"));
        break;
    }
    let a = await input("number", "First number:");
    let b = await input("number", "Second number:");
    console.log("\n\n");
    if (op == "1") {
        console.log(chalk.green(a, '+', b, '=', a + b));
    }
    else if (op == "2") {
        console.log(chalk.green(a, '-', b, '=', a - b));
    }
    else if (op == "3") {
        console.log(chalk.green(a, '*', b, '=', a * b));
    }
    else if (op == "4") {
        console.log(chalk.green(a, '/', b, '=', a / b));
    }
    else {
        console.log("Wrong input");
    }
    console.log("\n\n");
}
async function input(type, msg) {
    let answer = await inquirer.prompt([{
            name: "input",
            type: type,
            message: msg
        }
    ]);
    return answer.input;
}
function menu() {
    console.log(chalk.bgGreen("Calculator by Dr. Noman Islam"));
    console.log(chalk.white("Choose the option"));
    console.log(chalk.cyan("1. Addition"));
    console.log(chalk.cyan("2. Subtraction"));
    console.log(chalk.cyan("3. Multiplication"));
    console.log(chalk.cyan("4. Division"));
    console.log(chalk.cyan("5. Exit"));
}
