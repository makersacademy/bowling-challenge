/*
10 Pin Scoring Rules:

Every frame is 1-2 rolls
    Open Frame(a, b) -> Less than 10 pins -> (a + b);
    Spare(a, b = 10) -> 10 pins over 2 rolls -> (10) + (a);
    Strike(a=10) -> 10 pins over 1 roll -> (10) + (a + b) or (10) + (10) + (b);

    For the 10th frame, if the player rolls a strike or spare, they can roll again for the bonus
*/

class Frame {
    /**
     * 
     * @param {number} roll1 // 0-10
     * @param {number} roll2 // 0-10, b <= 10-a
     */
    constructor(roll1, roll2){
        // catch errors for construction:
        if ((typeof roll1 !== 'number' || isNaN(roll1)) || (typeof roll2 !== 'number' || isNaN(roll2))) {
            throw new Error('Rolls must be numbers and not empty.');
        }

        if (roll1 < 0 || roll1 > 10 || roll2 < 0 || roll2 > 10) {
            throw new Error('Roll values must be between 0 and 10.');
        }

        if (roll1 + roll2 > 10) {
            throw new Error('The sum of roll1 and roll2 cannot exceed 10.');
        }

        // initialization attributes:
        this.rolls = [roll1, roll2];
        this.type = 'open';
        this.bonus = 0;

        // check and update type immediately on init.
        this.checkType();
    }
    // Get total before bonusses
    getInitialTotal(){
        return this.rolls[0] + this.rolls[1];
    }

    // Return true if frame is a strike
    isStrike(){
        return this.rolls[0] === 10;
    }
    // Return true if frame is a spare
    isSpare(){
        return this.getInitialTotal() === 10 && !this.isStrike();
    }
    // Checks if frame is a strike or spare and updates this.type
    checkType(){
        if (this.isStrike()) {
            this.type = 'strike';
        } else if (this.isSpare()) {
            this.type = 'spare';
        }
    }

    // Add bonus (calculated from the next 1-2 rolls in Scorecard)
    updateBonus(bonus){
        this.bonus = bonus
    }

    // Get the current total, inclusive of any bonuses.
    getCurrentTotal(){
        return this.getInitialTotal() + this.bonus;
    }
}



module.exports = Frame;
