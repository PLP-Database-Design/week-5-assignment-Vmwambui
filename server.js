const express = require('express')
const app = express()
const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

app.get('provider', (req, res) => {
    const query = 'SELECT first_name,last_name,provider_specialty FROM provider';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

app.get('patients', (req, res) => {
    const query = 'SELECT first_name FROM patients';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

app.get('provider', (req, res) => {
    const query = 'SELECT provider_specialty FROM provider';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(server is runnig on http://localhost:${PORT})
})
const express = require('express')
const app = express()
const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

app.get('provider', (req, res) => {
    const query = 'SELECT first_name,last_name,provider_specialty FROM provider';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON response with patient data
    });
});

app.get('patients', (req, res) => {
    const query = 'SELECT first_name FROM patients';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Send JSON …
