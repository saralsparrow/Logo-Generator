// Import necessary functions/classes from the lib folder
const { createLogo } = require('./lib/logo');
const inquirer = require("inquirer")
const fs = require('fs');
// const prompt = require('prompt-sync')();

// Run the application logic
function runApplication() {
    // Here you can add any code to get user inputs if needed

    inquirer
        .prompt([
            {
                name: "text",
                message: "Enter text for the logo (up to three characters): ",
            },
            {
                name: "textColor",
                message: "Enter text color (keyword or hexadecimal): "
            },
            {
                name: "shape",
                message: "Enter shape for the logo (circle, triangle, square): "
            },
            {
                name: "shapeColor",
                message: "Enter shape color (keyword or hexadecimal): "
            }
        ])
        .then(() => {
            // Use user feedback for... whatever!!
            fs.writeFileSync('logo.svg', createLogo(text, textColor, shape, shapeColor));
            console.log('Generated logo.svg');
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}

// Run the application
runApplication();