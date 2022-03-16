const mysql =require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json);


var mysqlConnection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database: 'employeeDB'

});
mysqlConnection.connect((err)=>{
if(!err)
    console.log('DB connection succeded');
else
    console.log('DB connection failed \n Error:'+JSON.stringify(err, undefined,2));

});
app.listen(3000,()=>console.log('Express server is running'));
app.get('/employees',(res,req)=>{
mysqlConnection.query('SELECT * FROM employee',(err, rows, field)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);
})
});