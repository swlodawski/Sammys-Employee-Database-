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
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    },
    {
        name: 'view all departments',
        value: 'view departments'
    }
]   
    }
    ])
}