// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Project title",
        message: "Project title:",
    },
    {
        type: "input",
        name: "Description",
        message: "A short description about your project:",
    },
    {
        type: "input",
        name: "Table of contents",
        message: "Table of contents for headings:",
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation instructions:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Usage information:",
    },
    /* using type = list allows me to write up an set of choices. */
    {
        type: "list",
        name: "License",
        message: "Project license/licenses:",
        choices: ["license1", "license2", "license3", "license4"]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Contribution guidlines:",
    },
    {
        type: "input",
        name: "Tests",
        message: "Test instructions:",
    },
    {
        type: "input",
        name: "Questions",
        message: "Questions on the project:",
    }
];

/* prompt which gets the array of objects (questions) stored within the "const questions".  */
inquirer.prompt(
    questions
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
