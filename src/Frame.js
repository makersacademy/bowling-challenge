function Frame(rolls = 2) {
    this._rolls = rolls;
    this._scores = [];
}

Frame.prototype.roll = function(score) {
    if (this._scores.length == this._rolls) {
        throw new Error('No more rolls this frame.');
    }
    this._scores.push(score);
};
