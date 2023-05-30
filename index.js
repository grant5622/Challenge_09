// TODO: Include packages needed for this application

const { title } = require("process");

// TODO: Create an array of questions for user inputn
  
  function finalizedWrite(response) {
    var content = "";
    let keys = Object.keys(response);
    keys.forEach((element) => {
      content = content + "\n" + response[element];
    });
    const fileSystem = require("fs");
    fileSystem.writeFile("README.md", content, (error) => {
      if (error) throw error;
      console.log("succesfully printed");
    });
  }
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    const inquirer = require("inquirer");
    inquirer.prompt ([
      {
        type: "input",
        message: "# <Your-Project-Title>",
        name: "title",
        validate: (title) => {

        return title !== null;
        }

      },
      {
        type: "input",
        message: "## Description\nProvide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?",
        name: "description",
         
      },

      {
        type: "list",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.",
        choices: ["agpl", "apache", "mit", "no license"],
        name: "lisence",

      },

      {
        type: "confirm",
        message: "Do you want multiple contributors?",  
        name: "multipleContributors",
        default: true,

      },

    ]) .then((responses)=>{
      finalizedWrite(responses);
    })
  
  }
  
  // TODO: Create a function to initialize app
  function init() {
    writeToFile("readme.md", null);
  }
  
  // Function call to initialize app
  init();
  