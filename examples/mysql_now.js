var mysql = require("mysql");

// Creates the connection
var dbConn = mysql.createClient({
    user: "root",
    password: "",
    database: "mydb"
});

// Queries the database
dbConn.query('SELECT * from employees where salary>?', [60000], function(err, results) {
    // Send data as JSON string.
    console.log(results);
});
