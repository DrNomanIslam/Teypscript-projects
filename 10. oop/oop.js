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
var _Person__personality, _Student__name;
import inquirer from "inquirer";
class Person {
    get personality() {
        return __classPrivateFieldGet(this, _Person__personality, "f");
    }
    set personality(s) {
        __classPrivateFieldSet(this, _Person__personality, s, "f");
    }
    constructor() {
        _Person__personality.set(this, "");
        this.personality = "Unknown";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Introvert";
        }
        else if (answer == 2) {
            this.personality = "Extrovert";
        }
        else {
            this.personality = "Unknown";
        }
    }
}
_Person__personality = new WeakMap();
class Student extends Person {
    constructor() {
        super(...arguments);
        _Student__name.set(this, "");
    }
    get name() {
        return __classPrivateFieldGet(this, _Student__name, "f");
    }
    set name(d) {
        __classPrivateFieldSet(this, _Student__name, d, "f");
    }
}
_Student__name = new WeakMap();
let p = new Person();
let option = await input("number", "Please specify If you talk only to \n1. yourself or \n2. others. \nSpecify (1/2) ");
p.askQuestion(option);
console.log("Your personality is " + p.personality);
let std = new Student();
let name = await input("string", "What is your name? :");
std.name = name;
console.log("Your name is " + std.name + " and your personality type is " + std.personality);
async function input(type, msg) {
    let answer = await inquirer.prompt([{
            name: "input",
            type: type,
            message: msg
        }
    ]);
    return answer.input;
}
