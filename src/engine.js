const RULES = [];

function Engine() {
    this._rules = RULES;
}

Engine.prototype.rules = function() {
    return this._rules;
};