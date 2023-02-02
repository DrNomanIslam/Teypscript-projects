import inquirer from "inquirer";
let counts : Map<string,number> = new Map<string,number>();

let answer = await inquirer.prompt([{
    name: "input",
    type: "string",
    message: "Enter the paragraph: "
}
]);
let paragraph:string =  answer.input;

let words = paragraph.split(" ");
words.forEach(
    function process(word,index,array) {
        let c = counts.get(word);
        if(c) {
            counts.set(word, c + 1);
        }else{
            counts.set(word, 1);
        }
    }
);

console.log(counts);