import mysql = require("mysql");

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"pos_db",
    user:"root",
    password:"",
    connectionLimit: 10
});