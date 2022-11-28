const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: "userId",
    secret: "1.d4Nf62.c4g63.Nc3d54.cxd5Nxd55.e4Nxc36.bxc3Bg77.Bb5+c68.Ba4O-O9.Ne2Nd710.O-Oe511.f3Qe712.Be3Rd813.Qc2Nb614.Bb3Be615.Rad1Nc416.Bc1b517.f4exd418.Nxd4Bg419.Rde1Qc520.Kh1a521.h3Bd722.a4bxa423.Ba2Be824.e5Nb625.f5Nd526.Bd2Nb427.Qxa4Nxa228.Qxa2Bxe529.fxg6hxg630.Bg5Rd531.Re3Qd632.Qe2Bd733.c4Bxd434.cxd5Bxe335.Qxe3Re836.Qc3Qxd537.Bh6Re538.Rf3Qc539.Qa1Bf540.Re3f641.Rxe5Qxe542.Qa2+Qd543.Qxd5+cxd544.Bd2a445.Bc3Kf746.h4Ke647.Kg1Bh348.gxh3Kf549.Kf2Ke450.Bxf6d451.Be7Kd352.Bc5Kc453.Be7Kb30-1",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}));


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"resosten_dbmaster",
});

app.get('/appointments', (req, res) =>{
    var connection = mysql.createConnection(db)
    connection.query('SELECT * FROM servicio', (err, rows) => {
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(rows)
        }
    })
})


app.post("/register", (req, res) => {

    const username = req.body.username
    const nombre = req.body.nombre
    const a_paterno = req.body.a_paterno
    const a_materno = req.body.a_materno
    const celular = req.body.celular
    const email = req.body.email
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) =>{
        if (err ){
            console.log(JSON.stringify(err));
        }
        db.query(
            "INSERT INTO usuario (username, nombre, a_paterno, a_materno, celular, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [username, nombre, a_paterno, a_materno, celular, email, hash],
            (err, result) => {
                console.log(JSON.stringify(err));
            });
        });
    });


app.get("/sesion", (req, res)=>{
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

app.post('/sesion', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM usuario WHERE username = ?",
        [username],
        (err, result) =>{
            if(err){
                res.send({err: err})
            }
            if(result.length > 0){
                    bcrypt.compare(password, result[0].password, (error, response) =>{
                        if(response){
                            req.session.user = result;
                            console.log(req.session.user);
                            res.send(result);
                        } else {
                            res.send({message: "Wrong combination"});
                        }
                    })
                } else {
                    res.send({message: "User doesn't exist"});
                }
        }
    )
});


app.get('/appointments', (req, res) =>{
    var connection = mysql.createConnection(db)
    connection.query('SELECT * FROM servicio', (err, rows) => {
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(rows)
        }
    })
})

app.listen(3001,() =>{
    console.log("running server");
});