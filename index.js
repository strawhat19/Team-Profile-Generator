// Team Profile Generator
console.log(`Team Profile Generator!`);

// Declaring Constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const render = require(`./src/page-template.js`);

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

