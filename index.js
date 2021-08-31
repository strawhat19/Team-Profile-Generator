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

generateTeamPage = team => {
    fs.writeFileSync(outputPath, render(team), `utf-8`);
}

askQuestions = () => {

    inquirer.prompt([
        {
            name: `managerName`,
            type: `input`,
            message: `What is the Manager's Name?`
        },{
            name: `managerID`,
            type: `input`,
            message: `What is the Manager's Employee ID?`
        },{
            name: `managerEmail`,
            type: `input`,
            message: `What is the Manager's Email Address?`
        },{
            name: `officeNumber`,
            type: `input`,
            message: `What is the Office Number?`
        }
    ]).then(response => {
        const manager = new Manager(response.managerName,response.managerID,response.managerEmail,response.officeNumber);
        team.push(manager);
        generateTeamPage(team);
    })

}

askQuestions();