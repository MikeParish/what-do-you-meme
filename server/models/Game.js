const users = require("./Users");
const CaptionsDeck = require('../models/quoteCards');

const DEAL_AMOUNT = 3;

let iCurrentCaption = 0;

const Players = [ /* array of player objects */
    { Name: 'Bernie', Score: 0, isDealer: false },
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'

];

let CurrentPicture = "";

const CardsInPlay = [];

function SubmitCaption(caption, playerID) {
    const player = Players[playerID];
    if(player.isDealer) { 
        throw Error('Dealer is not allowed to submit a caption')
    }
    CardsInPlay.push({
        Text: caption,
        PlayerID: playerID,
        isChosen: false
    })
}

function Join(userID){
    const user = users.Get(userID);
    Players.push( { Name: user.Name, Score: 0, isDealer: false } )

    const myCards = CaptionsDeck.list.slice(iCurrentCaption, iCurrentCaption + DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

    return { playerID: Players.length -1, myCards }
}

module.exports = {
    Players,  
    PictureDeck, 
    CurrentPicture, 
    CardsInPlay: CardsInPlay, /*returns new array of items, where every item is item in original array*/ 
    SubmitCaption, 
    Join
}