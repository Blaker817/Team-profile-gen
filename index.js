const inquirer = require('inquirer')
const output = { manager: {}, engineers: [], interns: [] }
const managersQuestions = [
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


];
const menuQuestions = [{
    type: 'list',
    name: 'menu',
    message: 'Who do you want to add?',
    choices: [
        'Intern',
        'Engineer',
        'Finish',
    ],
},]
const internQuestions = [{
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


]
const engineerQuestions = [{
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


]
function displayEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {

        output.engineers.push(answers)
        displayMenu()
    });
}
function displayIntern() {
    inquirer.prompt(internQuestions).then((answers) => {

        output.interns.push(answers)
        displayMenu()
    });
}
function displayMenu() {
    inquirer.prompt(menuQuestions).then((answers) => {


        if (answers.menu === "Engineer") {
            displayEngineer()
        } else if (answers.menu === "Intern") {
            displayIntern()
        } else {
            console.log(output)

        }

    });
}
function init() {
    inquirer.prompt(managersQuestions).then((answers) => {
        output.manager = answers

        displayMenu()
    });

}

// Function call to initialize app
init();