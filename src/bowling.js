class Bowling {

    constructor() {
       this.score = [];
        this.frame = 0;
        this.TOTAL_PINS = 10
    }

    newFrame(roll_1, roll_2 = 0) {
        this.frame ++

        this.score.push([roll_1, roll_2])
    }


    isSpare(roll_1, roll_2) {
        if (roll_1 + roll_2 === this.TOTAL_PINS) {
          return 'Spare!';
        }
    }

    isStrike(roll_1, roll_2) {
        if (roll_1 === this.TOTAL_PINS) {
            return 'Strike!';
        }
    }


    checkPins(roll_1, roll_2) {
        if (roll_1 + roll_2 > this.TOTAL_PINS) {
            return 'Impossible score!';
        }
    }

    getScore() {
        return this.score;
    }

    checkFrameCount() {
        return this.frame;
    }

    totalScore() {
        var scoreFlat = this.score.flat();

       return scoreFlat.reduce((a,b) => a + b, 0)
    }






}

