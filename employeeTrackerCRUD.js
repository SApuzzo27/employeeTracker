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
          }
          else if (answer.addViewUpdate === "ADD DEPARTMENT") {
            addDepartment();
          }
          else if(answer.addViewUpdate === "VIEW DEPARTMENT") {
            viewDepartment();
          } 
          else if(answer.addViewUpdate === "ADD ROLE") {
            addRole();
          }
          else if(answer.addViewUpdate === "VIEW ROLE") {
            viewRole();
          } 
          else if(answer.addViewUpdate === "EXIT") {
          connection.end();
          }
      });
  }
  
  function addEmployee() {
      console.log("Inserting a new employee...\n");
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
      message: "What is the employees last name?"
      },
      {
          name: "role_id",
          type: "input",
          message: "What is the employees role id?"
          },
      {
      name: "manager_id",
      type: "input",
      message: "Who is the employees manager (by id) ?",
      validate: function(value) {
          if (isNaN(value) === false) {
          return true;
          }
          return false;
      }
      }
  ])
  .then(function(answer) {
      var query = connection.query(
      "INSERT INTO employee SET ?",
      {
      first_name: answer.first_name,
      last_name: answer.last_name,
      role_id: answer.role_id,
      manager_id: answer.manager_id,
      },
  

      function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // Call updateEmployee AFTER the INSERT completes
      // updateEmployee();
      }
  );
  });

};

function addDepartment() {
  console.log("Inserting a new department...\n");
  inquirer
  .prompt([
  {
  name: "name",
  type: "input",
  message: "What is the department name?",
  }
])
.then(function(answer) {
  var query = connection.query(
  "INSERT INTO department SET ?",
  {
  name: answer.name,
  },


  function(err, res) {
  if (err) throw err;
  console.log(res.affectedRows + " department inserted!\n");
  // Call updateEmployee AFTER the INSERT completes
  // updateDepartment();
  }
);
});

};  

function addRole() {
  console.log("Inserting a new role...\n");
  inquirer
  .prompt([
  {
  name: "title",
  type: "input",
  message: "What is the role's title"
  },
  {
  name: "salary",
  type: "input",
  message: "What is the role's salary?"
  },
  {
      name: "role_id",
      type: "input",
      message: "What is the role's department id?",
  }
])
.then(function(answer) {
  var query = connection.query(
  "INSERT INTO role SET ?",
  {
  title: answer.title,
  salary: answer.salary,
  department_id: answer.department_id,
  },


  function(err, res) {
  if (err) throw err;
  console.log(res.affectedRows + " role inserted!\n");
  // Call updateEmployee AFTER the INSERT completes
  // updateEmployee();
  }
);
});

};
    // // logs the actual query being run
    //   console.log(query.sql);
  
  // function updateEmployee(){
  // console.log("Updating Employees...\n");
  // var query = connection.query(query,{employee: answer.employee}(
  //   "UPDATE employee SET ? WHERE ? ",
  //   [
  //     {
  //       first_name: answer.first_name
  //     },
  //     {
  //       last_name: answer.last_name,
  //     },
  //     {
  //       role_id: answer.role_id,
  //     },
  //     {
  //       manager_id: answer.manager_id,
  //     },
  //   ],
  //   function(err, res) {
  //     if (err) throw err;
  //     console.log(res.affectedRows + " products updated!\n");
  //     // Call deleteProduct AFTER the UPDATE completes
  //     // deleteProduct();
  //   }
    
  // ));
  // updateEmployee()
  // };


  // // logs the actual query being run
  // console.log(query.sql);

  // }
  
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
  
  // // function viewEmployee(){
  
  // // }
  
  
// connection.connect(function(err) {
// if (err) throw err;
// console.log("connected as id " + connection.threadId + "\n");
// createEmployee();
// });


