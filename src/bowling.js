function ScoreCard () {
	this.totalScore = 0
}

function Frame () {
    this.score = 0
    this.rolls = [0, 0]
}

Frame.prototype.addScore = function () {
    this.score = this.rolls[0] + this.rolls[1];
}
