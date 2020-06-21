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
        return this.score() == this.MaxScore;
    }
    isGutter = () => {
        return this.score() == 0
    }
}

module.exports = Frame