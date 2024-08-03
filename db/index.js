const connection = require('./connection');

class databaseConnection {
    constructor() {
        
    }
    async query(query, args = []) {
        const link = await connection.connect()
        const result = await link.query(query, args)
        link.release()
        return result;
    }

    findAllDepartments() {
        return this.query(`SELECT * FROM  department`)
    }

    findAllEmployees() {
        return this.query(`SELECT employee_id, employee.first_name, employee.last_name, role.title AS role_name, role.salary, manager.first_name, AS manager_first, manager.last_name AS manage _last FROM employee JOIN role ON employee.role _id = role.id JOIN employee AS manager ON employee.manager_id = manager.id`)
    }

    findAllRoles() {
        return this.query(`SELECT role.id, role.title, role.salary, depertment.name FROM role JOIN department ON  role.department_id = department.id `)
    }
    addDepartment(department) {
        return this.query(`INSERT INTO department (name) VALUES ($1)`, [department.name] )
    }
    addEmployee(employee) {
        return this.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [employee.first_name, employee.last_name, employee.role_id, employee.manager_id])
    }
}

module.exports = new databaseConnection();