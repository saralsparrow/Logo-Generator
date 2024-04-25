const { Circle, Triangle, Square } = require("./shapes");

function createLogo(text, textColor, shape, shapeColor) {
    let svg;
    let textElement = `<text x="150" y="125" font-size="65" text-anchor="middle" fill="${textColor}">${text}</text>`;
   

    // Draw shape
    let shapeElement;
    switch (shape) {
        case 'circle':
            shapeElement = new Circle();
            break;
        case 'triangle':
            shapeElement = new Triangle();
            break;
        case 'square':
            shapeElement = new Square();
            break;
        default:
            // Handle invalid shape
            return;
    }

    shapeElement.setColor(shapeColor)
    
    svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeElement.render()} ${textElement}`

    // Add text
    return svg
}

module.exports = createLogo;