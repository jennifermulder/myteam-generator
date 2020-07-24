// generate engineer section
const generateEngineer = (engineer) => {
    if (!engineer) {
        return '';
    }

    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-titel"><i class="fas fa-glasses mr-2"></1>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-itme">GitHub: <a href="https://github.com/${data.github}">${data.github}</a><li>
        </ul>
    </div>
</div>
    `;
};

// generate intern section
const generateIntern = (intern) => {
    if (!intern) {
        return '';
    }

    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-titel"><i class="fas fa-user-graduate mr-2"></1>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}}">${email}</a></li>
            <li class="list-group-itme">School: ${data.school}}<li>
        </ul>
    </div>
</div>
    `;
};




module.exports = templateData => {
    // destructure page data by section
    const {} = templateData;

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

        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee - input}</h2>
                <h3 class="card-titel"><i class="fas fa-mug-hot mr-2"></1>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${input}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}}">${email}</a></li>
                    <li class="list-group-itme">Office number: ${phone}}<li>
                </ul>
            </div>
        </div>
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
   
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
};