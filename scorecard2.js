const TenthFrameSpecial = require('./tenthframe');
const Frame = require('./frame');


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
        this.frames = [];
    };

    // ADDING FRAMES:
    /**
     * 
     * @param {Frame | TenthFrameSpecial} frame 
     */
    addFrame(frame) {
        this.frames.push(frame)
    };

    // GETTING SPARE BONUS:
    getSpareBonus(frame) {
        let bonus = 0;
        // find the index of the current frame
        const thisFrameIndex = this.frames.indexOf(frame);

        try {
            // find the next frame,
            const nextFrame = this.frames[thisFrameIndex + 1];
            // find the first roll of the next frame
            bonus += nextFrame.rolls[0];
            // update the frame bonus
            frame.updateBonus(bonus);

        } catch (error) {
            // no bonus added if next roll hasn't happened yet.
            if (error instanceof RangeError) { 
                // pass, no bonus to add
            } else {
                console.error('An error occured:', error.message);
            }
        }
        return bonus;
    };

    // GETTING STRIKE BONUS:
    getStrikeBonus(frame) {
        let bonus = 0;
        // find the index of the current frame
        const thisFrameIndex = this.frames.indexOf(frame);

        // try to find the next frame:
        try {
            // find the next frame,
            const nextFrame = this.frames[thisFrameIndex + 1];
            // find the first roll of the next frame
            bonus += nextFrame.rolls[0];

            // if the next frame is a strike AND is NOT frame 10 (thisFrame is NOT frame 9):
            if (nextFrame.type === 'strike' && thisFrameIndex !== 8) {
                
                // try to find the next-next-frame:
                // This allows the score to be updated for a frame sequence STRIKE, STRIKE, No roll yet.
                try {
                    // find the next-next-frame,
                    const nextNextFrame = this.frames[thisFrameIndex + 2];
                    // find the first roll of the next-next-frame
                    bonus += nextNextFrame.rolls[0];

                } catch (error) {
                    // no bonus added if next-next-frame hasn't happened yet.
                    if (error instanceof RangeError) { 
                        // pass, no bonus to add
                    } else {
                        console.error('An error occured:', error.message);
                    }
                }
            
            // next frame is NOT a strike OR next frame IS a strike on frame 10:
            } else { 
                // second bonus is from the second roll of the next frame
                bonus += nextFrame.rolls[1]
            }

        } catch (error) {
            // no bonus added if next roll hasn't happened yet.
            if (error instanceof RangeError) { 
                // pass, no bonus to add
            } else {
                console.error('An error occured:', error.message);
            }
        }

        // update the bonus of this frame with the cumulated bonus:
        frame.updateBonus(bonus)
        return bonus;
    };



    // CHECKING FOR BONUSES:
    /**
     * Updates the bonus of each frame depending on the frame type
     * @param {Frame} frame // Use for frames 1-9. If 10th frame is special, just use frame.getCurrentTotal() (line 133)
     */
    checkForBonus(frame) {
        // if frame type is spare, try get spare bonus if the next roll has happened
        if (frame.type === 'spare') {
            this.getSpareBonus(frame)
        
        // if frame type is strike, try to get the bonus if the next 1 or 2 rolls have happened.
        } else if (frame.type === 'strike') {
            this.getStrikeBonus(frame)
        }
    };

    // GET FRAME TOTAL:
    /**
     * 
     * @param {Frame | TenthFrameSpecial} frame 
     * @returns {number}
     */
    getFrameTotal(frame) {
        // If frame is frames 1-9, check for bonuses. If this is run on an open frame 10, nothing happens.
        if (!(frame instanceof TenthFrameSpecial)) {
            this.checkForBonus(frame)
        }
        // Get the total after any bonuses
        return frame.getCurrentTotal();
    };

    // GET GAME TOTAL:
    /**
     * 
     * @returns the total score for the game
     */
    getGameTotal() {
        let total = 0
        // getFrameTotal each frame from this.frames
        // Add total of each frame
        this.frames.forEach((frame) => {
            total += this.getFrameTotal(frame);
        });
        return total;
    }

    // SCORECARD:
    /**
     * 
     * @returns a scorecard object
     */
    showScoreCard() {
        let scorecard = []
        this.frames.forEach((frame) => {
            // const frameNumber = this.frames.indexOf(frame);
            // const frameRolls = frame.rolls;
            // const frameType = frame.type;
            // const frameScore = this.frames.getFrameTotal(frame);

            const frameScoreCard = {
                number: (this.frames.indexOf(frame)+1),
                rolls: frame.rolls,
                type: frame.type,
                frameScore: this.getFrameTotal(frame)
            }
            scorecard.push(frameScoreCard)
        });
        return scorecard;
    }

}

module.exports = ScoreCard;