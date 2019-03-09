function Frame() {
    this.total = 0;
    this.bowl1 = 0;
    this.bowl2 = 0;
};

Frame.prototype.getTotal = function() {
    return this.total;
};

Frame.prototype.firstBowl = function(pins) {
    this.bowl1 = pins;
};

Frame.prototype.secondBowl = function(pins) {
    this.bowl2 = pins;
};