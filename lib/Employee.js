class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`;
    }

    logInfo() {
        Object.values(this).forEach(value => {
            console.log(value);
        })
    }
}

module.exports = Employee;