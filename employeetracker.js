var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

// Search
function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "Add employee",
        "Update employee role",
        "View roles",
        "Add role",
        "View departments",
        "Add department",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View all employees":
          allEmployees();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "Update employee role":
          updateEmployeeRole();
          break;

        case "View roles":
          viewRoles();
          break;

        case "Add role":
          addRole();
          break;

        case "View departments":
          viewDepartments();
          break;

        case "Add department":
          addDepartment();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

// View all employees
function allEmployees() {
  var query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(`Name: ${res[i].first_name} ${res[i].last_name}`);
    }
    runSearch();
  });
}

// View roles
function viewRoles() {
  var query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(`Role: ${res[i].title}  ||  Salary: $${res[i].salary}`);
    }
    runSearch();
  });
}

// View departments
function viewDepartments() {
  var query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(`Department: ${res[i].dept_name}`);
    }
    runSearch();
  });
}

// Add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "role",
        type: "list",
        choices: [
          "Sales Manager",
          "Sales Associate",
          "Accounts Payable",
          "Accounts Receivable"
        ],
        message: "What is the employee's role?"
      }
    ])
    .then(function(answer) {
      var roleId = null;
      var managerId = null;

      if ((answer.role = "Sales Manager")) {
        roleId = 4;
        managerId = 3;
      }
      if ((answer.role = "Sales Associate")) {
        roleId = 5;
        managerId = 3;
      }
      if ((answer.role = "Accounts Payable")) {
        roleId = 10;
        managerId = 11;
      }
      if ((answer.role = "Accounts Receivable")) {
        roleId = 11;
        managerId = 11;
      }

      connection.query(
        "INSERT INTO employee SET ?",

        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: roleId,
          manager_id: managerId
        },

        function(err) {
          if (err) throw err;
          console.log("Employee added successfully!");
          runSearch();
        }
      );
    });
}

// Add role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the new role?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the new role?"
      },
      {
        name: "dept",
        type: "list",
        choices: ["Executive", "Sales", "Marketing", "Finance"],
        message: "What department will the new role be in?"
      }
    ])
    .then(function(answer) {
      dept_id = null;

      if ((answer.dept = "Executive")) {
        dept_id = 1;
      }
      if ((answer.dept = "Sales")) {
        dept_id = 2;
      }
      if ((answer.dept = "Marketing")) {
        dept_id = 3;
      }
      if ((answer.dept = "Finance")) {
        dept_id = 4;
      }

      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: dept_id
        },
        function(err) {
          if (err) throw err;
          console.log("Role added successfully!");
          runSearch();
        }
      );
    });
}

// Add department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the new department?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          dept_name: answer.name
        },
        function(err) {
          if (err) throw err;
          console.log("Department added successfully!");
          runSearch();
        }
      );
    });
}

// Update employee roles
function updateEmployeeRole() {
  connection.query("SELECT * FROM employee", function(err, results) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "employee",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].first_name + results[i].last_name);
            }
            return choiceArray;
          },
          message: "Which employee's role would you like to update?"
        },
        {
          name: "role",
          type: "list",
          choices: [
            "Sales Manager",
            "Sales Associate",
            "Accounts Payable",
            "Accounts Receivable"
          ],
          message: "What new role would you like to assign?"
        }
      ])
      .then(function(answer) {
        var roleId = null;
        var managerId = null;

        if ((answer.role = "Sales Manager")) {
          roleId = 4;
          managerId = 3;
        }
        if ((answer.role = "Sales Associate")) {
          roleId = 5;
          managerId = 3;
        }
        if ((answer.role = "Accounts Payable")) {
          roleId = 10;
          managerId = 11;
        }
        if ((answer.role = "Accounts Receivable")) {
          roleId = 11;
          managerId = 11;
        }

        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (
            results[i].first_name + results[i].last_name ===
            answer.employee
          ) {
            chosenItem = results[i];
          }
        }

        connection.query(
          "UPDATE employee SET ? WHERE ?",
          [
            {
              role_id: roleId,
              manager_id: managerId
            },
            {
              id: chosenItem.id
            }
          ],
          function(err) {
            if (err) throw err;
            console.log("Employee role succsesfully changed!");
            runSearch();
          }
        );
      });
  });
}

// function songSearch() {
//     inquirer
//       .prompt({
//         name: "song",
//         type: "input",
//         message: "What song would you like to look for?"
//       })
//       .then(function(answer) {
//         console.log(answer.song);
//         connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//           if (err) throw err;
//           console.log(
//             "Position: " +
//               res[0].position +
//               " || Song: " +
//               res[0].song +
//               " || Artist: " +
//               res[0].artist +
//               " || Year: " +
//               res[0].year
//           );
//           runSearch();
//         });
//       });

// Update employee roles
