const { Circle, Triangle, Square } = require('./shapes');

// Test the Circle class
test('Circle render() returns SVG circle element with correct fill color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="${this.color}"/>`);
});

// Test the Triangle class
test('Triangle render() returns SVG polygon element with correct fill color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe(`<polygon points="150,0 300,200 0,200" fill="${this.color}"/>`);
});

// Test the Square class
test('Square render() returns SVG rect element with correct fill color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`);
});