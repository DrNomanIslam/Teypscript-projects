import inquirer from "inquirer";

class Customer {
    first_name:string = "";
    last_name:string = "";
    gender:string = "";
    age:number = 18;
    mobile:string = "";
    account:IBankAccount;

    constructor(fn:string,ln:string,a:IBankAccount) {
        this.first_name=fn;
        this.last_name=ln;
        this.account=a;
    }
}

interface IBankAccount {
    balance: number;
    debit(amount:number):string;
    credit(amount:number): string;
}

class BankAccount implements IBankAccount {

    balance: number;

    constructor(b:number) {
        this.balance = b;
    }

    debit(amount:number) {
        if(amount<0) {
            return "You can't debit a negative/zero amount";
        }
        if(this.balance>amount) {
            this.balance-=amount;
            return "Transaction successfully done. Your new balance is " + this.balance;
        }else{
            return "Sorry you have insufficient balance to do any transaction";
        }
    }

    credit(amount:number):string {
        if(amount>0) {
            this.balance +=amount;
            if(amount>100) {                
                this.balance--;
            }

            return "Transaction successful. You current balance is " + this.balance;
        }else{
            return "You can't credit a negative/zero amount";
        }
    }
}

let a: IBankAccount  = new BankAccount(1000);
let c:Customer = new Customer("Noman","Islam", a);
let choice:number;
console.log("Welcome " + c.first_name);
do {
    console.log("What do you want to do: ");
    console.log("1. Debit");
    console.log("2. Credit");
    console.log("3. Exit");
    choice = await input("number", "Your option: ");

    

    if(choice==1) {
        let amount:number = await input("number","Enter amount : ");
        console.log(a.debit(amount));
    }else if(choice==2) {
        let amount:number = await input("number","Enter amount : ");
        console.log(a.credit(amount));
    }else if(choice!=3) {
        console.log("Please specify the right option");
    }
}while(choice!=3);

console.log("Good bye");

async function input(type:any, msg:string) {
    let answer = await inquirer.prompt([{
        name: "input",
        type: type,
        message: msg
    }
    ]);
    return answer.input;
}
