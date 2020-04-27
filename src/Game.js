'use strict';

function Game() {
    this.frames = []
    this.isComplete = false
}

Game.prototype.start = function() {
    if (this.frames.length == 0) {
        console.log(this.frames)
        this.frames.push(new Frame());
        console.log(this.frames)
    } else {
        throw 'Game already started.';
    }
}

Game.prototype.addNewFrame = function(){
    this.frames.push(new Frame());
}

Game.prototype.frameNumber = function() {
    return this.frames.length;
}

Game.prototype.isRoundComplete = function() {
    if (this.frames.length < 10) {
    return this.isComplete = false;
    }   else {
    return this.isComplete = true;
    }
}