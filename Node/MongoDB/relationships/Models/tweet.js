const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('Connection successful');
    }).catch((err) => {
        console.log(err);
    });

const userSchema = mongoose.Schema({
    username: String,
    age: Number,
})

const tweetSchema = mongoose.Schema({
    text: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user1 = new User({ username: 'abc123', age: 45 });
    const user1 = await User.findOne({ username: 'abc123' });
    const t2 = new Tweet({ text: 'bock bock bock chickens', likes: 1231 });
    t2.user = user1;
    t2.save();
}

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user');
    console.log(t);
}

// makeTweets();
findTweet();