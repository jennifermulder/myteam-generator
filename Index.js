const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML.js');
const path = require('path');


//question object Manager
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: manageridInput => {
                if (manageridInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's id!");
                    return false;
                }
            }
        },
        //new to validate email
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's id!");
                    return false;
                }
            }
        },
        {
            //how to pass through selection
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: teammemberInput => {
                if ('Engineer') {
                    return promptUserEngineer();

                }else if ('Intern') {
                    return promptUserIntern();

                }else if ('Finish building my team') {
                    return writeToFile();

                } else {
                    console.log('Please select a team member!');
                    return false;
                }
            }
        }, 
    ]);
};

//question object Engineer
const promptUserEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineertitle',
            message: "What is the engineer's name?",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's id!");
                    return false;
                }
            }
        },
        //need to validate email
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: licenseInput => {
                if ('Engineer') {
                    return promptUserEngineer();

                }else if ('Intern') {
                    return promptUserIntern();

                }else if ('Finish building my team') {
                    return writeToFile();

                } else {
                    console.log('Please select a team member!');
                    return false;
                }
            }
        }, 
    ]);
};

//question object Engineer
const promptUserIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'interntitle',
            message: "What is the intern's name?",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's id!");
                    return false;
                }
            }
        },
        //need to validate email
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern go to school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: licenseInput => {
                if ('Engineer') {
                    return promptUserEngineer();

                }else if ('Intern') {
                    return promptUserIntern();

                }else if ('Finish building my team') {
                    return writeToFile();

                } else {
                    console.log('Please select a team member!');
                    return false;
                }
            }
        }, 
    ]);
};


// function to write README file using location and generateMarkdown template
function writeToFile(fileName, data) {
    //write file in path created from current working directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init(){
    promptUser()
    .then(pageData => {
        return writeToFile("myTeam.html", generateHTML({ ...readmeData }))
    })
    .catch(err => {
        console.log(err);
    });
}

// function call to initialize program
init();






const Team = require('./lib/Employee');



new Team().initializeTeam();