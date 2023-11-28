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
 '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

 logoString += "<g>";

 logoString += `${answers.shape}`;


 let shapeChoice;
 if (answers.shape === "Triangle"){
    shapeChoice = new Triangle();
    logoString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`
 } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    logoString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`
 } else {
    shapeChoice = new Circle();
    logoString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
 }

// <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
logoString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
// Closing </g> tag
logoString += "</g>";
// Closing </svg> tag
logoString += "</svg>";

    fs.writeFile(fileName, logoString, (err) => {
        err ? console.log(err) : console.log("Logo has been generated!");
    })
}

promptUser();