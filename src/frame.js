function Frame() {
    this.rolls = [];
}

Frame.prototype.toString = function() {
    return "[" + this.rolls.toString() + "]";
};

Frame.prototype.rollValues = function() {
    return this.rolls;
};

Frame.prototype.frameScore = function() {
    var score = this.rolls.reduce((r1, r2) => r1 + r2, 0);
    return score;
};

Frame.prototype.isStrike = function() {
    return this.rolls[0] === 10; 
};

Frame.prototype.isSpare = function() {
    return ((this.rolls.length === 2) && (this.frameScore() === 10));
};

Frame.prototype.addRoll = function(pins) {
    this._validateRoll(pins);
    this.rolls.push(pins);
};

Frame.prototype.firstRoll = function() {
    var roll = this.rolls[0];
    return (typeof roll === "undefined" ? 0 : roll);
};

Frame.prototype.isDone = function() {
    return this.isStrike() || this.isSpare() || (this.rolls.length === 2);
};

Frame.prototype._validateRoll = function(pins) {
    if (typeof (pins) !== 'number') { 
        throw Error("Not a valid pin");
    }
    if ((pins > 10) || (pins < 0)) {
        throw Error("Pins should be between 0 and 10 (both inclusive); got " + pins + " pins");
    }   
};
