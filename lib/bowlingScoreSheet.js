const Frame = require('./frame')

class BowlingScoreSheet {
    constructor() {
        this.frames = [new Frame()]
    }

    addRoll(numberOfPins) {
        this.addBonusToPreviousFrames(numberOfPins);
        this.addScoreToLatestFrame(numberOfPins);
    }

    addScoreToLatestFrame(numberOfPins) {
        let lastFrame = this.frames.slice(-1)[0];
        if (lastFrame.complete) {
            this.createNewFrame(lastFrame,numberOfPins);
        } else {
            this.addToLastFrame(lastFrame,numberOfPins);
        };
    }

    createNewFrame(lastFrame,numberOfPins) {
        let newFrame = new Frame();
        newFrame.number = lastFrame.number + 1;
        newFrame.scores = [numberOfPins];
        newFrame.totalScore = numberOfPins;
        if (numberOfPins === 10) {
            newFrame.note = 'strike';
            newFrame.bonuses = 2;
        } else {
            newFrame.complete = false;
        };
        this.frames.push(newFrame);

    }

    addToLastFrame(lastFrame,numberOfPins) {
        lastFrame.scores.push(numberOfPins);
        lastFrame.totalScore += numberOfPins;
        lastFrame.complete = true;
        if (lastFrame.totalScore === 10) {
            lastFrame.note = 'spare';
            lastFrame.bonuses = 1;
        }
    }

    addBonusToPreviousFrames(numberOfPins) {
        this.frames.forEach((frame) => {
            if (frame.bonuses > 0 && frame.complete){
                frame.totalScore += numberOfPins;
                frame.bonuses -= 1;
            }
        });
    }

    totalScore() {
        let sum = 0
        this.frames.forEach((frame) => {
            if (frame.number > 0 &&frame.number <= 10 ){
                sum += frame.totalScore;
            }
        });
        return sum;
    }

    complete() {
        if (this.frames.length < 10) {
            return false;
        } else if (this.frames[10].complete && this.frames[10].bonuses === 0) {
            return true
        } else {
            return false
        };
    }

};

module.exports = BowlingScoreSheet;
