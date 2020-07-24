const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('/lib/Engineer');
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
        //new to validate email
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: answer => {
                if (answer !== '') {
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
        {
            //how to pass through selection
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: answer => {
                if (answer == 'Engineer') {
                    return promptUserEngineer();

                }else if (answer == 'Intern') {
                    return promptUserIntern();

                }else if (answer == 'Finish building my team') {
                    // return writeToFile();
                    //add team members to array

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
        //need to validate email
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
            validate: answer => {
                if (answer !== '') {
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
        {
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: answer => {
                if (answer == 'Engineer') {
                    return promptUserEngineer();

                }else if (answer == 'Intern') {
                    return promptUserIntern();

                }else if (answer == 'Finish building my team') {
                    // return writeToFile();
                    //add team members to array

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
            name: 'internTitle',
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
        //need to validate email
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?",
            validate: answer => {
                if (answer !== '') {
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
        {
            type: 'list',
            name: 'teammember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            validate: answer => {
                if (answer == 'Engineer') {
                    return promptUserEngineer();

                }else if (answer == 'Intern') {
                    return promptUserIntern();

                }else if (answer == 'Finish building my team') {
                    // return writeToFile();
                    //add team members to array

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