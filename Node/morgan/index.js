const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use('/dogs', (req, res, next) => {
    console.log("this only runs for dogs");
    next();
})

app.listen(3000, () => {
    console.log('listening 3000');
})

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/dogs', (req, res) => {
    res.send('woof woof')
})

// app.use((req, res, next) => {
    //     console.log('First middleware');
    //     next();
    // })
    // app.use((req, res, next) => {
    //     console.log('2nd middleware');
    //     next();
    // })
