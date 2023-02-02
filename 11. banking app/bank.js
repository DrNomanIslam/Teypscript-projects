import inquirer from "inquirer";
class Customer {
    constructor(fn, ln, a) {
        this.first_name = "";
        this.last_name = "";
        this.gender = "";
        this.age = 18;
        this.mobile = "";
        this.first_name = fn;
        this.last_name = ln;
        this.account = a;
    }
}
class BankAccount {
    constructor(b) {
        this.balance = b;
    }
    debit(amount) {
        if (amount < 0) {
            return "You can't debit a negative/zero amount";
        }
        if (this.balance > amount) {
            this.balance -= amount;
            return "Transaction successfully done. Your new balance is " + this.balance;
        }
        else {
            return "Sorry you have insufficient balance to do any transaction";
        }
    }
    credit(amount) {
        if (amount > 0) {
            this.balance += amount;
            if (amount > 100) {
                this.balance--;
            }
            return "Transaction successful. You current balance is " + this.balance;
        }
        else {
            return "You can't credit a negative/zero amount";
        }
    }
}
let a = new BankAccount(1000);
let c = new Customer("Noman", "Islam", a);
let choice;
console.log("Welcome " + c.first_name);
do {
    console.log("What do you want to do: ");
    console.log("1. Debit");
    console.log("2. Credit");
    console.log("3. Exit");
    choice = await input("number", "Your option: ");
    if (choice == 1) {
        let amount = await input("number", "Enter amount : ");
        console.log(a.debit(amount));
    }
    else if (choice == 2) {
        let amount = await input("number", "Enter amount : ");
        console.log(a.credit(amount));
    }
    else if (choice != 3) {
        console.log("Please specify the right option");
    }
} while (choice != 3);
console.log("Good bye");
async function input(type, msg) {
    let answer = await inquirer.prompt([{
            name: "input",
            type: type,
            message: msg
        }
    ]);
    return answer.input;
}
