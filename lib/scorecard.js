class Scorecard {
    constructor () {
        this.preScore = [];
        this.postScore = [];
        this.turn = 0;
    }
    addFrame (a, b) {
        this.turn ++;
        if ( a + b != 10 ) {
            this.preScore.push([a,b]);
        } else if (a === 10) {
            // this.ifStrike ();
        } else if (a + b === 10) {
             //this.ifSpare ();
        } else {
            return "invalid input";
        }
    }
    calculateScore () {
        let sum = 0;
        // this.preScore.map(sum += )
        for (let i = 0; i < this.preScore.length; i++) {
            for (let j = 0; j < this.preScore[i].length; j++) {
              sum += this.preScore[i][j];
            }
          }
        return sum;
    }
    showPreScore() {
        console.log(this.preScore);
    }
    showPostScore() {
        return this.postScore;
    }
    calculateRealScore () {
        if ( a + b != 10 ) {
            this.preScore.push([a,b]);
        } else if (a === 10) {
            // this.ifStrike ();
        } else if (a + b === 10) {
            this.preScore.map(ifSpare());
        } else {
            return "invalid input";
        }
    }

    ifStrike () {

    }
    ifSpare () {
        return this.postScore[this.turn] += this.preScore[this.turn+1][0];
    }

}


module.exports = Scorecard;



let scorecard = new Scorecard()
scorecard.calculateScore() // returns 0
scorecard.addFrame(2, 5) 
scorecard.addFrame(3, 5)
scorecard.calculateScore() // returns 15
