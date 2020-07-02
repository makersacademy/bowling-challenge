'use strict';

function Frame() {
    this.rollOne = null
    this.rollTwo = null
    this.isComplete = false
    this.MAX_SCORE = 10
}

Frame.prototype.addScore = function(score) {
    if (this.rollOne === null) {
        return this.rollOne = score
    } else {
        return this.rollTwo = score
    }
}

Frame.prototype.isFrameComplete = function() {
    if ((this.rollOne === this.MAX_SCORE) || (this.rollOne !== null && this.rollOne !== null)) {
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