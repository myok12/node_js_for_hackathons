var mysql = require("mysql");
var express = require('express');

// Creates the connection
var dbConn = mysql.createConnection({
    user: "root",
    password: "",
    database: "test"
});

var app = express();

app.get('/', function(request, response) {
    // Queries the database
    dbConn.query('SELECT * from employees where salary>?', [60000], function(err, results) {
        // Send data as JSON string.
        console.log(results);
        response.send(results);
    });
});

console.log('server listening on port 8025');
app.listen(8025);
