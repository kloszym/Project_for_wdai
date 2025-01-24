const express = require('express');
const app = express();
//const authenticateToken = require('./authenticateToken');
const mysql = require('mysql2');
const cors = require('cors');
app.use(cors());
app.use(express.json());


function connect() {
    const connection = mysql.createConnection({
      host: 'mysql.agh.edu.pl', // Replace with your host
      user: 'sklodows',          // Replace with your username
      password: 'azuChRhS60d9w3mz',      // Replace with your password
      database: 'sklodows'  // Replace with your database name
    });
  
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
      }
      console.log('Connected to the database as ID', connection.threadId);
    });
    return connection;
  }

  app.get('/product/:id', (req, res) =>{
    const db = connect();
    db.query(`SELECT * FROM products WHERE id = ?`, [req.params.id], (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }
      if (!row) {
        return res.status(404).json({ error: 'Produkt nie został znaleziony' });
      }
      return res.json(row);
    });
  })

  app.get('/shop', (req, res) =>{
    const db = connect();
    db.query(`SELECT * FROM products`, [], (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }
      if (!row) {
        return res.status(404).json({ error: 'Produkty nie zostały znalezione' });
      }
      res.json(row);
    });
  })

  app.get('/search/:tytul', (req, res) =>{
    const db = connect();
    const searchProduct = req.params.tytul;
    db.query(`SELECT * FROM products WHERE title LIKE ?`, [`%${searchProduct}%`], (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }
      if (row.length === 0) {
        return res.status(404).json({ error: 'Produkt nie został znaleziony' });
      }
      res.json(row);
    });
  })

  app.get('/user/:login/:password', (req, res) =>{
    const { login, password } = req.params;
    const db = connect();
    db.query(`SELECT * FROM uzytkownicy WHERE username = ?`, [login], (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }
      if (row.length === 0) {
        return res.status(404).json({ error: 'Użytkownik nie został znaleziony' });
      }
    if (row[0].password !== password) {
        return res.status(401).json({ error: 'Niepoprawne hasło' });
    }
    else{
        res.json(row);
    }
    });
  })


  app.post("/register", (req, res) => {
    const { login, password } = req.body;
    console.log('REGISTER ROUTE HIT!');
    console.log('Received Body:', req.body);
  
    if (!login || !password) {
        return res.status(400).json({ 
            message: "Musisz podać login oraz hasło!" 
        });
    }

    const db = connect();

    db.query(`SELECT username FROM uzytkownicy WHERE username = ?`, [login], (err, row) => {
        if (err) {
          return res.status(500).json({ error: 'Błąd serwera' });
        }
        if (row.length === 0) {
            db.query(
                "INSERT INTO uzytkownicy (username, password) VALUES (?, ?)", 
                [login, password], 
                function (err) {
                  if(err) {
                    return res.status(500).json({
                      message: "Błąd serwera!!!!!",
                      error: err
                    });
                  };
              });
        
              res.status(201).json({
                message: "Użytkownik został utworzony"
              });
        }
        else {
            res.status(409).json({
                message: "Użytkownik już istnieje"
            });
        }

    
    })});


  if (require.main === module) {
    const PORT = 3002;
    app.listen(PORT, () => {
      console.log("Serwer włączony!");
    });
  }