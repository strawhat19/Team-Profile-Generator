// Team Profile Generator
console.log(`Team Profile Generator!`);

// Declaring Constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const render = require(`./src/page-template.js`);

class Employee {
    constructor(name,id,role,email,officeNumber) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    logInfo = () => {
        Object.values(this).forEach(value => {
            console.log(value);
        })
    }
}

class Engineer extends Employee {
    constructor(name,id,role,email,officeNumber,github) {
        super(name,id,role,email,officeNumber);
        this.github = github;
    }
}

const employeeOne = new Employee(`Bobby`,5,`Boss`,`billybob@billybob.com`,15);
employeeOne.logInfo();

const engineer1 = new Engineer(`Engine`,15,`Developer`,`email@email.com`,12,`strawhat19`);
engineer1.logInfo();

const team = [
    {
        name: `Rick`,
        id: 1,
        email: `rakib987@gmail.com`,
        role: `Manager`
    },{
        name: `Rakib`,
        id: 2,
        email: `sanad_1919@yahoo.com`,
        role: `Engineer`
    },{
        name: `Ricky`,
        id: 3,
        email: `rahmed@piratechs.com`,
        role: `Intern`
    }
]

console.log(`Generating...`);

fs.writeFileSync(`generatedTeamProfile.html`, render(team), error => {
    error ? console.log(error) : console.log(`Team Profile Successfully Generated! You can find it within this folder!`);
})

console.log(`Generated!`);

