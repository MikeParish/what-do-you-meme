const express = require('express');
const gameController = require('./controllers/game');
const usersController = require('./controllers/users');
const path = require('path')

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist')) /* returns a function every time a request comes in */
    .get('/', (req, res) => res.send('This class is awesome!') )
    .use('/game', gameController)
    .use('/users', usersController)

    .use((req, res) => {
        const homePath = path.join(__dirname + '/../client/dist/index.html');
        console.log(homePath);
        res.sendFile(homePath)
    })
    .use( (err, req, res, next )  => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send( { message: err.message } );
    })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));