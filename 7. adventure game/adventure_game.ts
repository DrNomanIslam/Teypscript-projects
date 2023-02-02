
import inquirer from "inquirer";

let enemies:string[] = ["A", "B", "C"];

let maxEnemyHealth = 50;
let enemyDamage = 5;

let myHealth = 50;
let attackDamage = 50;

let potions = 3;
let potionsMeal = 50;
let dropChance = 0.5;

console.log("Welcome to PIAIC Dungeon game");

while(true) {
    console.log("-----------------------------------------------------");
    let enemyHealth = Math.ceil(Math.random() * maxEnemyHealth);
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log("#Enemy " + enemy + " has appeared");
    while(enemyHealth> 0) {
        console.log("Your health : "+ myHealth + " HP");
        console.log("Enemy health : " + enemyHealth);
        console.log("What would you like to do: ");
        console.log("1. Attack");
        console.log("2. Drink health potion");
        console.log("3. Run");
        let option = await input("string", "Your option: ");
        if(option == "1") {
            let damageOcurred = Math.ceil(Math.random() * enemyDamage);
            let damageDid = Math.ceil(Math.random() * attackDamage);
            console.log("#Your damamge : " + damageOcurred + " HP");
            console.log("#Damage of " + enemy+ " done : " + damageDid + "HP");

            
            myHealth -= damageOcurred;
            enemyHealth -= damageDid;

            if(myHealth < 1) {
                console.log("> Your health is not good. Your game is over.");
                break;
            }


        }else if(option == "2") {
            if(potions > 0) {
                myHealth += potionsMeal;
                potions--;
                console.log("# You drunk a potion and health is now " + myHealth + " HP");
                console.log("# You have " + potions + " potions left");
            }else {
                console.log("> You don't have any potions left. Defeat any enemy to get a potion");
            }
        }else if(option == "3") {
            console.log("> You run away from the enemy");
        }else{
            console.log("> Invalid command");
        }

        

    }

    if(myHealth<1) {           
        break;
    }


    console.log("> Enemy has been defeated");
    console.log("#Your health " + myHealth + " HP");
    if(Math.random() > dropChance) {
        potions++;
        console.log("You have picked a health potion");
        console.log("You have now " + potions + " health potions")
    }

    if(await input("string","Continue to attack(y/n)") == "n") {
        break;
    }
    console.log("Good Bye");

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