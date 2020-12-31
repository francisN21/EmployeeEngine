// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, Email, office)
    {
        super(name, ID, Email);
        this.role = "Manager";
        this.office = office;
    }
}

module.exports = Manager;