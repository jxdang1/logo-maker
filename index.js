//inquirer import from node packages
const inquirer = require("inquirer");

// file system module from node packages
const fs = require("fs");

//imported classes from the shapes.js directory
const {Triangle, Square, Circle} = require("./lib/shapes");


//prompt for user input for the text, text color, shape, and shape color. 

function promptUser() {
    inquirer.prompt([
        // text prompt
        {
            type:"input",
            message: "What text would you like on your logo to be displayed? (Enter three characters)",
            name: "text",

        },
        //text color prompt
        {
            type:"input",
            message: "Choose text color (Enter a color keyword or a hexadecimal number)",
            name: "textColor",

        },
        //shape prompt
        {
            type:"list",
            message: "Which shape would you like the logo to be?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",

        },
        //shape color prompt
        {
            type:"input",
            message: "What color would you like your shape to be? (Enter a color keyword or a hexadecimal number)",
            name: "shapeColor",

        },
    ])
    //if user inputs incorrect text prompt, this will error handle the text prompt by saying ('Please enter a value of no more than 3 characters')
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Please enter a value of no more than 3 characters");
            promptUser();
        } else {
            // if correct text input, this will call a write to file function to generate a SVG file
            writeToFile("./example/logo.svg", answers);
        }
    });
}

function writeToFile(fileName, answers) {
//creates an empty string
 let logoString = "";

 // sets the width and height of the logo container
 logoString = 
 '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
// wraps tag  so the user font input goes on top of the polygon
 logoString += "<g>";
// takes users for shape choices and inserts them into the svg file
 logoString += `${answers.shape}`;

//condtional function that takes user input from choices array and adds the polygon property and shape color into a svg string
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

// text alignment, text-content/text-color taken in from user prompt and gives default font size of "40" for user visibility
logoString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
// Closing </g> tag
logoString += "</g>";
// Closing </svg> tag
logoString += "</svg>";

    fs.writeFile(fileName, logoString, (err) => {
        err ? console.log(err) : console.log("Logo has been generated!");
    })
}

// calls promptUser function for inquirer prompt to activate when application is ran
promptUser();