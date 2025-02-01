import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"blog_site",
    password:"Wizardblack@mysql"
})

export {connection}