import inquirer from "inquirer";

console.log("Welcome to ToDo application");
class Task {
    #_Id: string = "";
    #_detail:string = "";

    get Id():string {
        return this.#_Id;
    }

    set Id(id:string) {
        this.#_Id = id;
    }

    get detail():string {
        return this.#_detail;
    }

    set detail(d:string) {
        this.#_detail = d;
    }

}
let tasks:Task[] = [];

let t:Task = new Task();
t.Id="1";
t.detail="Eat";
tasks.push(t);

t = new Task();
t.Id="2";
t.detail="Sleep";
tasks.push(t);


while(true) {
    menu();
    let option:number = await input("number","Please choose an option:");
    if(option == 1) {
        let t:Task= new Task();
        t.Id = await input("string", "ID: ");
        t.detail = await input("string", "Detail:");
        const index = tasks.findIndex((tk) => {
            return tk.Id === t.Id;
          });

        if(index !=-1) {
            console.log("An item with this Id alread exists ...");
            continue;
        }else{
            tasks.push(t);
            console.log("Task has been added ...");
        }
    }

    else if(option == 2) {
        let id = await input("string","ID:");
        const index = tasks.findIndex((t) => {
            return t.Id === id;
          });

        if(index !=-1) {
            tasks.splice(index,1)
        }
    }

    else if(option == 3) {

        let t:Task= new Task();
        t.Id = await input("string", "ID: ");
        t.detail = await input("string", "Detail:");
        const index = tasks.findIndex((tk) => {
            return tk.Id === t.Id;
          });

        if(index==-1) {
            console.log("There is no item with this Id");
        }else{
            tasks.splice(index,1,t);
        }

    }

    else if(option == 4) {
        console.log("Tasks List");
        tasks.map(function(t) {
            console.log(t.Id + " " + t.detail);
        });
    }else  {
        console.log("Good bye");
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
    console.log("1. Add a task");
    console.log("2. Delete a task");
    console.log("3. Edit a task");
    console.log("4. Show all tasks");
    console.log("5. Exit");
}