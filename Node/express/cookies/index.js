const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('someSecretString'))

app.get('/greet', (req, res, next) => {
    const { name, color } = req.cookies;
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'someName1');
    res.cookie('color', 'red');
    res.send('sent a cookie');
})

app.get('/sendsignedcookie', (req, res) => {
    res.cookie('fuit', 'mmango', { signed: true });
    res.send('sent a signed cookie');
})

app.get('/verifycookie', (req, res) => {
    console.log(req.singnedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("listening 3000");
})