const Employee = require("../lib/Employee");

let cardArr = [];


function createCards(teamMembers) {

    // generate manager section
    const generateManager = (manager) => {
        return `
            <div class="card col-3" style="width: 30rem;">
                <div class="card-header bg-success text-white">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office: ${manager.getPhone()}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    // generate engineer section
    const generateEngineer = (engineer) => {
        return `
            <div class="card col-3" style="width: 30rem;">
                <div class="card-header bg-success text-white">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }

    // generate intern section based on if intern name was entered
    const generateIntern = (intern) => {
        return `
            <div class="card col-3" style="width: 30rem;">
                <div class="card-header bg-success text-white">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    /* filter for each role = manager. 
    pass all employee data from user input into generateManager/Engineer/Intern to create map. 
    push employee map array to the card array. */

    cardArr = [...teamMembers.filter(employee => employee.getRole() === "Manager").map(managerData => generateManager(managerData)), ...teamMembers.filter(employee => employee.getRole() === "Engineer").map(engineerData => generateEngineer(engineerData)), ...teamMembers.filter(employee => employee.getRole() === "Intern").map(internData => generateIntern(internData))]

    let htmlStr = cardArr.join('\n')
    //to be passed into HTML template 
    return htmlStr;
}

//generate HTML
module.exports = teamMembers => {

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="./assets/css/style.css">
    </head>
  
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary text-white">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex flex-wrap justify-content-center"> 
                ${createCards(teamMembers)}  
                </div>
            </div>  
        </div>  
    </body>

    </html>
    `
};


