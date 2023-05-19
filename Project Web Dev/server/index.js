const express = require('express');
const path = require('path');
require('dotenv').config();

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');

const app = express()
const port = process.env.PORT || 3100;

app
    .use('/', express.static(path.join(__dirname, '../docs')) )

    .use( (req, res, next) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    } )

    .use(express.json())
    .use('/users', usersController )
    .use('/posts', postsController)

app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')) )

app
    .use((err, req, res, next)=>{
        console.error(err);
        res.status(err.code || 500).send(err);
    })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})