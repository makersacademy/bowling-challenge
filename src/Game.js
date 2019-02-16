'use strict';

function Game(constructorFunction = Frame) {
    this._frames = [];
    var i;
    for (i = 0; i < 10; i++) {
        var newFrame = new constructorFunction;
        this._frames.push(newFrame);
    }
}
