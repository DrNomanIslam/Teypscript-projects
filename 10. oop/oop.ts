import inquirer from "inquirer";
class Person {
    #_personality: string = "";

    get personality():string {
        return this.#_personality;
    }

    set personality(s:string) {
        this.#_personality = s;
    }
    

    constructor() {
        this.personality="Unknown";
    }

    askQuestion(answer : number) {
        if(answer == 1) {
            this.personality="Introvert";
        }else if(answer==2){
            this.personality="Extrovert";
        }else{
            this.personality="Unknown"
        }
    }
}

class Student extends Person{    
    #_name:string = "";

    
    get name():string {
        return this.#_name;
    }

    set name(d:string) {
        this.#_name = d;
    }

}


let p:Person = new Person();
let option:number = await input("number","Please specify If you talk only to \n1. yourself or \n2. others. \nSpecify (1/2) ");
p.askQuestion(option);
console.log("Your personality is " + p.personality);

let std:Student = new Student();
let name:string = await input("string","What is your name? :")
std.name = name;
console.log("Your name is " + std.name + " and your personality type is " + std.personality);



async function input(type:any, msg:string) {
    let answer = await inquirer.prompt([{
        name: "input",
        type: type,
        message: msg
    }
    ]);
    return answer.input;
}
