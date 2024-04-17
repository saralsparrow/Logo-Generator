const { Circle, Triangle, Square } = require('./shapes');

// Test the Circle class
test('Circle getArea() calculates the area correctly', () => {
    const circle = new Circle(5);
    expect(circle.getArea()).toBeCloseTo(78.54); // Expected area for radius 5 is approximately 78.54
});

// Test the Triangle class
test('Triangle getArea() calculates the area correctly', () => {
    const triangle = new Triangle(4, 6);
    expect(triangle.getArea()).toBe(12); // Expected area for base 4 and height 6 is 12
});

// Test the Square class
test('Square getArea() calculates the area correctly', () => {
    const square = new Square(3);
    expect(square.getArea()).toBe(9); // Expected area for side length 3 is 9
});