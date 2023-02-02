var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Student__Id, _Student__name;
import inquirer from "inquirer";
console.log("Welcome to Student Management System");
class Student {
    constructor() {
        _Student__Id.set(this, "");
        _Student__name.set(this, "");
    }
    get Id() {
        return __classPrivateFieldGet(this, _Student__Id, "f");
    }
    set Id(id) {
        __classPrivateFieldSet(this, _Student__Id, id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Student__name, "f");
    }
    set name(d) {
        __classPrivateFieldSet(this, _Student__name, d, "f");
    }
}
_Student__Id = new WeakMap(), _Student__name = new WeakMap();
let students = [];
let t = new Student();
t.Id = "1";
t.name = "Noman";
students.push(t);
t = new Student();
t.Id = "2";
t.name = "Ali";
students.push(t);
while (true) {
    menu();
    let option = await input("number", "Please choose an option:");
    if (option == 1) {
        let t = new Student();
        t.Id = await input("string", "ID: ");
        t.name = await input("string", "Name:");
        const index = students.findIndex((tk) => {
            return tk.Id === t.Id;
        });
        if (index != -1) {
            console.log("A student with this Id alread exists ...");
            continue;
        }
        else {
            students.push(t);
            console.log("Student has been added ...");
        }
    }
    else if (option == 2) {
        let id = await input("string", "ID:");
        const index = students.findIndex((t) => {
            return t.Id === id;
        });
        if (index != -1) {
            students.splice(index, 1);
        }
    }
    else if (option == 3) {
        let t = new Student();
        t.Id = await input("string", "ID: ");
        t.name = await input("string", "Name:");
        const index = students.findIndex((tk) => {
            return tk.Id === t.Id;
        });
        if (index == -1) {
            console.log("There is no student with this Id");
        }
        else {
            students.splice(index, 1, t);
        }
    }
    else if (option == 4) {
        console.log("Students List");
        students.map(function (t) {
            console.log(t.Id + " " + t.name);
        });
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
    console.log("1. Add a Student");
    console.log("2. Delete a Student");
    console.log("3. Edit a Student");
    console.log("4. Show all students");
    console.log("5. Exit");
}
