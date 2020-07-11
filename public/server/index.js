const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");

const app = express();

const db = monk('localhost/poststatus');
const posts = db.get('posts');
const filter = new Filter();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'OK!'
    });
});

app.get('/posts', (req, res) => {
    posts
        .find()
        .then(posts => {
            res.json(posts);
        });
})

function isValidPost(post) {
    return post.title && post.title.toString().trim() !== '' &&
        post.content && post.content.toString().trim() !== '';
}

app.use(rateLimit({
    windowMs: 30*1000, 
    max: 1
}));

app.post('/posts', (req, res) => {
    if(isValidPost(req.body)) {
        //insert to db
        const post = {
            title: filter.clean(req.body.title.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        
        posts
            .insert(post)
            .then(createdPost => {
                res.json(createdPost);
            });
    } else {
        res.status(422);
        res.json({
            message: 'Hey! Title and Content are required!'
        });
    }
})

app.put('/edit', (req, res) => {
    if(isValidPost(req.body)) {
        //insert to db
        const post = { $set: {
            title: filter.clean(req.body.title.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
            }
        };
        
        posts   
            .find()

    } else {
        res.status(422);
        res.json({
            message: 'Hey! Title and Content are required!'
        });
    }
})

app.listen(4000, () => {
    console.log('Listening on http://localhost:4000');
});