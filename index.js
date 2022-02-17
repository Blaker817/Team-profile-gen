const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require('fs')
const path = require('path')

const teamMembers = []

inquirer.prompt([
    {
        type: 'input',
        name: 'managersName',
        message: "Whats the Managers name?",
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Whats your Employee ID?',

    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Whats your Employee Email Address?',

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Whats your Office Number?',

    },


]).then(answers => {
    const manager = new Manager(answers.managersName, answers.employeeID, answers.emailAddress, answers.officeNumber)
    console.log(manager);
    teamMembers.push(manager)
    menu()
})

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Who do you want to add?',
            choices: [
                'Intern',
                'Engineer',
                'Finish',
            ]
        }
    ]).then(answer => {
        if (answer.menu === 'Intern') {
            addIntern()
        } else if (answer.menu === 'Engineer') {
            addEngineer()
        } else {
            createTeam()
        }
    })
}

function addIntern() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',

        },
        {
            type: 'input',
            name: 'internId',
            message: 'Whats your Intern ID?',

        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Whats your Intern Email?',

        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Whats your Intern School Name?',

        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamMembers.push(intern)
        menu()
    })
}

function addEngineer() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',

        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Whats your engineers ID?',


        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Whats your engineers Email?',


        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Whats your engineers GitHub username?',


        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers. engineerEmail, answers.engineerGithub)
        teamMembers.push(engineer)
        menu()
    })
}