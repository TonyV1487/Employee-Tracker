DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department
(
    id INT NOT NULL
    AUTO_INCREMENT,
dept_name VARCHAR
    (30) NULL,
PRIMARY KEY
    (id)
);


    CREATE TABLE role
    (
        id INT NOT NULL
        AUTO_INCREMENT,
title VARCHAR
        (30) NULL,
salary DECIMAL
        (10,2) NULL,
department_id INT NULL,
PRIMARY KEY
        (id)
);


        CREATE TABLE employee
        (
            id INT NOT NULL
            AUTO_INCREMENT,
first_name VARCHAR
            (30),
last_name VARCHAR
            (30),
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY
            (id)
)



            SELECT *
            FROM department;
            select *
            from role;
            select *
            from employee;