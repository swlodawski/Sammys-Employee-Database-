-- INSERT INTO department (name)
-- VALUES ('Information Technology'),
-- ('Accounting'),
-- ('Maintenance'),
-- ('Marketing'),
-- ('Public Relations'),
-- ('Human Resources');

-- INSERT INTO role (title, salary, department_id)
-- VALUES ('IT Manager', 95000, '1'), 
-- ('IT Tech', 45000,'1'),
-- ('Accounting Manager', 87000, '2'),
-- ('Ledger Accountant', 79000,'2'),
-- ('Maintenance Manager', 85000, '3'),
-- ('Tech Engineer', 65000,'3'),
-- ('R&D', 55000,'4'),
-- ('Speaker', 35000,'5'),
-- ('Hiring Manager', 75000,'6'),
-- ('Assistant Hiring Manager', 45000, '6');

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('Sam', 'Wlodawski', 1, NULL),
-- ('Ann', 'Green', 2, 1),
-- ('Greg', 'Thomas', 3, NULL),
-- ('Peter', 'Falk', 4, 2),
-- ('Frank', 'Leeds', 5, NULL),
-- ('James', 'Dean', 6, 3),
-- ('Gregg', 'Jones', 7, NULL),
-- ('Wanda', 'Adams', 7, )


INSERT INTO department (name)
VALUES ('Information Technology'),
('Sales'),
('Human Resources'),
('Customer Service'),
('Finance'),
('Marketing'),
('Operations'),
('Adminstrative');

INSERT INTO role (title, salary, department_id)
VALUES ('IT Support', 55000, 1),
('Systems Admin', 90000, 2),
('Sales Rep', 50000, 3),
('Sales Manager', 11000, 4),
('Recruiter', 60000, 5),
('Trainer', 55000, 6),
('Customer Service Rep', 35000, 7),
('Customer Service Manager', 60000, 8),
('Accountant', 60000, 8),
('Auditor', 65000, 6),
('Marketing Research Analyst', 75000, 4),
('Social Media Manager', 60000, 5),
('Logistics Coordinator', 45000, 3),
('Operations Manager', 60000, 5),
('Administrative Assitant', 35000, 1),
('Administrative Supervisor', 55000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Liam', 'Hawthorne', 1, null),
('Aria', 'Montgomery', 2, 1),
('Ethan', 'Blackwood', 3, 2),
('Luna', 'Whitfield', 4, null),
('Noah', 'Kensington', 5, 3),
('Violet', 'Everly', 6, 4),
('Caleb', 'Ashford', 7, 6),
('Ruby', 'Sinclair', 8, 9),
('Owen', 'Thorne', 9, null),
('Zara', 'Kingsley', 10, 8);

-- SELECT * FROM department;