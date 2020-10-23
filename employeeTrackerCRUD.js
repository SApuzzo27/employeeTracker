var mysql = require("mysql");

var connection = mysql.createConnection({
host: "localhost",

  // Your port; if not 3306
port: 3306,

  // Your username
user: "root",

  // Your password
password: "",
database: "employeeTrackerDB"
});

connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId + "\n");
createEmployee();
});

function createEmployee() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
    "INSERT INTO employee SET ?",
    {
    first_name: "",
    last_name: "",
    role_id: "",
    manager_id: "",
    },
    function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " employee inserted!\n");
    // Call updateEmployee AFTER the INSERT completes
    updateEmployee();
    }
);

  // logs the actual query being run
    console.log(query.sql);
}

function updateEmployee(){

}

function deleteEmployee(){

}

function readEmployee(){

}


