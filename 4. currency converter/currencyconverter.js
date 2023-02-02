import inquirer from "inquirer";
while (true) {
    menu();
    let choice;
    let amount;
    choice = await input("number", "Choose an option: ");
    if (choice == 1) {
        amount = await input("number", "Enter USD quantity: ");
        console.log("%f USD in PKR = %f", amount, amount * 230);
    }
    else if (choice == 2) {
        amount = await input("number", "Enter PKR quantity: ");
        console.log("%f PKR in USD = %f", amount, amount / 230);
    }
    else if (choice == 3) {
        amount = await input("number", "Enter GBP quantity: ");
        console.log("%f GBP in PKR = %f", amount, amount * 275);
    }
    else if (choice == 4) {
        amount = await input("number", "Enter PKR quantity: ");
        console.log("%f PKR in GBP = %f", amount, amount / 275);
    }
    else {
        console.log("Good bye");
        break;
    }
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
    console.log("1. USD to PKR");
    console.log("2. PKR to USD");
    console.log("3. GBP to PKR");
    console.log("4. PKR to GBP");
    console.log("5. Exit");
}
