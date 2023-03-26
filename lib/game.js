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
        this.accumulatedScore = 0;
        this.frame_index = 0;
        for (let i = 1; i <= 10; i++) {
            if (this.rolls[this.frame_index === 10]) {
                this.accumulatedScore += 10 + parseInt(bonus_for_strike(this.frame_index));
                this.frame_index += 1;
            } else if ((this.rolls[this.frame_index + this.rolls[this.frame_index + 1] === 10])) {
                this.accumulatedScore += 10 + parseInt(this.bonus_for_spare(this.frame_index));
                this.frame_index += 2;
            } else {
                this.accumulatedScore += parseInt(this.rolls[this.frame_index]) + parseInt(this.rolls[this.frame_index + 1]);
                this.frame_index += 2;
            }
        }
        return parseInt(this.accumulatedScore);
    }

    bonus_for_strike(frame_index) {
        parseInt(this.rolls[frame_index + 1]) + parseInt(this.rolls[frame_index + 2])
    }

    bonus_for_spare(frame_index) {
        parseInt(this.rolls[frame_index + 2])
    }
};

module.exports = Game;