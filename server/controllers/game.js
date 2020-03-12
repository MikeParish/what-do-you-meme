const express = require('express');

const quoteCards = require('../models/quoteCards');

const router = express.Router(); /* brand new router */

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

module.exports = router;