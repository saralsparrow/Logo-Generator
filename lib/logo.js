const {Circle, Triangle, Square} = require("./shapes");

// const fs = require('fs');

function createLogo(text, textColor, shape, shapeColor) {
    
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "30");
    svg.setAttribute("width", "200");
    svg.setAttribute("color", $(shapeColor))



    // Draw shape

    svg.appendChild($(shape));

    

    // Add text
    text.style.fill = $(textColor);

    svg.appendChild($(text));
    

    
    document.body.appendChild(svg);
}

module.exports = (createLogo);


// function main() {
//     inquirer
//         .prompt([
//             {
//                 name: "text",
//                 message: "Enter text for the logo (up to three characters): ",
//             },
//             {
//                 name: "textColor",
//                 message: "Enter text color (keyword or hexadecimal): "
//             },
//             {
//                 name: "shape",
//                 message: "Enter shape for the logo (circle, triangle, square): "
//             },
//             {
//                 name: "shapeColor",
//                 message: "Enter shape color (keyword or hexadecimal): "
//             }
//         ])
//         .then((answers) => {
//             // Use user feedback for... whatever!!
//             fs.writeFileSync('logo.svg', createLogo(text, textColor, shape, shapeColor));
//             console.log('Generated logo.svg');
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//             } else {
//             // Something else went wrong
//             }
//         });

    
// }

// main();