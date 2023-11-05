const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connection successful');
    }).catch((err) => {
        console.log(err);
    });

const movieSchema = new mongoose.Schema({ //This is the schema
    title: String,
    year: Number,
    score: Number,
    rating: String,
})

const Movie = mongoose.model('Movie', movieSchema); //This is the model, the name is impt

// const amadeusXXX = new Movie({ title: 'amadeusXXX', year: 1986, score: 9.2, rating: 'R', });
// await amadeusXXX.save();

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log(data);
//     });

