const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const generateHTML = require('./src/generateHTML.js');


//question object Manager
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your team manager's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: answer => {
                if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(answer)) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerPhone',
            message: "What is the team manager's office number?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your team manager's id!");
                    return false;
                }
            }
        },
    ])
    //data = promise object from inquirer prompts
    .then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerPhone)
        teamMembers.push(manager);
        newMember();        
    });
        
};

//question object Engineer
const promptUserEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your engineer's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
            validate: answer => {
                if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(answer)) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your engineer's GitHub username!");
                    return false;
                }
            }
        },    
    ])
    .then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teamMembers.push(engineer);
        newMember();        
    });
};

//question object Engineer
const promptUserIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your intern's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?",
            validate: answer => {
                if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(answer)) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Where does the intern go to school?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log("Please enter your intern's school!");
                    return false;
                }
            }
        },
        
    ])
    .then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        teamMembers.push(intern);
        newMember();        
    });
};
//to prompt user whether or not to add a new employee or finish building the team/ generate HTML
function newMember() {
    return inquirer.prompt([{
        type: 'list',
        name: 'teamMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
    }])
        .then(answer => {
            if (answer.teamMember == 'Engineer') {
                return promptUserEngineer();

            } else if (answer.teamMember == 'Intern') {
                return promptUserIntern();
            //html name will be "myTeam.html"
            } else if (answer.teamMember == 'Finish building my team') {
                return buildMyTeam('myTeam.html');
                
            } else {
                console.log('Please select a team member!');
                return false;
            }
        })
}

// function to build team but writing to file using location and generate HTML template
function buildMyTeam(fileName) {
    //write file in path created from current working directory
    return fs.writeFileSync(path.join(process.cwd().dist, fileName), generateHTML(teamMembers));
}

// fs.writeFile('./dist/index.html', fileContent, err => 

// function call to initialize program
promptUser();
