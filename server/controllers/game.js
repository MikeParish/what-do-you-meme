const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router(); /* brand new router */

router.use(function(req, res, next) {
    if(req.userID != null) {
        req.PlayerID = game.GetPlayerID(req.userID)
    }
    console.log({ userID: req.userID, playerID: req.playerID })
    next();
})

router
    .post('/join', (req, res) => res.send(game.Join(req.userID)) )
    .post('/flipPicture', (req, res) => res.send(game.FlipPicture()) )
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
        game.SubmitCaption(req.body.caption, req.playerID);
        res.send({ success: true })
    })

module.exports = router;