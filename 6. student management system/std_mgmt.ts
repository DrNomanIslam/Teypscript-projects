import inquirer from "inquirer";

console.log("Welcome to Student Management System");
class Student {
    #_Id: string = "";
    #_name:string = "";

    get Id():string {
        return this.#_Id;
    }

    set Id(id:string) {
        this.#_Id = id;
    }

    get name():string {
        return this.#_name;
    }

    set name(d:string) {
        this.#_name = d;
    }

}
let students:Student[] = [];

let t:Student = new Student();
t.Id="1";
t.name="Noman";
students.push(t);

t = new Student();
t.Id="2";
t.name="Ali";
students.push(t);


while(true) {
    menu();
    let option:number = await input("number","Please choose an option:");
    if(option == 1) {
        let t:Student= new Student();
        t.Id = await input("string", "ID: ");
        t.name = await input("string", "Name:");
        const index = students.findIndex((tk) => {
            return tk.Id === t.Id;
          });

        if(index !=-1) {
            console.log("A student with this Id alread exists ...");
            continue;
        }else{
            students.push(t);
            console.log("Student has been added ...");
        }
    }

    else if(option == 2) {
        let id = await input("string","ID:");
        const index = students.findIndex((t) => {
            return t.Id === id;
          });

        if(index !=-1) {
            students.splice(index,1)
        }
    }

    else if(option == 3) {

        let t:Student = new Student();
        t.Id = await input("string", "ID: ");
        t.name = await input("string", "Name:");
        const index = students.findIndex((tk) => {
            return tk.Id === t.Id;
          });

        if(index==-1) {
            console.log("There is no student with this Id");
        }else{
            students.splice(index,1,t);
        }

    }

    else if(option == 4) {
        console.log("Students List");
        students.map(function(t) {
            console.log(t.Id + " " + t.name);
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
    console.log("1. Add a Student");
    console.log("2. Delete a Student");
    console.log("3. Edit a Student");
    console.log("4. Show all students");
    console.log("5. Exit");
}