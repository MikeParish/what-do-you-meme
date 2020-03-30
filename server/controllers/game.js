const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router(); /* brand new router */

game.SubmitCaption("Corona Sucks", 0);

router
    .use('/quoteCards', (req, res, next) => { 
        console.log({method: req.method, body: req.body});
        next(); /* whatever code you want and then next */
    })
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length - 1])
    })
    .get('/', (req, res) => res.send( {
        Players: game.Players,
        PictureDeck: game.PictureDeck,
        CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x=> ({...x, PlayerID: 'unknown'}))

      }  ) )
    .post('/cardsInPlay', (req, res) => {
        const playerID = 0;
        game.SubmitCaption(req.body.caption, playerID);
    })

module.exports = router;