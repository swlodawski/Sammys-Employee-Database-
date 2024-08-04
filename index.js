const {prompt} = require('inquirer');
const dbConnection = require('./db/index.js');

function loadQuestions() {
    prompt([
    {   type: 'list',
        name: 'choice',
        message: 'Make a category selection'
    [
    {
        name: 'view all departments',
        value: 'view_departments'
    },
    {
        name: 'view all roles',
        value: 'view_roles'
    },
    {
        name: 'view all employees',
        value: 'view_employees'
    },
    {
        name: 'add a department',
        value: 'add_department'
    },
    {
        name: 'add a role',
        value: 'add_role'
    },
    {
        name: 'add an employee',
        value: 'add_employee'
    },
    {
        name: 'update an employee role',
        value: 'update_role'
    },
    {
        name: 'quit',
        value: 'quit'
    },
    ],
    },
    ])
    .then((responses => {
        console.log(responses);
        const choice = responses.choice;
        console.log(choice);

        switch(choice) {
            
        }
    }))
    }
