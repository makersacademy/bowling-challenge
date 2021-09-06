class Score {
     constructor() {
         this.firstBowlPins = null;
         this.secondBowlPins = null;
         this.strike = false;
         this.spare = false;
         this.score = 0;
         this.savedScore = 0;
     };

     firstBowl(pins) {
        this.firstBowlPins = pins;
    }
    secondBowl(pins) {
        this.secondBowlPins = pins;
    }
    isStrike() {
        if (this.firstBowlPins === 10) {
            this.strike = true;
        }
    }
    isSpare() {
        if (this.firstBowlPins + this.secondBowlPins === 10) {
            this.spare = true;
        }
    }
    calculateScore() {
        if ((this.strike === true) || (this.spare === true)) {
            this.savedScore += 10;
        } else {
            this.score = (this.firstBowlPins + this.secondBowlPins)
        }
    }
};