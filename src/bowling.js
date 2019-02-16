function ScoreCard () {
	this.totalScore = 0
}

function Frame () {
	this.score = 0
	this.rolls = [null, null]
	this.frameCompletionStatus = false
}

Frame.prototype.addScore = function () {
	if(this.rolls[0] + this.rolls[1] > 10)
	{
		throw new Error('Score error: rolls cannot add up to more than 10')
	} else
		this.score = this.rolls[0] + this.rolls[1]
}

Frame.prototype.isComplete = function () {
	return this.frameCompletionStatus
}

Frame.prototype.setFrameComplete = function () {
	this.addScore();
    if(this.score === 10) {
        this.frameCompletionStatus = true;}
    else if(this.rolls[0] !== 10 && this.rolls[1] !== null) {
        this.frameCompletionStatus = true;
    }

}
