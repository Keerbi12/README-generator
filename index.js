const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Project name",
            
        }
    ]
)