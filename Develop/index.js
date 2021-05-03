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
        name: "installation",
        message: "Installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information:"
    },
    {
        type: "input",
        name: "license",
        message: "Project license/licenses:",
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
    let readMeBlank = [];
// Created variables for each of the headings.
    let readMeTitle;
    let readMeDescription;
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
        readMeTitle = "# Insert title here!"
    } else {
        readMeTitle = `# ${input.title}`;
    };
    readMeBlank.push(readMeTitle);

// Using an if statement to add the description
    if (input.description == "") {
        readMeDescription = "Insert description here!"
    } else {
        readMeDescription = `${input.description}`;
    };
    readMeBlank.push(descriptionDisplay);
    readMeBlank.push(readMeDescription);

// Adding table of contents
    readMeBlank.push(tableDisplay);
    readMeBlank.push("[installation](#installation)\n");
    readMeBlank.push("[usage](#usage)\n");
    readMeBlank.push("[license](#license)\n");
    readMeBlank.push("[contributing](#contributing)\n");
    readMeBlank.push("[tests](#tests)\n");
    readMeBlank.push("[questions](#questions)\n");

// Using an if statement to add the installation instructions
    if (input.installation == "") {
        readMeInstallation = "Insert installation instructions here!"
    } else {
        readMeInstallation = `${input.installation}`;
    };
    readMeBlank.push(installationDisplay);
    readMeBlank.push(readMeInstallation);

    // Using an if statement to add the usage
    if (input.usage == "") {
        readMeUsage = "Insert usage here!"
    } else {
        readMeUsage = `${input.usage}`;
    };
    readMeBlank.push(usageDisplay);
    readMeBlank.push(readMeUsage);

    // Using an if statement to add the license
    if (input.license == "") {
        readMeLicense = "Insert license or licenses here!"
    } else {
        readMeLicense = `${input.license}`;
    };
    readMeBlank.push(licenseDisplay);
    readMeBlank.push(readMeLicense);

    // Using an if statement to add the contribution instructions
    if (input.contributing == "") {
        readMeContributing = "Insert contribution instructions here!"
    } else {
        readMeContributing = `${input.contributing}`;
    };
    readMeBlank.push(contributingDisplay);
    readMeBlank.push(readMeContributing);

    // Using an if statement to add the tests
    if (input.tests == "") {
        readMeTests = "Insert test here!"
    } else {
        readMeTests = `${input.tests}`;
    };
    readMeBlank.push(testsDisplay);
    readMeBlank.push(readMeTests);

    // Using an if statement to add the questions
    if (input.questions == "") {
        readMeQuestions = "Insert questions here!"
    } else {
        readMeQuestions = `${input.questions}`;
    };
    readMeBlank.push(questionsDisplay);
    readMeBlank.push(readMeQuestions);

// All the inputs are written into an array on readMeBlank, ReadMe uses the .join to concatenate all the arrays into a single line.
    let ReadMe = readMeBlank.join("\n");
    
    fs.writeFile("../assets/README.md", ReadMe, function err() {
        if (err) {
            console.log("error")
        } else {
            console.log(`${title} README.md file generated succesfully`)
        }
    });
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
