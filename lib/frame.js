class Frame {
    constructor(bowls) {
        this.bowls = bowls
    }
    score = () => {
        var score = 0
        this.bowls.forEach(bowl => {
            score += bowl
        });
        return score
    }
}

module.exports = Frame