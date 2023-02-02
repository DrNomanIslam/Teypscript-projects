import inquirer from "inquirer";

console.log("Welcome to PIAIC Quiz Application");
type choice = "A" | "B" | "C" | "D";
class Question {
    question: string = "";
    choice1:string = "";
    choice2:string = "";
    choice3:string = "";
    choice4:string = "";

    correct: choice; 

    constructor(q:string, c1:string, c2:string, c3: string, c4:string, c:choice) {
        this.question=q;
        this.choice1=c1;
        this.choice2=c2;
        this.choice3=c3;
        this.choice4=c4;
        this.correct = c;
    }
}

let questions:Question[] = [];

let q:Question = new Question("Capital of Pakistan", "Islamabad", "Lahore", "Peshawar","Quetta","A");
questions.push(q);
q = new Question("Capital of India", "Islamabad", "New Delhi", "Mombay","Calcuta","B");
questions.push(q);
q = new Question("Who won 1992 cricket world cup", "Sri lanka", "Pakistan", "India", "England","B");
questions.push(q);
let i:number = 0;

let sahi:number =0;
let ghalat:number =0;

while(questions.length!=0) {

    let l : number = questions.length;
    let r = Math.floor(Math.random()*l)
    q = questions[r];
    questions.splice(r,1);
    showQuestion(q);
    let ans:string = await input("string","Enter the correct answer: ");

    if(ans.toUpperCase() == q.correct) {
        console.log("Correct");
        sahi++;
    }else{
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


async function input(type:any, msg:string) {
    let answer = await inquirer.prompt([{
        name: "input",
        type: type,
        message: msg
    }
    ]);
    return answer.input;
}

function showQuestion(q: Question) {
    console.log("\n\n")
    console.log(q.question);
    console.log("A. "+ q.choice1);
    console.log("B. "+ q.choice2);
    console.log("C. "+ q.choice3);
    console.log("D. "+ q.choice4);
}