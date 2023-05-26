// UserInterface.js

const Scorecard = require('./scorecard');

class UserInterface {
    constructor() {
        this.scorecard = new Scorecard();
    }

    addFrame(firstRoll, secondRoll) {
        this.scorecard.addFrame(firstRoll, secondRoll);
    }

    viewScore() {
        return this.scorecard.calculateScore();
    }
}

module.exports = UserInterface;