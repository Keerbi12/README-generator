// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title:"
    },
    {
        type: "input",
        name: "description",
        message: "A short description about your project:"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Table of contents for headings:"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information:"
    },
    /* using type = list allows me to write up an set of choices. */
    {
        type: "list",
        name: "license",
        message: "Project license/licenses:",
        choices: ["license1", "license2", "license3", "license4"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contribution guidlines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Test instructions:"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions on the project:"
    }
]

// prompt which gets the array of objects (questions) stored within the "const questions".  
inquirer.prompt(
    questions
)
.then(
    function start(connect) {
        console.log("Inputs recieved");
        writeToFile(connect);
    }
)
.catch((err) => {console.log(err)})


// TODO: Create a function to write README file
function writeToFile(input) {
// Created variable for the creation of the README page
    let readMeBlank;
// Created variables for each of the headings.
    let readMeTitle;
    let readMeDescription;
    let readMeTable;
    let readMeInstallation;
    let readMeUsage;
    let readMeLicense;
    let readMeContributing;
    let readMeTests;
    let readMeQuestions;
// Created constants that will become secondary headings as denoted by ##  
    const descriptionDisplay = "## Description";
    const tableDisplay = "## Table of Contents";
    const installationDisplay = "## Installation instructions"; 
    const usageDisplay = "## Usage information";
    const licenseDisplay = "## License";
    const contributingDisplay = "## Contribution guidlines";
    const testsDisplay = "## Test instructions";
    const questionsDisplay = "## Questions";

// Using an if statement to add the title as the user input or "Insert title here!"
    if (input.title == "") {
        readMeTitle = "Insert title here!"
    } else {
        readMeTitle = `${input.title}`;
        console.log(`${input.title}`);
    };
    readMeBlank.push(readMeTitle);
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
