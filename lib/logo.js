const {Circle, Triangle, Square} = require("./shapes");

const fs = require('fs');
const inquirer = require("inquirer")
const prompt = require('prompt-sync')();

function createLogo(text, textColor, shape, shapeColor) {
    <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="15" fill="red"></text>
    </svg>

    // Draw shape

    // Add text
    

    
    
}


function main() {
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
        .then((answers) => {
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
    // const text = prompt('Enter text for the logo (up to three characters): ');
    // const textColor = prompt('Enter text color (keyword or hexadecimal): ');
    // const shape = prompt('Enter shape for the logo (circle, triangle, square): ');
    // const shapeColor = prompt('Enter shape color (keyword or hexadecimal): ');

    
}

main();