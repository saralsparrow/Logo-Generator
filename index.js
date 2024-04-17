// Import necessary functions/classes from the lib folder
const { createLogo } = require('./lib/logo');

// Run the application logic
function runApplication() {
    // Here you can add any code to get user inputs if needed

    const text = responses[3];
    const textColor = responses[1];
    const shape = responses[0];
    const shapeColor = responses[2];

    function askQuestion(index) {
        if (index < questions.length) {
            rl.question(questions[index] + " ", (answer) => {
                responses.push(answer);
                askQuestion(index + 1);
            });
        } else {
            rl.close();
            createLogo(text, textColor, shape, shapeColor);
        }
    
    askQuestion(0);

    // Call the createLogo function with the provided inputs
    // createLogo(text, textColor, shape, shapeColor);
    }
}

// Run the application
runApplication();