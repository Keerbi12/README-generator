/* Run the npm init -y then installed inquirer, npm i inquirer. */

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "Project title",
            message: "What is your project title?:",
        },
        {
            type: "input",
            name: "Description",
            message: "A short description about your project:",
        },
        {
            type: "input",
            name: "Table of contents",
            message: "Table of contents for your headings:",
        },
        {
            type: "input",
            name: "Installation",
            message: "Project installation:",
        },
        {
            type: "input",
            name: "Usage",
            message: "Project usage:",
        },
        {
            type: "input",
            name: "License",
            message: "Project license:",
        },
        {
            type: "input",
            name: "Contributing",
            message: "Project contributions:",
        },
        {
            type: "input",
            name: "Tests",
            message: "Project tests:",
        },
        {
            type: "input",
            name: "Questions",
            message: "Questions on the project:",
        },
    ]
)

