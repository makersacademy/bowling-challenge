class BowlingGame {
    constructor() {
        this._rolls = [].fill(0, 0, 20);
    }

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        let score = 0;
        let rollIndex = 0;

        function isSpare() {
            return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10;
        }

        function isStrike() {
            return this._rolls[rollIndex] === 10;
        }

        for (let frame = 0; frame < 10; frame++) {
            if (isSpare.call(this)) {
                score += 10 + this._rolls[rollIndex + 2];
                rollIndex += 2;
            } else if (isStrike.call(this)) {
                score += 10 + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
                rollIndex += 1;
            } else {
                score += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
                rollIndex += 2;
            }
        }
        return score;
    }
}