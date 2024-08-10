INSERT INTO department (name)
VALUES ('Information Technology'),
('Accounting'),
('Maintenance'),
('Marketing'),
('Public Relations'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ('IT Manager', 95000, '1'), 
('IT Tech', 45000,'1'),
('Accounting Manager', 87000, '2')
('Ledger Accountant', 79000,'2'),
('Maintenance Manager', 85000, '3'),
('Tech Engineer', 65000,'3'),
('R&D', 55000,'4'),
('Speaker', 35000,'5'),
('Hiring Manager', 75000,'6'),
('Assistant Hiring Manager', 45000, '6');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'Wlodawski', 1, NULL),
('Ann', 'Green', 2, 1),
('Greg', 'Thomas', 3, NULL),
('Peter', 'Falk', 4, 2),
('Frank', 'Leeds', 5, NULL),
('James', 'Dean', 6, 3),
('Gregg', 'Jones', 7, NULL),
('Wanda', 'Adams', 7, )


