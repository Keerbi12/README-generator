/* Run the npm init -y then installed inquirer, npm i inquirer. */

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
        },
    ]
)
