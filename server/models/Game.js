const CurrentUser = require("./Users");

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
    CardsInPlay.push({
        Text: caption,
        PlayerID: playerID,
        isChosen: false
    })
}

function Init(){
    /* need to rework this */
    Players.push({Name: CurrentUser.Name, Score: 0, isDealer: true})

    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1])

    CurrentPicture = PictureDeck[0];
}

module.exports = {
    Players, 
    MyCards, 
    PictureDeck, 
    CurrentPicture, 
    CardsInPlay: CardsInPlay, /*returns new array of items, where every item is item in original array*/ 
    SubmitCaption, 
    Init
}