function BowlingGame() {
    this._rolls = [];
}

BowlingGame.prototype.roll = function(pins) {
    this._rolls.push(pins);
};

BowlingGame.prototype.score = function() {
    return this._rolls.reduce(function (acc, value) {
        return acc + value;
    })
};