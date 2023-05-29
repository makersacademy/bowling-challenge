class Scorecard {
    constructor () {
        this.preScore = [];
        this.postScore = [];
        this.turn = 0;
    }
    addFrame (a, b) {
        this.turn ++;
        this.preScore.push([a,b]);
    }
    showPreScore() {
        return this.preScore;
    }
    showPostScore() {
        return this.postScore;
    }

    ifStrike(turn) {
        if (this.preScore[turn+1].length > 2) {
            return this.postScore[turn] = (this.preScore[turn+1][0] + this.preScore[turn+1][1]);
        }
        else if (this.preScore[turn+1][0] != 10) {
            return this.postScore[turn] = (this.preScore[turn+1][0] + this.preScore[turn+1][1]);
        } 
        else if (this.preScore[turn+1][0] === null ) {
            return null;
        } 
        else {
            return this.postScore[turn] = (this.preScore[turn+1][0] + this.preScore[turn+2][0]);
        }
    }
    ifSpare(turn) {
        if (this.preScore[turn+1] != null) {
            return this.postScore[turn] = this.preScore[turn+1][0];
        }
        return null;
    }
    addFrame10 (a,b,c) {
        this.turn ++;
        this.preScore.push([a,b,c]);
    }
    frame10 (frame) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += this.preScore[frame-1][j];
        }
        return sum;
    }
    
    calculateScore () {
        let sum = 0;
        // this.preScore.map(sum += )
        for (let i = 0; i < this.preScore.length; i++) {
            if (i === 10) {
                sum += this.frame10(10);
            } else if (this.preScore[i][0] === 10) {
                sum += this.ifStrike(i);
            } else if (this.preScore[i][0] + this.preScore[i][1] === 10) {
                sum += this.ifSpare(i);
            }
            for (let j = 0; j < this.preScore[i].length; j++) {
              sum += this.preScore[i][j];
            }
          }
        return sum;
    }
}


module.exports = Scorecard;



// let scorecard = new Scorecard()
// scorecard.calculateScore() // returns 0
// scorecard.addFrame(5, 5) 
// scorecard.addFrame(3, 2)
// console.log(scorecard.calculateScore()) // returns 15
