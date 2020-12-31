// needed consts for the team 
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Const to render the HTML file
const render = require("./lib/htmlRenderer");
// to write the file.
let writeFile = util.promisify(fs.writeFile);


let employee = [];

const eQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee Name:"
    },
    {
        type: "input",
        name: "name",
        message: "Enter employee ID:"
    },
    {
        type: "input",
        name: "name",
        message: "Enter employee Email:"
    },
    {
        type: "list",
        name: "role",
        message: "Enter employee Role:",
        choices: ["Manager","Engineer","Intern"]
    },
];

const addMore = [
    {
        type: "list",
        name: "addEmployee",
        message: "Do you want to add more employee?",
        choices: ["Yes", "No"]
    }
];

// start function
const start = () => {
    inquirer.prompt({
      name: "StartorExit",
      type: "list",
      message: "Welcome to employee template engine. Would you like to proceed?",
      choices: ["Yes", "No"]
    })
    .then(answer => {
        if(answer.StartorExit === "Yes"){
            // function call to initialize program
            console.log("start");
            createEmployee();
        } else {
            // terminates the program
            process.exit(0);
        };
    });
  };
  // starts the readme bot program
  start();

const createEmployee = () => {
  inquirer.prompt(eQuestions)
  .then((data)=>{
    if (data.role === "Manager"){ newManager() }
    if (data.role === "Engineer"){ newEngineer() }
    if (data.role === "Intern"){ newIntern() }
  })
  .catch((err)=> console.log(err));
};

const newEmployee = () =>{
    inquirer.prompt(addMore)
    .then((data)=>{
        if (data.addEmployee === "Yes"){
            createEmployee();
        }
        else{ console.log("Goodbye! Thanks"); process.exit(0); }
    });
};

const newManager = () => {
    console.log("ManagerFunc")
}

const newEngineer = () => {
    console.log("EngineerFunc")
}

const newIntern = () => {
    console.log("InternFunc")
}




























// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
