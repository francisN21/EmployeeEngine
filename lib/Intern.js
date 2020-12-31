// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, Email, office)
    {
        super(name, ID, Email);
        this.role = "Intern";
        this.school = school;
    }
};

module.exports = Intern;