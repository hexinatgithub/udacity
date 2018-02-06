/*
 * Create a list that holds all of your cards
 */
var Game = function () {
    this.openCards = [];
    this.matchCards = [];
    this.cards = document.getElementsByClassName("card");
    this.cardsClass = [];
};
Game.prototype = {
    init: function () {
        for (var i = 0; i < this.cards.length; i++) {
            let card = new Card(this.cards[i]);
            card.element.onclick = function (game) {
                return function () {
                    card.open();
                    game.addToOpenCards(card);
                    let haveOtherCard = game.openCards.length == 2;
                    if (haveOtherCard) {
                        let anotherCard = game.cards[0];
                        if (game.match(card, anotherCard)) {
                            alert("success")
                        }
                    }
                }
            }(this);
            this.cardsClass.push(card);
        };
    },
    addToOpenCards: function (card) {
        this.openCards.push(card);
    },
    match: function (card0, card1) {
        return card0.symbol == card1.symbol;
    }
};

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */




var Card = function (element) {
    this.element = element;
    this.symbol = element.firstChild.classList;
};
Card.prototype = {
    open: function () {
        this.element.classList.add("open", "show")
    },
    close: function () {
        this.element.classList.remove("open", "show");
    },
};


var game = new Game();
game.init();