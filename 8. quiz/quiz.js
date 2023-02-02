import inquirer from "inquirer";
console.log("Welcome to PIAIC Quiz Application");
class Question {
    constructor(q, c1, c2, c3, c4, c) {
        this.question = "";
        this.choice1 = "";
        this.choice2 = "";
        this.choice3 = "";
        this.choice4 = "";
        this.question = q;
        this.choice1 = c1;
        this.choice2 = c2;
        this.choice3 = c3;
        this.choice4 = c4;
        this.correct = c;
    }
}
let questions = [];
let q = new Question("Capital of Pakistan", "Islamabad", "Lahore", "Peshawar", "Quetta", "A");
questions.push(q);
q = new Question("Capital of India", "Islamabad", "New Delhi", "Mombay", "Calcuta", "B");
questions.push(q);
q = new Question("Who won 1992 cricket world cup", "Sri lanka", "Pakistan", "India", "England", "B");
questions.push(q);
let i = 0;
let sahi = 0;
let ghalat = 0;
while (questions.length != 0) {
    let l = questions.length;
    let r = Math.floor(Math.random() * l);
    q = questions[r];
    questions.splice(r, 1);
    showQuestion(q);
    let ans = await input("string", "Enter the correct answer: ");
    if (ans.toUpperCase() == q.correct) {
        console.log("Correct");
        sahi++;
    }
    else {
        console.log("Incorrect");
        console.log("Correct answer is : ", q.correct);
        ghalat++;
    }
}
console.log("\n\n");
console.log("Results");
console.log("Total questions : " + (sahi + ghalat));
console.log("Correct : " + sahi);
console.log("Incorrect : " + ghalat);
async function input(type, msg) {
    let answer = await inquirer.prompt([{
            name: "input",
            type: type,
            message: msg
        }
    ]);
    return answer.input;
}
function showQuestion(q) {
    console.log("\n\n");
    console.log(q.question);
    console.log("A. " + q.choice1);
    console.log("B. " + q.choice2);
    console.log("C. " + q.choice3);
    console.log("D. " + q.choice4);
}
