import inquirer from "inquirer";
var target = Math.floor(Math.random() * 10);
let num;
let tries = 0;
while (tries < 4) {
    num = await input("number", "Guess a number (1-9): ");
    if (num == target) {
        console.log("\nYou guessed it right");
        break;
    }
    if (num > target) {
        console.log("\nTry lower...\n");
    }
    else {
        console.log("\nTry higher...\n");
    }
    tries++;
}
if (tries >= 4) {
    console.log("\nYou have failed. It's " + target + "...");
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
