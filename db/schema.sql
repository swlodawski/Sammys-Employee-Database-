DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;
-- DB create and drop commands
\c hr_db;
-- Created Department Table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);
-- Created Role Table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);
-- Created Employee Table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY(role_id)
    REFERENCES role(id),
    FOREIGN KEY(manager_id)
    REFERENCES employee(id)
);