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

const team = [
    new Manager(`Kyle`,1,`sanad_1919@yahoo.com`,19),
    new Engineer(`Ricky`,2,`rakib987@gmail.com`,`strawhat19`),
    new Engineer(`Ricky`,2,`rakib987@gmail.com`,`strawhat19`),
    new Engineer(`Ricky`,2,`rakib987@gmail.com`,`strawhat19`),
    new Engineer(`Ricky`,2,`rakib987@gmail.com`,`strawhat19`),
    new Engineer(`Rick`,3,`rick@rick.com`,`Piratechs`),
    new Intern(`Grayson`,4,`gray@gray.com`,`KSU`),
    new Intern(`Grayson`,4,`gray@gray.com`,`KSU`),
    new Intern(`Grayson`,4,`gray@gray.com`,`KSU`)
]

console.log(`Generating...`);

fs.writeFileSync(outputPath, render(team), `utf-8`);

setTimeout(() => {
    console.log(`Generated!`);
},1000);