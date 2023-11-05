const express = require('express');
const app = express();
const session = require('express-session')
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const sessionConfig = {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
}

app.get('/', (req, res) => {

    res.send('homepage');
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        res.render('secret');
    }
})

app.get('/register', async (req, res) => {
    res.render('register')
})

app.get('/login', async (req, res) => {
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash,
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})

app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    console.log(foundUser);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.send('wrong');
    }
})


app.listen(3000, () => {
    console.log('Serving');
})