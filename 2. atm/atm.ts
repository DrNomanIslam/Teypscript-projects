import inquirer from "inquirer";

console.log("Welcome to ATM application");
let id: string = await input("string","Enter your User Id: ");
let pin: string = await input("string","Enter your PIN: ")
console.log("\n\n");

let balance: number = 0;

while(true) {
    menu();
    let option:number = await input("number","Please choose an option:");
    if(option == 1) {
        let amount =await input("string","Amount: ");
        if(amount > balance) {
            console.log("You have insufficient balance to withdraw this amount");
        }else{
            balance -= amount;
        }
    }

    if(option == 2) {
        let amount =await input("string","Amount: ");
        balance += amount;
    }

    if(option == 3) {
        console.log("Your balance is " + balance);
    }

    if(option == 4) {
        break;
    }
}

async function input(type:any, msg:string) {
    let answer = await inquirer.prompt([{
        name: "input",
        type: type,
        message: msg
    }
    ]);
    return answer.input;
}

function menu() {
    console.log("1. Withdraw");
    console.log("2. Deposit");
    console.log("3. Balance");
    console.log("4. Exit");
}