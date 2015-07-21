var Frame = function(){
    this.roll1 = null
    this.roll2 = null
    this.bonusRoll = null   // Used for 10th frame
    this.rollCount = 0   // Number of rolls taken

    this.bonusScore = null  // Points earned from following frames
}

Frame.prototype.isStrike = function() {
    return this.roll1 === 10 && this.bonusRoll === null
}

Frame.prototype.isSpare = function() {
    return !this.isStrike() && (this.roll1 + this.roll2 === 10) && this.bonusRoll === null
}

Frame.prototype.score = function() {
    return this.roll1 + this.roll2 + this.bonusRoll + this.bonusScore;
}

Frame.prototype._toString = function() {
    return "Frame: Roll1=>" + this.roll1 + ", Roll2=>" + this.roll2 + ", Roll3=>" + this.bonusRoll + ", Bonus Score=>" + this.bonusScore
}
