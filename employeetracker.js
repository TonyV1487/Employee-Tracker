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
        "View all employees by Department",
        "View all employees by Manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "View roles",
        "View managers",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View all employees":
          allEmployees();
          break;

        case "View all employees by Department":
          employeeByDepartment();
          break;

        case "View all employees by Manager":
          employeeByManager();
          break;

        // case "Add a role":
        //   addRole();
        //   break;

        //   case "View employees":
        //     viewRoles();
        //     break;

        //   case "Add an employee":
        //     addRole();
        //     break;

        case "exit":
          connection.end();
          break;
      }
    });
}

// Add departments, roles, employees

// View departments, roles, employees
// function viewCompany(){
//     inquirer.pro
// }

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
