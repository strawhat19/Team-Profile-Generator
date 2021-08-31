const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card manager">
            <h2 class="card-title">${manager.getName()} <i class="fas fa-user-check"></i></h2>
            <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Role: ${manager.getRole()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            </ul>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card engineer">
            <h2 class="card-title">${engineer.getName()} <i class="fas fa-user-cog"></i></h2>
            <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Role: ${engineer.getRole()}</li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            </ul>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card intern">
            <h2 class="card-title">${intern.getName()} <i class="fas fa-user-circle"></i></h2>
            <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Role: ${intern.getRole()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            </ul>
        </div>
        `;
    };

    const teamArray = [];

    teamArray.push(team.filter(employee => employee.getRole() === `Manager`).map(manager => generateManager(manager)).join(``));
    teamArray.push(team.filter(employee => employee.getRole() === `Engineer`).map(engineer => generateEngineer(engineer)).join(``));
    teamArray.push(team.filter(employee => employee.getRole() === `Intern`).map(intern => generateIntern(intern)).join(``));

    return teamArray.join(``);
}

// Exports
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="icon" href="https://piratechs.com/wp-content/uploads/2019/05/Icon.svg" type="image/x-icon">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/styles/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>

        <!-- jQuery Core -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </body>
    </html>`
}