const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'This is so funny',
    },
    {
        id: uuid(),
        username: 'Abe',
        comment: 'This is soo great hahahah',
    },
    {
        id: uuid(),
        username: 'Bob',
        comment: 'Wtf is this lmao',
    },
    {
        id: uuid(),
        username: 'Tony',
        comment: 'Hey bro how you been?',
    }
]

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    let foundComment = comments.find(c => c.id === id);
    const newComment = req.body.comment;
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.get('/comments/new', (req, res) => {
    console.log('NEW COMMENT REQUEST');
    res.render('comments/new');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})


app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const id = uuid();
    comments.push({ username, comment, id });
    // res.send('it worked');
    res.redirect('/comments');
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log('on port 3000');
})