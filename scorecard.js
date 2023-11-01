/*
10 Pin Scoring Rules:

Every frame is 1-2 rolls
    Open Frame(a, b) -> Less than 10 pins -> (a + b);
    Spare(a, b = 10) -> 10 pins over 2 rolls -> (10) + (a);
    Strike(a=10) -> 10 pins over 1 roll -> (10) + (a + b) or (10) + (10) + (b);

    For the 10th frame, if the player rolls a strike or spare, they can roll again for the bonus
*/

class ScoreCard {
    constructor(){
        this.frames = [] //empty list of frames
    };
    // ADDING FRAMES
    /**
     * adds a single frame
     * @param {number} a // first roll -- 0-10
     * @param {number} b // second roll -- 0-10; b <= 10-a
     */
    addFrame(a,b) {
        this.frames.push([a,b]);
    };
    /**
     * adds a special 10th frame with up to 3 rolls if the player scores a strike or spare in the 2-roll frame.
     * @param {number} a 
     * @param {number} b 
     * @param {number} c 
     */
    add10thFrame(a, b, c) {
        this.frames.push([a, b, c]); 
    };

    // FINDING FRAME TYPE:
    // takes single frames from self.frames.
    isStrike(frame){
        return frame[0] === 10;
    };
    isSpare(frame){
        return frame[0] + frame[1] === 10;
    };

    // GETTING FRAME SCORE NO BONUS
    getFrameScoreNoBonus(frame){
        let sum = 0;
        frame.forEach((roll) => {
            sum += roll;
        });
        return sum;
    }

    // GETTING THE SPARE BONUS:
    getSpareBonus(frame){
        let bonus = 0;
        // find the index of the current frame
        const frameNum = this.frames.indexOf(frame);
        // find the next frame
        const nextFrame = this.frames[frameNum + 1];
        // find the first roll of the next frame
        bonus = nextFrame[0];
        return bonus;
    }

    // GETTING THE STRIKE BONUS:
    getStrikeBonus(frame){
        let bonus = 0;
        // find the index of the current frame
        const frameNum = this.frames.indexOf(frame);
        // find the next frame
        const nextFrame = this.frames[frameNum + 1];

        // if next frame is also a Strike:
        if (this.isStrike(nextFrame)) {
            // find the next next frame's first roll.
            const nextNextFrame = this.frames[frameNum + 2];
            bonus = nextFrame[0] + nextNextFrame[0];
        } else {
            // find both rolls of the next frame.
            bonus = nextFrame[0] + nextFrame[1];
        }
        return bonus;
    }

    // GETTING FRAME TOTAL:
    getFrameTotal(frame){
        let score = 0;
        const frameNum = this.frames.indexOf(frame);

        if (this.isStrike(frame) && frameNum != 10) { 
            // STRIKE & NOT LAST FRAME 
            console.log(`Frame ${frameNum}: Strike!`)

            try {
                // Get the next two rolls
                score += this.getStrikeBonus(frame);

            } catch (error) {
                // catch range error for when the game is still ongoing
                if (error instanceof RangeError) { 
                    // no bonus added if next 2 rolls haven't happened yet.
                } else {
                    console.error('An error occured:', error.message);
                }
            }

        } else if (this.isSpare(frame) && frameNum != 10) { 
            // SPARE & NOT LAST FRAME
            console.log(`Frame ${frameNum}: Spare!`)
            try {
                // Get the next roll
                score += this.getSpareBonus(frame);

            } catch (error) {
                // catch range error for when the game is still ongoing
                if (error instanceof RangeError) {
                    // no bonus added if next 1 roll hasn't happened yet.
                } else {
                    console.error('An error occured:', error.message);
                }
            }

        } else {
            if (this.isStrike(frame)){
                // 10th FRAME STRIKE
                console.log(`Frame ${frameNum}: Strike!`)
            } else if (this.isSpare(frame)){
                // 10th FRAME SPARE
                console.log(`Frame ${frameNum}: Spare!`)
            } else {
                // OPEN FRAME
                console.log(`Frame ${frameNum}: Open Frame!`)                
            }
        };

        score += this.getFrameScoreNoBonus(frame);
        return score;
    };

    // Get the total score for the game
    getTotalGameScore() {
        let score = 0;
        // for frame in frames:
        this.frames.forEach((frame) => {
            score += this.getFrameTotal(frame)
        });
        return score;
    };

    // Get the total score at a certain frame for the game after the bonus rolls have occured.
    getTotalGameScoreAtFrame(frameNumber){
        const frameIndex = frameNumber - 1
        let score = 0;
        // for frame in frames up to frameIndex:
        for (let i = 0; i <= frameIndex; i++ ){
            const currentFrame = this.frames[i];
            score += this.getFrameTotal(currentFrame);
        }
        return score;
    }

};

module.exports = ScoreCard;