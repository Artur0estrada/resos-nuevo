const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"resosten_dbmaster",
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const nombre = req.body.nombre
    const a_paterno = req.body.a_paterno
    const a_materno = req.body.a_materno
    const celular = req.body.celular
    const email = req.body.email
    const password = req.body.password

    db.query(
        "INSERT INTO usuario (username, nombre, a_paterno, a_materno, celular, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [username, nombre, a_paterno, a_materno, celular, email, password],
        (err, result) => {
            console.log(err)
        });
})

app.listen(3001,() =>{
    console.log("running server");
});