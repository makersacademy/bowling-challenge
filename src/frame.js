function Frame () {
    this.cell1 = 0;
    this.cell2 = 0;
}

Frame.prototype.firstRoll = function(roll) {
    if(!(Number.isInteger(roll) && roll >= 0 && roll <= 10)) {
        throw new Error('Invalid number');
    }
    this.cell1 = roll;

}

Frame.prototype.secondRoll = function(roll) {
    if(!(Number.isInteger(roll) && roll >= 0 && roll <= 10)) {
        throw new Error('Invalid number');
    }
    else if(this.cell1 + roll > 10) {
        throw new Error('Over the limit');
    }
    this.cell2 = roll;
}

Frame.prototype.isStrike = function() {
    return this.cell1 === 10;
}

Frame.prototype.isSpare = function() {
    return !this.isStrike() && (this.cell1 + this.cell2) === 10;
}