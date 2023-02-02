import inquirer from "inquirer";


let count:number = await input("number","Enter the number of seconds for timer: ");
console.log("\n\nStarting timer\n\n");
let d = new Date();
console.log(d.getHours()+":" + d.getMinutes() + ":" + d.getSeconds());
count--;
if(count>=0) {
    let t = setInterval(
        ()=> {
            count--;
            let d = new Date();
            console.log(d.getHours()+":" + d.getMinutes() + ":" + d.getSeconds());
            if(count==0) {
                clearInterval(t);
            }
        },1000
    );
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