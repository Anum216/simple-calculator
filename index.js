#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    { message: "selecet one of the operators to perform action", type: "list", name: "operators", choices: ["Addition",
            "subtraction", "multiplication", "division"],
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select a valid operator");
}
