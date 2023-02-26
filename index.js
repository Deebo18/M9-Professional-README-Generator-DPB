// Packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a desciprtion of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is used in order to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is used in order to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide user(s) with additional information on how to contribute to the repo.',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));
    });
}

// Function call to initialize app
init();
