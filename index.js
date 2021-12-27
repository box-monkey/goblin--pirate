// require 'inquirer' dependency to capture user input in the node.js command
const inquirer = require("inquirer");
//required file system to create, add and this case create a READme file
const fs = require("fs");
// required to use markdown
const markdown = require("./utils/generateMarkdown");

// question prompts for readme and user

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your projects title?(Required)",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a project(Required)",
      validate: (description) => {
        if (description) {
          return true;
        } else {
          console.log("You need to enter a description");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What dependencies were installed?(Required)",
      validate: (installation) => {
        if (installation) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "credits",
      message: "List your collaborators if any",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license protect this project?(Check the one that apply)",
      choices: ["MIT", "Apache", "ISC", "GNU GPLv3", "none"],
    },
    {
      type: "input",
      name: "test",
      message: "Test",
    },
    {
      input: "input",
      name: "questions",
      message:
        "If you have any questions about the project, you can reach me here:",
    },

    {
      type: "input",
      name: "name",
      message: "What is your name?(Required)",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?(Required)",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ])
  // takes and stores all data to generate readme
  .then((data) => {
    const readMeData = markdown.generateMarkdown(data);
    fs.writeFile("README.md", readMeData, (err) => {
      err ? console.log(err) : console.log("Data Saved!");
    });
  });
