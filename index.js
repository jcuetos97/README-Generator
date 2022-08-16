// Packages for this application
const inquirer = require ("inquirer");
const generateMarkdown = require('./assets/js/generateMarkdown.js');
const fs = require ("fs");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message:"What is the title of your project?",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your title.");
            }
        }
    },
    {
        type: "input" ,
        message: "Write a brief description about your project.",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter your description.");
            }
        }
    },
    {
        type: "input",
        message: "Please provide step-by-step installation instructions for your project.",
        name: "installation",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions.");
            }
        }
    },
    {
        type: "input",
        message: "How will someone use this application? (Usage information)",
        name: "usageInfo",
        validate: usageInfoInput => {
            if (usageInfoInput) {
                return true;
            } else {
                console.log("Please enter usage information.");
            }
        }
    },
    {
        type: 'list',
        message: 'Which license will you use for your project?',
        name: 'license',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },

    {
        type: "confirm",
        message: "Would you like to allow other developers to contribute?",
        name: "confirmContribution",
        default: true
    },

    {
        type: "input",
        message: "Please provide guidelines for contributing.",
        name: "contribute",
        when: (confirmContribution) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log("Please enter contributer guidelines.");
                return false;
            }
        }
    },
   
    {
        type: "input",
        message: "Please provide instructions on how to test your app.",
        name: "test",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter test instructions.");
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "githubUsername",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    },
]   


// Function to write README file
function writeToFile(readmeContent, fileName) {
    fs.writeFile(`./${fileName}-README.md`, readmeContent, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        } 
    });
}

// Function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(data => {
            console.log(data);
            return data;
        })       
};

// Function call to initialize app
init()
.then(data => {
    readme = [];
    readme.content = generateMarkdown(data);
    readme.fileName = data.title;
    return readme;
})
.then(readme => {
    writeToFile(readme.content, readme.fileName);
})
.catch(err => {
    console.log(err);
})





