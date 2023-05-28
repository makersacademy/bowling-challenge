class Scorecard {

    constructor() {
        this.scorecard = []

    }

    calculateScore() {
        let sum = 0;
    
        for (let i = 0; i < this.scorecard.length; i++) {
            // frame is the frame array e.g. [10, 2]
            let currentFrame = this.scorecard[i];
            let nextFrame = this.scorecard[i + 1]
                for (let j = 0 ; j < currentFrame.length; j++) {
                    if (currentFrame.length < 2) {
                        for (let j = 0 ; j < nextFrame.length; j++) {
                        sum += nextFrame[j];
                        sum += 10;
                        }
                    } 
                }
                
            }
            return sum;
            // // frame is the frame array e.g. [10, 2]
            // let frame = this.scorecard[i].frame;
            // let nextFrame = this.scorecard[i += 1].frame;
            // console.log(nextFrame);
            // if (frame.length === 1) {
            //     frame.push(nextFrame[0]);
            //     frame.push(nextFrame[1]);
            //     for (let j = 0 ; j < frame.length; j++) {
            //         sum += frame[j];
            //     }
            // }
            
    }
        
    

    addFrame(roll1, roll2) {
        if (roll1 < 10) {
            this.scorecard.push([roll1,  roll2]);
        } else if (roll1 === 10) {
            this.scorecard.push('strike');
        }
        // this.scorecard.push({frame: [roll1,  roll2]});
        return this.scorecard;


    }

}

let scorecard = new Scorecard;

scorecard.addFrame(10, 0);
scorecard.addFrame(2, 2);

console.log(scorecard.scorecard.length)
console.log(scorecard)



