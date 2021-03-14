class Bowling {

    constructor() {
       this.score = [];
        this.frame = 0;
    }

    newFrame(roll_1,roll_2) {
        this.frame ++

        this.score.push([roll_1, roll_2])
    }


    isSpare(roll_1, roll_2) {
        if (roll_1 + roll_2 === 10) {
          return 'Spare!';
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

