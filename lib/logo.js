const fs = require('fs');
const prompt = require('prompt-sync')();
const { createSVG } = require('@svgdotjs/svg.js');

function createLogo(text, textColor, shape, shapeColor) {
    const svg = createSVG().size(300, 200);

    // Draw shape
    if (shape === 'circle') {
        svg.circle(100).cx(150).cy(100).fill(shapeColor);
    } else if (shape === 'triangle') {
        svg.polygon('100,200 200,200 150,100').fill(shapeColor);
    } else if (shape === 'square') {
        svg.rect(100, 100).move(100, 50).fill(shapeColor);
    }

    // Add text
    svg.text(text).move(100, 150).fill(textColor);

    // Save SVG file
    fs.writeFileSync('logo.svg', svg.svg());
    console.log('Generated logo.svg');
}

function main() {
    const text = prompt('Enter text for the logo (up to three characters): ');
    const textColor = prompt('Enter text color (keyword or hexadecimal): ');
    const shape = prompt('Enter shape for the logo (circle, triangle, square): ');
    const shapeColor = prompt('Enter shape color (keyword or hexadecimal): ');

    createLogo(text, textColor, shape, shapeColor);
}

main();