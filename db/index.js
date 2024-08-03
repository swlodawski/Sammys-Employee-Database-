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
        return this.query('SELECT * FROM  department')
    }

    findAllEmployees() {
        return this.query('SELECT employee_id, employee.first_name, employee.last_name, role.title AS role_name, role.salary, manager.first_name, AS manager_first, manager.last_name AS manage _last FROM employee JOIN role ON employee.role _id = role.id JOIN employee AS manager ON employee.manager_id = manager.id')
    }
}