// scorecard.js

const Frame = require('./frame');
//define a class to handle the scorecard of the game
class Scorecard {
    constructor() {
        //start a card with a clean frames
        this.frames = [];
    }
//a method for adding a frame to the scorecard
    addFrame(firstRoll, secondRoll) {
        let frame = new Frame();
        //adds rolls to the frame
        frame.addRoll(firstRoll);
        frame.addRoll(secondRoll);
        //adds bonus to the frame,if the frame is strike, spare
        if(this.frames.length > 0 && (this.frames[this.frames.length - 1].isStrike() || this.frames[this.frames.length - 1].isSpare())) {
            this.frames[this.frames.length - 1].setBonus(firstRoll);
        }
        //adds the frame to the scorecard
        this.frames.push(frame);
    }
    //calculate the score with this method
    calculateScore() {
        //use reduce function to add the score up
        return this.frames.reduce((total, frame) => total + frame.getScore(), 0);
    }

}

module.exports = Scorecard;