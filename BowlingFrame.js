class BowlingFrame {
    constructor(rollOne, rollTwo=null, rollThree=null) {
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
        this.rollThree = rollThree;
        this.bonus = 0;
    }

    roll1() {
        return this.rollOne;
    }

    roll2() {
        return this.rollTwo;
    }

    roll3() {
        return this.rollThree;
    }

    setBonus(bonus) {
        this.bonus = bonus;
    }

    getBonus() {
        return this.bonus;
    }

    getRollTotal() {
        return this.rollOne + this.rollTwo;
    }

    isSpare() {
        return this.getRollTotal() === 10 && this.rollOne !== 10;
    }

    isStrike() {
        return this.rollOne === 10;
    }

    getFrameTotal() {
        return this.rollOne + this.rollTwo + this.rollThree + this.bonus;
    }
}

module.exports = BowlingFrame;