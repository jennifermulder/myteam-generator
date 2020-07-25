const result = [];

function createCards (teamMembers) {
    teamMembers.filter(data => {
        let manager = array.filter()


        result.push(manager)

        result.push(engineers)

        result.push(intern)
        
    });

// generate manager section
const generateManager = (manager) => {
    return `
    <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-titel"><i class="fas fa-mug-hot mr-2"></1>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-itme">Office number: ${manager.getPhone()}<li>
                </ul>
            </div>
        </div>
    `;
};

// generate engineer section
const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-titel"><i class="fas fa-glasses mr-2"></1>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-itme">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a><li>
        </ul>
    </div>
</div>
    `;
};

// generate intern section based on if intern name was entered
const generateIntern = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-titel"><i class="fas fa-user-graduate mr-2"></1>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-itme">School: ${intern.getSchool()}<li>
        </ul>
    </div>
</div>
    `;
};

console.log("Inside create cards");

};




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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="style.css">

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

        
        ${createCards(teamMembers)}   
      <footer class="container text-center py-3">
      </footer>
    </body>
    </html>
    `
};


