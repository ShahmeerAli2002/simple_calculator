#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstName" },
  { message: "Enter second number", type: "number", name: "secondName" },
  {
    message: "Enter your operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.firstName + answer.secondName);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstName - answer.secondName);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstName * answer.secondName);
} else if (answer.operator === "Divisions") {
  console.log(answer.firstName / answer.secondName);
}else{
    console.log("Invalid operator")
}