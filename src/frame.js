function Frame() {
    this.bowl1 = 0;
    this.bowl2 = 0;
    this.bonus = 0;
    this.isAwaitingBonus = false;
};

Frame.prototype.getTotal = function() {
    return this.bowl1 + this.bowl2;
};

Frame.prototype.firstBowl = function(pins) {
    this.bowl1 = pins;
};

Frame.prototype.secondBowl = function(pins) {
    this.bowl2 = pins;
    this.checkIfSpare();
};

Frame.prototype.checkIfSpare = function() {
    if (this.bowl1 + this.bowl2 === 10) {
        this.isAwaitingBonus = true;
    } else {
        this.isAwaitingBonus = false;
    }
};

Frame.prototype.addBonus = function(pins) {
    this.bonus += pins
};