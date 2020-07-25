const Employee = require('./Employee');

class Manager extends Employee {
    constructor () {
        super();
        this.officeNumber = officeNumber;
        
    }

    getRole() {
        return {
            role: 'Manager',
        }
    }
}