// const TenthFrameSpecial = require('./tenthframe');
// const Frame = require('./frame');
const TenthFrameSpecial = require('../lib/tenthframe');
const Frame = require('../lib/frame');

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

    // ======= ADDING TO THE SCORECARD =============== //

    // ADDING FRAMES:
    /**
     * 
     * @param {Frame | TenthFrameSpecial} frame 
     */
    addFrame(frame) {
        this.frames.push(frame)
    };

    // ======= GET THE TOTAL SCORE ================= //

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


    // ======= SHOWING THE SCORECARD ================= //

    // SCORECARD:
    /**
     * 
     * @returns a scorecard object
     */
    showScoreCard() {
        let scorecard = [];
        let cumulative_score = 0;
        
        this.frames.forEach((frame) => {

            // bowling scorecard shows the cumulative score after each frame.
            cumulative_score += this.getFrameTotal(frame)

            const frameScoreCard = {
                number: (this.frames.indexOf(frame)+1), // 1-10
                rolls: frame.rolls, 
                type: frame.type, // open, spare, strike
                frameScore: cumulative_score 
            }
            scorecard.push(frameScoreCard)
        });
        return scorecard;
    }

    // ------------- supportive functions: ----------------------  //
    
    // GETTING SPARE BONUS:
    getSpareBonus(frame) {
        let bonus = 0;
        // find the index of the current frame
        const thisFrameIndex = this.frames.indexOf(frame);
        // find the next frame
        const nextFrame = this.frames[thisFrameIndex + 1];

        // If nextFrame has happened:
        if (nextFrame !== undefined) {
            // find the first roll of the next frame
            bonus += nextFrame.rolls[0];
            // update the frame bonus
            frame.updateBonus(bonus);
            
        } else { // no bonus added if next roll hasn't happened yet.
        }

        return bonus;
    };

    // GETTING STRIKE BONUS:
    getStrikeBonus(frame) {
        let bonus = 0;
        // find the index of the current frame
        const thisFrameIndex = this.frames.indexOf(frame);
        // find the next frame
        const nextFrame = this.frames[thisFrameIndex + 1];

        // If nextFrame has happened:
        if (nextFrame !== undefined) {
            // Add the first roll to the bonus. This is roll 1/2 of a strike bonus.
            bonus += nextFrame.rolls[0];

            // ========= Finding roll 2/2 of the strike bonus:===========

            // CASE 1: if the nextFrame is a strike AND is NOT frame 10 (thisFrame is NOT frame 9):
            if (nextFrame.type === 'strike' && thisFrameIndex !== 8) {

                // Try to find the nextNextFrame:
                // This allows the score to be updated for a frame sequence STRIKE, STRIKE, No roll yet.
                const nextNextFrame = this.frames[thisFrameIndex + 2];
                
                // If the nextNextFrame has happened:
                if (nextNextFrame !== undefined) {
                    // Add the first roll to the bonus. This is roll 2/2 of the strike bonus.
                    bonus += nextNextFrame.rolls[0];
                } else {
                    // no bonus added if the nextNextFrame hasn't happened yet.
                }

            // CASE 2: nextFrame is NOT a strike OR nextFrame IS a strike on frame 10:
            // If pattern is Strike + Spare || Strike + Open || Strike + 10th Frame special
            } else { 
                // Add the second roll to the bonus. This is roll 2/2 of the strike bonus.
                bonus += nextFrame.rolls[1]
            }
            
        } else { // no bonus added if nextFrame hasn't happened yet.
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
        // Checks for and adds bonuses for the following conditions:
        // Frames 1-9: strike or spare

        // No bonus updates for the following conditions:
        // Frames 1-10: open
        // Frame 10: strike or spare
        if (!(frame instanceof TenthFrameSpecial)) {
            this.checkForBonus(frame)
        }
        
        // Get the total after any bonuses
        return frame.getCurrentTotal();
    };


}

module.exports = ScoreCard;