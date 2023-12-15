const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dbtest'
})


// check if user email does not exist in database
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sql = "SELECT * FROM user WHERE email = ? AND motdepasse = ?";
    db.query(sql, [email, password], (err, result) => {
        if(err) {
            res.send({err: err});
        }
        if(result.length > 0) {
            res.send("Success");
        } else {
            res.send({message: "Wrong email/password combination!"});
        }
    });
});



app.post('/signup', (req, res) => {

    // check if user email does not exist in database
    const sqlCheckEmail = "SELECT * FROM user WHERE email = ?";
    
    db.query(sqlCheckEmail, [req.body.email], (err, result) => {
        if(err) {
            res.send({err: err});
        }
        if(result.length > 0) {
            res.send({message: "Email already exists!"});
        } else {
            // insert user to database
            const sql = "INSERT INTO user (email,nom,prenom,motdepasse) VALUES (?,?,?,?)";
            const email = req.body.email;
            const nom = req.body.nom;
            const prenom = req.body.prenom;
            const password = req.body.password;
            db.query(sql, [email,nom,prenom,password], (err, data) => {
                if (err) {
                    return res.json({error: err});
                }
                return res.json(data);
            })
        }
    })

    
});

app.listen(8080, () => {
    console.log("Server running on port 8080"); 
})
