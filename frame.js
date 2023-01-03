class Frame {
    constructor(){
        this.score = 0;
        this.numOfRolls = 0;
        this.rollOne = 0;
        this.rollTwo = 0;
        this.strike = false;
        this.spare = false;
    }

    addBonus(input){
        ((this.strike === true) || (this.spare === true)) ? (this.score += input) : null;
    }

    checkForSpare(){
        return this.spare
    }

    checkForStrike(){
        return this.strike
    }

    roll(input){
        // Increment roll counter
        this.numOfRolls++;
        //Add to score if number of rolls are less than 2 and score does not exceed max possible score
        ((this.score <= 10) && (this.numOfRolls <= 2) && ((this.score + input) <= 10)) ? this.score += input : null;
        //Add either scores to their own variable so they can be used for addBonus() in other Frames
        (this.numOfRolls == 1) ? this.rollOne = input : null;
        (this.numOfRolls == 2) ? this.rollTwo = input : null;
        //Stores whether this frame is a Strike or Spare if score is 10.
        ((this.score === 10) && (this.numOfRolls === 1)) ? this.strike = true : null;
        ((this.score === 10) && (this.numOfRolls === 2)) ? this.spare = true : null;
    }

    //Returns total score for the Frame
    returnFrameScore(){
        return this.score
    }

    // Returns rollOne so it can be added to other Frames total score
    returnRollOne(){
        return this.rollOne
    }
    // Returns rollTwo so it can be added to other Frames total score
    returnRollTwo(){
        return this.rollTwo
    }
}

module.exports = Frame;