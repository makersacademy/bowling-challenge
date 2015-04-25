var game;

var Bowling = function () {
    "use strict";
    this.bFrame = [];
    this.game = [0];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    // if (this.bFrame.length === 2) {
    //     this.bFrame = [roll];
    // }
    if (this.bFrame.length === 1) {
        this.bFrame.push(roll);
        var frameToStore = this.bFrame;
        this.bFrame = []
        return this.game.push(frameToStore);
    } 
    if (this.bFrame.length === 0) {
        this.bFrame.push(roll);
    }
     else {
        // don't know yet
    }
};

Bowling.prototype.addUpFrame = function() {
    var frameTotal = this.bFrame.reduce(function(a, b) {
        return a + b;
    });

    return this.game.push(frameTotal);
};

Bowling.prototype.addUpGame = function() {
    var newTotal = this.game.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};

