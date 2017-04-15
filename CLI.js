var app = require("./app");
var inquirer = require("inquirer")

var cardType = process.argv[2];
var firstArg = process.argv[3];
var secondArg = process.argv[4];


// THIS IS NOT DONE
inquirer.prompt([
    {
    type: "list",
    name: "question",
    message: "What would you like to do?",
    choices: ["Make a card", "Study"]
    },
]).then(function (answers) {});