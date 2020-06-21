class Frame {
    constructor(bowls) {
        this.bowls = bowls
        this.MaxScore = 10
    }
    score = () => {
        var score = 0
        this.bowls.forEach(bowl => {
            score += bowl

        });
        return score
    }
    isStrike = () => {

    }
    isGutter = () => {
        return this.score() == 0
    }
    isSpare = () => {
        return this.score() == this.MaxScore;
    }
}

module.exports = Frame