const {prompt} = require('inquirer');
const dbConnection = require('./db/index.js');

function loadQuestions() {
    prompt([
    {   type: 'list',
        name: 'choice',
        message: 'Make a category selection',
        choices: [
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
            case 'view_departments':
            viewDepartments().then(loadQuestions);
            break;

            case 'view_roles':
            viewDepartments().then(loadQuestions);
            break;

            case 'view_employees':
            viewDepartments().then(loadQuestions);
            break;

            case 'add_department':
            viewDepartments().then(loadQuestions);
            break;

            case 'add_role':
            viewDepartments().then(loadQuestions);
            break;

            case 'add_employee':
            viewDepartments().then(loadQuestions);
            break;
            
            case 'update_role':
            viewDepartments().then(loadQuestions);
            break;

            case 'quit':
            quit();
            break;
        }
    }));
    };

    loadQuestions();

    function viewDepartments() {
        return dbConnection.findAllDepartments().then((result) => {
            console.table(result.rows)
        })
    } 
    function viewRoles() {
        return dbConnection.findAllRoles().then((result) => {
            console.table(result.rows)
        })
    }
    function viewEmployees() {
        return dbConnection.findAllEmployees().then((result) => {
            console.table(result.rows)
        })
    }
    function addDepartment() {
        prompt([
            {
                name: 'name',
                message: 'Create a new department',
            }
        ])
        .then((response) => {
            dbConnection.addDepartment(response).then(() => {
                console.log(`Added ${response.name}`)
                loadQuestions
            })
        })

    function addRole() {
        prompt([
            {
                name: 'title',
                message: 'please provide a job title'
            },
            {
                name: 'salary',
                message: 'please provide an employee salary'
            },
            {
                name: 'department_id',
                message: 'please provide a department_id'
            }
        ]).then((response) => {
            dbConnection.addRole(response).then((response) => {
                console.log(`Added ${response.title}`)
                loadQuestions()
            })
        })
    }

    function addEmployee() {
        
    }
    }

    