-- Populate employee table
INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('Tom', 'Tisbo', 0);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Mike', 'Hamilton', 1, 0);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Dan', 'Curzon', 2, 0);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Tony', 'Vester', 3, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Hoppes', 3, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Chase', 'Walton', 3, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Trevor', 'Whitehead', 4, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Katie', 'Nisbet', 5, 0);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Ed ', 'Cange', 6, 8);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Doe', 7, 8);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kevin', 'Webber', 8, 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Regan', 'Something', 9, 11);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kathy', 'Giambri', 10, 11);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Deb', 'Leikel', 10, 11);

-- Populate role table
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('CEO', 500000, 0);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('CFO', 350000, 0);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('VP of Sales', 250000, 1);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Manager', 100000, 1);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Associate', 60000, 1);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Director of Marketing', 250000, 2);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Marketing Manager', 100000, 2);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Brand Manager', 80000, 2);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Director of Finance', 250000, 3);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accounts Payable', 80000, 3);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accounts Receivable', 80000, 3);



-- Populate department table
INSERT INTO department
    (dept_name)
VALUES
    ('Executive');
INSERT INTO department
    (dept_name)
VALUES
    ('Sales');
INSERT INTO department
    (dept_name)
VALUES
    ('Marketing');
INSERT INTO department
    (dept_name)
VALUES
    ('Finance');
