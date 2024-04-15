// Import required modules
const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const path = require('path');

// Create Express app
const app = express();

// Configure database connection
const db = mysql.createConnection({
    host: 'host.docker.internal',
    user: 'root',
    password: '',
    database: 'urbanhair'
});

// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Set the directory to serve static files like CSS, JavaScript, and images
app.use(express.static(path.join(__dirname, 'public')));

// Import and configure login route
const loginRoute = require('./route/login')(db);
app.use('/user', loginRoute);

const signupRoute = require('./route/signup')(db);
app.use('/user/signup', signupRoute);

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});



// Serve the booking page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/Index.html'));
});


// Serve the quotes page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/signup.html'));
});


app.get('/slot', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/Slot.html'));
});



// Serve the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/signup.html'));
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});