function Frame() {
    this.bowl1 = 0;
    this.bowl2 = 0;
};

Frame.prototype.getTotal = function() {
    return this.bowl1 + this.bowl2;
};

Frame.prototype.firstBowl = function(pins) {
    this.bowl1 = pins;
};

Frame.prototype.secondBowl = function(pins) {
    this.bowl2 = pins;
};