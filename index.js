const inquirer = require("inquirer");

const fs = require("fs");

const {Triangle, Square, Circle} = require("./lib/shapes");






function promptUser() {
    inquirer.prompt([
        {
            type:"input",
            message: "What text would you like on your logo to be displayed? (Enter three characters)",
            name: "text",

        },

        {
            type:"input",
            message: "Choose text color (Enter a color keyword or a hexadecimal number)",
            name: "textColor",

        },

        {
            type:"list",
            message: "Which shape would you like the logo to be?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",

        },

        {
            type:"input",
            message: "What color would you like your shape to be? (Enter a color keyword or a hexadecimal number)",
            name: "shapeColor",

        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Please enter a value of no more than 3 characters");
            promptUser();
        } else {
            writeToFile("logo.svg", answers);
        }
    });
}

function writeToFile(fileName, answers) {
 let logoString = "";

 logoString = 
 '<svg version="1.1" width="300" height="200" xmlns="http://w3.org/2000/svg">';

 logoString += "<g>";

 logoString += `${answers.shape}`;


 let shapeChoice;
 if (answers.shape === "Triangle"){
    shapeChoice = new Triangle();
 } else if (answers.shape === "Square") {
    shapeChoice = new Square();
 } else {
    shapeChoice = new Circle();
 }

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("generated logo.svg");
    })
}



promptUser();