class BowlingFrame {
    constructor(rollOne, rollTwo=null, rollThree=null) {
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
        this.rollThree = rollThree;
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
}

module.exports = BowlingFrame;