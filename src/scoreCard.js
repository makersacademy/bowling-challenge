'use strict';

function ScoreCard(constructorFunction = Game) {
    this._game = new constructorFunction();
}

ScoreCard.prototype.sum = function(array) {
    var accumulator = 0;
    var i;
    for (i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
};

ScoreCard.prototype.total = function() {
    var accumulator = 0;
    var i;
    for (i = 0; i < 10; i++) {
        accumulator += this.sum(this._game._frames[i]._scores);
    }
    return accumulator;
};
