USE employeeDb;
-- departments
INSERT INTO departments (name) VALUES
("Marketing"),
("Sales"),
("Operations"),
("Engineering"),
("Finance");

--roles
INSERT INTO role (title, salary, department_id) VALUES 
("Accountant Manager", 100000, 1),
("Financial Associate", 62000, 1),
("Sales Manager", 90000, 2),
("Sales Associate", 50000, 2),
("Operations Manager", 80000, 3),
("Operations Associate", 50000, 3),
("Chef Engineer", 210000, 4),
("Engineer", 100000, 4),
("HR Manager", 80000, 5),
("HR Associate", 60000, 5);

-- employee data
INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id) VALUES
("Angie", "Ryes", 5, NULL, 3),
("Raul", "Fernandez", 8, 1, 4),
("Charlie", "Brownz", 3, NULL, 2),
("Samantha ", "Apuzzo", 1, NULL, 1),
("Mary", "Jane", 6, 2, 3),
("Danny", "Marj", 2, 4, 1),
