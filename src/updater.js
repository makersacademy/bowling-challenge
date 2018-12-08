var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

function Updater() {
}

Updater.prototype.update = function(frames) {
    var that = this;
    frames.forEach(function(frame, index){
       if (index == 8){
            that.updateNinthFrame(that, frame, index, frames);
        } else if (!(frame instanceof TenthFrame)) {
            that.updateRegularFrame(that, frame, index, frames);
        }
    });
}

Updater.prototype.updateRegularFrame = function(that, frame, index, frames){
    var next = frames[index + 1];
    var nextNext = frames[index + 2];
    if (frame.isStrike()) {
        if (next.isStrike()){
          that.updateStrikeScoreInNextFrameIsStrike(frame, next, nextNext);
        } else {
          that.updateStrike(frame, next);
        }
    } else if (frame.isSpare()) {
       that.updateSpare(frame, next);
    }
}

Updater.prototype.updateNinthFrame = function(that, frame, index, frames){
    var next = frames[index + 1];
    if (frame.isStrike()) {
        if (next.isStrike()){
            if (next.getSecondScore() !== null) {
                that.updateNinthFrameScore(frame, next);
            }
        } else {
            if (next.getFirstScore() !== null) {
                that.updateNinthFrameScore(frame, next);
            }
        }
    } else if (frame.isSpare()) {
        that.updateSpare(frame, next);
    }
}

Updater.prototype.updateSpare = function(frame, next) {
    if (next.getFirstScore() !== null) {
        var score = frame.getFirstScore() +
                    frame.getSecondScore() +
                    next.getFirstScore();
        frame.setFinalFrameScore(score);
    }
}

Updater.prototype.updateStrike = function(frame, next) {
    if (next.getFirstScore() !== null) {
          var score = frame.getFirstScore() +
                      next.getFirstScore() +
                      next.getSecondScore();
          frame.setFinalFrameScore(score);
     }
}

Updater.prototype.updateStrikeScoreInNextFrameIsStrike = function(frame, next, nextNext){
    if (nextNext.getFirstScore() !== null) {
        var score = frame.getFirstScore() +
                    next.getFirstScore() +
                    nextNext.getFirstScore();
        frame.setFinalFrameScore(score);
    }
}

Updater.prototype.updateNinthFrameScore = function(frame, next){
    var score = frame.getFirstScore() +
                next.getFirstScore() +
                next.getSecondScore();
    frame.setFinalFrameScore(score);
}


if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
   module.exports = Updater;
}
