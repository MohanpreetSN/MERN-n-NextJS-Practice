const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("got a reques");
//     res.send('<h1>This is my webpage</h1>');
// })

app.get('/', (req, res) => {
    res.send("welcome to the homepage");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>this is the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(req.params);
    res.send(`<h1>Post ${postId} of the ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req, res) => {
    console.log("Cat request");
    res.send('meow');
})

app.post('/cats', (req, res) => {
    console.log("Cat request");
    res.send('This is a post request to cats');
})

app.get('/dogs', (req, res) => {
    console.log("Dog request");
    res.send('woof');
})

app.listen(8080, () => {
    console.log("listening on port 8080");
})

app.get('*', (req, res) => {
    console.log("Dog request");
    res.send('this is a generic response');
})

