const express = require('express')
const cors = require('cors')
const mysql = require('mysql2');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  password: 'password'
});

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', function (req, res, next) {
    res.send('Hello World! from server')
})

app.get('/users', function (req, res, next) {
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
          res.send(results);
        }
    );
})

app.post('/register',async function (req, res, next) {
    const salt = 10
    const password = await bcrypt.hash(req.body.password, salt)
    connection.query(
      'INSERT INTO users(fname, lname, email, password, avatar) VALUES (?, ?, ?, ?, ?)',
      [req.body.fname, req.body.lname, req.body.email, password, req.body.avatar],
      function(err, results) {
        if(err) {
            return res.status(400).send('Email already exists')
        }
        res.send(results);
      }
    );
})

app.post('/login', function (req, res, next) {
    const { email, password } = req.body
    if(!email) {
        return res.status(400).send({message:'Email is required'})
    }
    if(!password) {
        return res.status(400).send({message:'Password is required'})
    }
    connection.query(
      'SELECT id,email,password FROM users WHERE email = ?',
      [email],
      async function(err, results) {
        if(err) {
            return res.status(500).send({message:'Server error'})
        }
        if(results.length === 0) {
            return res.status(404).send({message:'User not found'})
        }
        const user = results[0]
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).send({message:'Invalid credentials'})
        }
        // create token jwt
        const token = jwt.sign(
            { id: user.id, email: user.email },
            "secret",
            { expiresIn: "5h" }
        )
        res.send({message:'Login success', token});
      }
    );
})

app.get('/me', function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) {
            return res.status(401).send({message:'Invalid credentials'})
        }
        const data = jwt.verify(token, "secret")
        if(!data) {
            return res.status(401).send({message:'Invalid credentials'})
        }
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [data.id],
            function(err, results) {
              if(err) {
                  return res.status(500).send({message:'Server error'})
              }
              if(results.length === 0) {
                  return res.status(404).send({message:'User not found'})
              }
              const user = results[0]
              res.send(user);
            }
        );
    } catch (error) {
        return res.status(401).send({message:'Invalid credentials'})
    }
})

// create psot
app.post('/posts', function (req, res, next) {
    const { body } = req.body
    if(!body) {
        return res.status(400).send({message:'Body is required'})
    }
    connection.query(
      'INSERT INTO posts(body, user_id) VALUES (?, ?)',
      [body, userId],
      function(err, results) {
        if(err) {
            return res.status(500).send({message:'Server error'})
        }
        res.send(results);
      }
    );
})



app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
})