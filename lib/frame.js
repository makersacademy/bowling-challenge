//frame.js
//define a frame class, represents individual frames in a game
class Frame {
    constructor() {
        //game starts with clean rolls and no bonus
        this.rolls = [];
        this.bonus = 0;
    }
    //a method for adding a roll to the frame
    addRoll(pins) {
        this.rolls.push(pins);
    }
    //a methods that getting the total score by using reduce method to  calculate the score of the frame
    getScore() {
        return this.rolls.reduce((a, b) => a + b, 0) + this.bonus;
    }
    //a method that checks if frame was a strike or not, first roll was 10
    isStrike() {
        return this.rolls[0] === 10;
    }
    //a method to check if frame was a spare or not,first and second rolls add up to 10 and not strike
    isSpare() {
        return this.rolls[0] + this.rolls[1] === 10 && !this.isStrike();
    }
    //a method for setting the bonus for the frame, incase of a strike or a spare
    setBonus(bonus) {
        this.bonus = bonus;
    }
}

module.exports = Frame;