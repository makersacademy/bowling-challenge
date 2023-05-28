class Scorecard {

    constructor() {
        this.frames = []

    }

    calculateScore() {

        let sum = 0;

        for (let i = 0; i < this.scorecard.length; i++) {
            let frame = this.scorecard[i].frame;
            for (let j = 0 ; j < frame.length; j++) {
                sum += frame[j];
            }
        }
        return sum;
    }

    addFrame(roll1, roll2) {
        if (roll1 < 10) {
            this.frames.push([roll1 + roll2]);
        } else if (roll1 === 10) {
            this.frames.push([roll1]);   
        }
        
    }


}


// scorecard1 = new Scorecard;
// scorecard1.addFrame(2, 2);
// console.log(scorecard1.calculateScore())

module.exports = Scorecard;