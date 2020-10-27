var mysql = require("mysql");
var inquirer = require("inquirer");
// const { readFile } = require("fs/promises");

var connection = mysql.createConnection({
host: "localhost",

  // Your port; if not 3306
port: 3306,

  // Your username
user: "root",

  // Your password
password: "Charlie27!",
database: "employeeTrackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
  });
  
  function start() {
      inquirer
      .prompt({
          name: "addViewUpdate",
          type: "list",
          message: "What Would You Like To DO?",
          choices: ["ADD EMPLOYEE","VIEW EMPLOYEE","UPDATE EMPLOYEE", "ADD DEPARTMENT",  "VIEW DEPARTMENNT", "ADD ROLE", "VIEW ROLE", "EXIT"]
      })
      .then(function(answer) {
          // based on their answer, either add, update, or view files
          if (answer.addViewUpdate === "ADD EMPLOYEE") {
          addEmployee();
          }
          else if(answer.addViewUpdate === "VIEW EMPLOYEE") {
          viewEmployee();
          } 
          else if(answer.addViewUpdate === "UPDATE EMPLOYEE") {
          updateEmployee();
          }else if(answer.addViewUpdate === "EXIT") {
          connection.end();
          }
          // updateFile()
      });
  }
  
  // function addFile() {
  //     console.log("Inserting a new file...\n");
  
  //     inquirer
  //     .prompt([
  //     {
  //     name: "first_name",
  //     type: "input",
  //     message: "What is the employee's first name?"
  //     },
  //     {
  //     name: "last_name",
  //     type: "input",
  //     message: "What is the employees last name?"
  //     },
  //     {
  //         name: "role_id",
  //         type: "input",
  //         message: "What is the employees role id?"
  //         },
  //     {
  //     name: "manager_id",
  //     type: "input",
  //     message: "Who is the employees manager (by id) ?",
  //     validate: function(value) {
  //         if (isNaN(value) === false) {
  //         return true;
  //         }
  //         return false;
  //     }
  //     }
  // ])
  // .then(function(answer) {
  //     var query = connection.query(
  //     "INSERT INTO employee SET ? ? ? ? ",
  //     {
  //     first_name: answer.first_name,
  //     last_name: answer.last_name,
  //     role_id: answer.role_id,
  //     manager_id: answer.manager_id,
  //     },
  
  //     // console.table (answer)
  //     function(err, res) {
  //     if (err) throw err;
  //     console.log(res.affectedRows + " employee inserted!\n");
  //     // Call updateEmployee AFTER the INSERT completes
  //     // updateEmployee();
  //     }
  // );
  // });
  
  //   // logs the actual query being run
  //     console.log(query.sql);
  // }
  
  // // function updateEmployee(){
  
  // // }
  
  // function deleteFile() {
  //     console.log("Deleting all ..\n");
  //     connection.query(
  //     "DELETE FROM ? WHERE ?",
  //     {
  //         id: ""
  //     },
  //     function(err, res) {
  //         if (err) throw err;
  //         console.log(res.affectedRows + " products deleted!\n");
  //         // Call readProducts AFTER the DELETE completes
  //         readFile();
  //     }
  //     );
  // }
  
  // // function viewFile(){
  
  // // }
  
  
// connection.connect(function(err) {
// if (err) throw err;
// console.log("connected as id " + connection.threadId + "\n");
// createEmployee();
// });

// function createEmployee() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//     "INSERT INTO employee SET ?",
//     {
//     first_name: "",
//     last_name: "",
//     role_id: "",
//     manager_id: "",
//     },
//     function(err, res) {
//     if (err) throw err;
//     console.log(res.affectedRows + " employee inserted!\n");
//     // Call updateEmployee AFTER the INSERT completes
//     updateEmployee();
//     }
// );

//   // logs the actual query being run
//     console.log(query.sql);
// }

// function updateEmployee(){

// }

// function deleteEmployee(){

// }

// function readEmployee(){

// }


