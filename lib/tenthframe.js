
class TenthFrameSpecial {
    constructor(roll1, roll2, roll3){
        // catch errors for construction:
        if (
            (typeof roll1 !== 'number' || isNaN(roll1)) || 
            (typeof roll2 !== 'number' || isNaN(roll2)) || 
            (typeof roll3 !== 'number' || isNaN(roll3))) {
            throw new Error('Rolls must be numbers and not empty.');
        }

        if (roll1 < 0 || roll1 > 10 || roll2 < 0 || roll2 > 10 || roll3 < 0 || roll3 > 10) {
            throw new Error('Roll values must be between 0 and 10.');
        }

        this.rolls = [roll1, roll2, roll3];
        this.type = '';

        // check and update type immediately on init.
        this.checkType();


        if (this.type !== 'strike' && roll1 + roll2 > 10) {
            throw new Error('The sum of roll1 and roll2 cannot exceed 10 if roll1 is not a strike.')
        }

        if (this.type === '') {
            throw new Error('The initial frame must be a strike or a spare.');
        }
    }
    
    // Return true if frame is a strike
    isStrike(){
        return this.rolls[0] === 10;
    }
    // Return true if frame is a spare
    isSpare(){
        return this.rolls[0] + this.rolls[1] === 10 && !this.isStrike();
    }
    // Checks if frame is a strike or spare and updates this.type
    // Default this.type is spare, so it only checks for strikes
    checkType(){
        if (this.isStrike()) {
            this.type = 'strike';
        } else if (this.isSpare()) {
            this.type = 'spare';
        }
    }
    // Using same method name as above so that ScoreCard use frame.getCurrentTotal() forEach frame in frames
    getCurrentTotal(){
        // equivalent of sum(self.rolls)
        return this.rolls.reduce((sum, roll) => sum + roll, 0);
    }
}


module.exports = TenthFrameSpecial;