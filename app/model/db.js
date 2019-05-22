const mysql = require('mysql');
const  connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"12345",
    databse:"mapdata"
});

connection.connect(function(err)
{
    if(err) throw err;
})
module.exports = connection;