class Game {
    constructor() {
        this.rolls = [];
        this.current_roll = 0;
    }

    roll(pins_knocked) {
        if (pins_knocked > 10 || pins_knocked < 1) {
            throw new Error ('Incorrect roll. Try again!')
        } else {
                this.pins_knocked = pins_knocked;
                this.rolls[this.current_roll] = this.pins_knocked;
                this.current_roll += 1;
        }
        return pins_knocked;
    }

    score() {
        let accumulatedScore = 0;
        let frame_index = 0;
        for (let i = 1; i <= 10; i++) {
            if (this.rolls[frame_index] === 10) {
                accumulatedScore += 10 + parseInt(this.bonus_for_strike(frame_index));
                frame_index += 1;
            } else if ((this.rolls[frame_index + this.rolls[frame_index + 1] === 10])) {
                accumulatedScore += 10 + parseInt(this.bonus_for_spare(frame_index));
                frame_index += 2;
            } else {
                accumulatedScore += parseInt(this.rolls[frame_index]) + parseInt(this.rolls[frame_index + 1]);
                frame_index += 2;
            }
        }
        return parseInt(accumulatedScore);
    }

    bonus_for_strike(frame_index) {
       return parseInt(this.rolls[frame_index + 1]) + parseInt(this.rolls[frame_index + 2])
    }

    bonus_for_spare(frame_index) {
       return parseInt(this.rolls[frame_index + 2])
    }
};

module.exports = Game;