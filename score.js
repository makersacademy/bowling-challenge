class Scorecard {

    constructor() {
        this.frames = []

    }

    calculateScore() {
    let sum = 0;
   
        for (let i = 0; i < this.frames.length; i++) {
            let currentFrame = this.frames[i]
            let nextFrame = this.frames[i + 1]
            let nextNextFrame = this.frames[i + 2]

            sum += this.frameScore(currentFrame)
              // when strike on final frame
                if (currentFrame === this.frames[-1] && nextFrame === undefined && nextNextFrame === undefined ) {
                    sum += this.frameScore(currentFrame);
                }
            // when strike   
  
                else if (currentFrame.length < 2 && nextFrame.length === 2) {
                    sum += this.addStrikeBonus(currentFrame, nextFrame);
                    
                }
            // when strikes in a row
                else if (currentFrame.length < 2 && nextFrame.length < 2) {
                    sum += this.addStrikesInARowBonus(currentFrame, nextFrame, nextNextFrame);
                    
                }

            // when spare
                if (this.frameScore(currentFrame) === 10 && currentFrame.length === 2 ) {
                sum += nextFrame[0];
                }  
        }
        return sum;


    }

    addFrame(roll1, roll2) {
        if (roll1 < 10) {
            this.frames.push([roll1, roll2]);
        } else if (roll1 === 10) {
            this.frames.push([roll1]);   
        }
        
    }

    frameScore(currentFrame) {
        this.currentFrame = currentFrame
        let sum = 0;

        for (let j = 0 ; j < currentFrame.length; j++) {
            sum += currentFrame[j]; 
        }
        return sum;
    }

    addStrikeBonus(currentFrame, nextFrame) {
        this.currentFrame = currentFrame;
        this.nextFrame = nextFrame;

        let sum = 0;

        sum += nextFrame[0];
        sum += nextFrame[1];

        return sum;
    }
    addStrikesInARowBonus(currentFrame, nextFrame, nextNextFrame) {
        this.currentFrame = currentFrame;
        this.nextFrame = nextFrame;
        this.nextNextFrame = nextNextFrame;

        let sum = 0;

        sum += nextFrame[0];
        sum += nextNextFrame[0];

        return sum;
    }

}

let scorecard = new Scorecard;

scorecard.addFrame(2,2);
scorecard.addFrame(10,0);
scorecard.addFrame(5,2);

console.log(scorecard.calculateScore());




