const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router(); /* brand new router */

router
    .post('/join', (req, res) => res.send(game.Join(req.body.userID)) )
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
        const playerID = req.body.playerID;
        game.SubmitCaption(req.body.caption, playerID);
        res.send({ success: true })
    })

module.exports = router;