// TODO: Include packages needed for this application
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    // Project Title
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },

    // Project Description
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    }, 
    
    // Project License
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE", "GPL", "None"]
    }, 
    
    // Command Needed to run a test
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?"
    }, 
    
    // Usage Info
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    }, 
    
    // Contribution Info
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    
    // Contact Info
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // const writeToFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README....");
        writeToFile("README.md", generateMarkdown({
            ...inquirerResponses
        }))
    })
}

// Function call to initialize app
init();
