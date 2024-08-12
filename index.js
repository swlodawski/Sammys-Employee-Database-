const { prompt } = require('inquirer');
// Pulled in inquirer prompt from npm.
const dbConnection = require('./db/index.js');
// Set path for db connection.
// Function to prompt the different question options in application.
function loadQuestions() {
    prompt([ 
    {
        type: 'list',
        name: 'choice',
        message: 'Which would you like to look at',
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
        name: 'Quit',
        value: 'quit'
    },
],
},
])

.then((responses) => {
    console.log(responses);
    const choice = responses.choice;
    console.log(choice);
// Switch case function to view different options in inquirer.
    switch(choice) {
        case 'view_departments':
        viewDepartments().then(loadQuestions);
        break;

        case 'view_roles':
        viewRoles().then(loadQuestions);
        break;

        case 'view_employees':
        viewEmployees().then(loadQuestions);
        break;

        case 'add_department':
        addDepartment();
        break;

        case 'add_role':
        addRole();
        break;

        case 'add_employee':
        addEmployee();
        break;

        case 'update_role':
        updateEmployeeRole();
        break;

        case 'quit':
        quit();
        break;

}});
};

loadQuestions()

// View Departments Function with db connection fetch.
function viewDepartments() {
    return dbConnection.findAllDepartments().then((result) => {
        console.table(result.rows)
    })
}
// View Roles Function with db connection fetch.
function viewRoles() {
    return dbConnection.findAllRoles().then((result) => {
        console.table(result.rows)
    })
}
// View Employees Function with db connection fetch.
function viewEmployees() {
    return dbConnection.findAllEmployees().then((result) => {
        console.table(result.rows)
    })
}
// Add Department Function. Includes questions and promise.
function addDepartment() {
    prompt([
        {
            name: 'name',
            message: 'What is the name of the department',
        }
    ]).then((response) => {
        dbConnection.addDepartment(response).then(() => {
            console.log(`Added ${response.name}`)
            loadQuestions()
    })
    })
}
// Add Role Function. Includes questions and promise.
function addRole() {

    prompt([
        {
            name: 'title',
            message: 'What is the title of the role',
        },
        {
            name: 'salary',
            message: 'What is the salary of the role',
        },
        {
            name: 'department_id',
            message: 'What is the department_id of the role',
        }
    ]).then((response) => {
        dbConnection.addRole(response).then(() => {
            console.log(`Added ${response.title}`)
            loadQuestions()
    })
    })
}
// Add Employee Function. Includes questions and promise.
function addEmployee() {
    prompt([
        {
            name: 'first_name',
            message: 'What is the first name of the employee',
        },
        {
            name: 'last_name',
            message: 'What is the last name of the employee',
        },
        {
            name: 'role_id',
            message: 'What is the role_id of the emplyee',
        },
        {
            name: 'manager_id',
            message: 'What is the manager_id of the employee',
        }
    ]).then((response) => {
        dbConnection.addEmployee(response).then(() => {
            console.log(`Added ${response.first_name}`)
            loadQuestions()
    })
    })
}

function quit() {
   console.log('Quit');
}