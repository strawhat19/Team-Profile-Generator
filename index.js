// Team Profile Generator
console.log(`Team Profile Generator!`);

// Declaring Constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const render = require(`./src/page-template.js`);
const path = require(`path`);

const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

const outputDirectory = path.resolve(__dirname,`dist`);
const outputPath = path.join(outputDirectory,`generatedTeamProfile.html`);

const team = [];
const IDs = [];

generateTeamPage = team => {
    fs.writeFileSync(outputPath, render(team), `utf-8`);
}

askQuestions = () => {

    inquirer.prompt([
    {
            name: `managerName`,
            type: `input`,
            message: `What is the Manager's Name?`,
            validate: name => {
                if (name === ``) {
                    return `Please enter at least one character`;
                } else {
                    return true;
                }
            }
        },{
            name: `managerID`,
            type: `input`,
            message: `What is the Manager's Employee ID?`,
            validate: ID => {
                const isNumber = ID.match(/^[1-9]\d*$/);
                if (isNumber) {
                    if (IDs.includes(ID)) {
                        return `This ID is already registered. Please enter a different ID.`
                    } else {
                        return true;
                    }
                } else {
                    return `Please enter a posiive number greater than zero.`;
                }
            }
        },{
            name: `managerEmail`,
            type: `input`,
            message: `What is the Manager's Email Address?`,
            validate: email => {
                const validEmail = email.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                   return true;
                } else {
                    return `Please enter a valid email address.`;
                }
            }
        },{
            name: `officeNumber`,
            type: `input`,
            message: `What is the Office Number?`,
            validate: officeNumber => {
                if (officeNumber === ``) {
                    return `Please enter an Office Number`;
                } else {
                    const isNumber = officeNumber.match(/^[1-9]\d*$/);
                    if (isNumber) {
                        return true;
                    } else {
                        return `Please enter a posiive number greater than zero.`;
                    }
                }
            }
        }
    ]).then(response => {
        const manager = new Manager(response.managerName,response.managerID,response.managerEmail,response.officeNumber);
        IDs.push(response.managerID);
        team.push(manager);
        teamQuestions();
    })

}

teamQuestions = () => {

    inquirer.prompt([
        {
            type: `list`,
            name: `members`,
            message: `Would you like to add a Team Member?`,
            choices: [
                `Add an Engineer`,
                `Add an Intern`,
                `I do not want to add any more Team Members`
            ]
        }
    ]).then(choice => {
        switch(choice.members) {
            case `Add an Engineer`:
                addEngineer();
                break;
            case `Add an Intern`:
                addIntern();
                break;
            default:
                console.log(`Generating Team Page...`);
                generateTeamPage(team);
                setTimeout(() => {
                    console.log(`Generated!`);
                },1000)
        }
    })

}

addEngineer = () => {

    inquirer.prompt([
        {
            name: `engineerName`,
            type: `input`,
            message: `What is the Engineer's Name?`,
            validate: name => {
                if (name === ``) {
                    return `Please enter at least one character`;
                } else {
                    return true;
                }
            }
        },{
            name: `engineerID`,
            type: `input`,
            message: `What is the Engineer's Employee ID?`,
            validate: ID => {
                const isNumber = ID.match(/^[1-9]\d*$/);
                if (isNumber) {
                    if (IDs.includes(ID)) {
                        return `This ID is already registered. Please enter a different ID.`
                    } else {
                        return true;
                    }
                } else {
                    return `Please enter a posiive number greater than zero.`;
                }
            }
        },{
            name: `engineerEmail`,
            type: `input`,
            message: `What is the Engineer's Email Address?`,
            validate: email => {
                const validEmail = email.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                   return true;
                } else {
                    return `Please enter a valid email address.`;
                }
            }
        },{
            name: `github`,
            type: `input`,
            message: `What is the Engineers Github username?`,
            validate: github => {
                if (github === ``) {
                    return `Please enter at least one character`;
                } else {
                    return true;
                }
            }
        }
    ]).then(response => {
        const engineer = new Engineer(response.engineerName,response.engineerID,response.engineerEmail,response.github);
        IDs.push(response.engineerID);
        team.push(engineer);
        teamQuestions();
    })

}

addIntern = () => {

    inquirer.prompt([
        {
            name: `internName`,
            type: `input`,
            message: `What is the Intern's Name?`,
            validate: name => {
                if (name === ``) {
                    return `Please enter at least one character`;
                } else {
                    return true;
                }
            }
        },{
            name: `internID`,
            type: `input`,
            message: `What is the Intern's Employee ID?`,
            validate: ID => {
                const isNumber = ID.match(/^[1-9]\d*$/);
                if (isNumber) {
                    if (IDs.includes(ID)) {
                        return `This ID is already registered. Please enter a different ID.`
                    } else {
                        return true;
                    }
                } else {
                    return `Please enter a posiive number greater than zero.`;
                }
            }
        },{
            name: `internEmail`,
            type: `input`,
            message: `What is the Intern's Email Address?`,
            validate: email => {
                const validEmail = email.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                   return true;
                } else {
                    return `Please enter a valid email address.`;
                }
            }
        },{
            name: `school`,
            type: `input`,
            message: `What School is the Intern attending?`,
            validate: school => {
                if (school === ``) {
                    return `Please enter at least one character`;
                } else {
                    return true;
                }
            }
        }
    ]).then(response => {
        const intern = new Intern(response.internName,response.internID,response.internEmail,response.school);
        IDs.push(response.internID);
        team.push(intern);
        teamQuestions();
    })

}

askQuestions();