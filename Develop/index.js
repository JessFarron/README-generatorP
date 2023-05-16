// TODO: Include packages needed for this application
/* Constants fs, inquirer, path, and generateMarkdown are assigned the values of the imported modules.  */
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
        {
          type: "input",
          name: "title",
          message: "Name the Project.",
        },
        {
          type: "input",
          name: "description",
          message: "Describe the purpose and functionality of this project.",
        },
        {
          type: "input",
          name: "screenshot",
          message: "Provide relative path to the image you want to use as screenshot."
        },
        {
          type: "input",
          name: "link",
          message: "Provide the URL of deployed application."
        },
        {
          type: "checkbox",
          name: "license",
          message: "Please select a license applicable to this project.",
          choices: ["MIT", "MPL2.0", "BSD2", "BSD3", "none"],
        },
        {
          type: "input",
          name: "require",
          message: "List installation instructions for this project.",
        },
        {
          type: "input",
          name: "usage",
          message:
            "Provide usage instructions of the project (languages or technologies associated ) .",
        },
        {
          type: "input",
          name: "creator",
          message: "Write your GitHub username.",
        },
        {
          type: "input",
          name: "email",
          message: "Provide your email address.",
        },
        {
          type: "input",
          name: "contributors",
          message: "List GitHub usernames of contributors. If not /n)",
          default: "",
        },
        {
          type: "input",
          name: "test",
          message: "Provide testing instructions",
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); // path.join and process.cwd are use to ensure to get to the correct file
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    //console.log(responses); // with the spread method the responses are out into one object taking users response as value and the names assigned before as key.
    writeToFile("./generated README/README.md", generateMarkdown({ ...responses })); //I thought this wasn´t possible. Callback funciton inside another. Is generateMarkdown function imported ? 
  });
}


// Function call to initialize app
init();