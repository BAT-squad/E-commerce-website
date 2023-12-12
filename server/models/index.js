const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YAHYAyahya1234',
    database: 'ecommerce'
})

connection.connect((err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('Connected to MySql');
    }
})


module.exports = connection