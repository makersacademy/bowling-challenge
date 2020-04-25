'use strict';

function Frame() {
    this.rollOne = null
    this.rollTwo = null
    this.isComplete = false
    this.MAX_SCORE = 10
}

Frame.prototype.addScore = function(score) {
    if (this.rollOne === null) {
        this.rollOne = score
        return this.rollOne
    } else {
        this.rollTwo = score
        return this.rollTwo
    }
}

Frame.prototype.isFrameComplete = function() {
    if ((this.isStrike() === true) || ((this.rollOne !== null) && (this.rollTwo !== null))) {
        return this.isComplete = true
    } else {
        return this.isComplete = false
    }
}

Frame.prototype.isStrike = function() {
    if (this.rollOne === this.MAX_SCORE) {
        return true
    } else {
        return false
    }
}

Frame.prototype.isSpare = function() {
    if ((this.rollOne + this.rollTwo) == this.MAX_SCORE) {
        return true
    } else {
        return false
    }
}