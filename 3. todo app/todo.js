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
var _Task__Id, _Task__detail;
import inquirer from "inquirer";
console.log("Welcome to ToDo application");
class Task {
    constructor() {
        _Task__Id.set(this, "");
        _Task__detail.set(this, "");
    }
    get Id() {
        return __classPrivateFieldGet(this, _Task__Id, "f");
    }
    set Id(id) {
        __classPrivateFieldSet(this, _Task__Id, id, "f");
    }
    get detail() {
        return __classPrivateFieldGet(this, _Task__detail, "f");
    }
    set detail(d) {
        __classPrivateFieldSet(this, _Task__detail, d, "f");
    }
}
_Task__Id = new WeakMap(), _Task__detail = new WeakMap();
let tasks = [];
let t = new Task();
t.Id = "1";
t.detail = "Eat";
tasks.push(t);
t = new Task();
t.Id = "2";
t.detail = "Sleep";
tasks.push(t);
while (true) {
    menu();
    let option = await input("number", "Please choose an option:");
    if (option == 1) {
        let t = new Task();
        t.Id = await input("string", "ID: ");
        t.detail = await input("string", "Detail:");
        const index = tasks.findIndex((tk) => {
            return tk.Id === t.Id;
        });
        if (index != -1) {
            console.log("An item with this Id alread exists ...");
            continue;
        }
        else {
            tasks.push(t);
            console.log("Task has been added ...");
        }
    }
    else if (option == 2) {
        let id = await input("string", "ID:");
        const index = tasks.findIndex((t) => {
            return t.Id === id;
        });
        if (index != -1) {
            tasks.splice(index, 1);
        }
    }
    else if (option == 3) {
        let t = new Task();
        t.Id = await input("string", "ID: ");
        t.detail = await input("string", "Detail:");
        const index = tasks.findIndex((tk) => {
            return tk.Id === t.Id;
        });
        if (index == -1) {
            console.log("There is no item with this Id");
        }
        else {
            tasks.splice(index, 1, t);
        }
    }
    else if (option == 4) {
        console.log("Tasks List");
        tasks.map(function (t) {
            console.log(t.Id + " " + t.detail);
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
    console.log("1. Add a task");
    console.log("2. Delete a task");
    console.log("3. Edit a task");
    console.log("4. Show all tasks");
    console.log("5. Exit");
}
