const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"1234",
    database:"first_try",
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const contra = req.body.password

    db.query(
        "INSERT INTO prueba (username, contra) VALUES (?, ?)",
        [username, contra],
        (err, result) => {
            console.log(err)
        });

})

app.listen(3001,() =>{
    console.log("running server");
});