var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

function Updater() {
}

Updater.prototype.update = function(frames) {
    var that = this;
    frames.forEach(function(frame, index){
        if (index !== 9) {
            that.updateFrame(that, frame, index, frames);
        }
    });
}

Updater.prototype.updateFrame = function(that, frame, index, frames){
    var next = frames[index + 1];
    var nextNext = frames[index + 2];
    if (frame.isStrike()) {
        if (next.isStrike()){
            if ((next.getSecondScore() !== null)) {
               that.updateStrike(frame, next);
            } else {
               that.updateStrikeIfNextFrameIsStrike(frame, next, nextNext);
            }
        } else {
          that.updateStrike(frame, next);
        }
    } else if (frame.isSpare()) {
       that.updateSpare(frame, next);
    }
}

Updater.prototype.updateSpare = function(frame, next) {
    if (next.getFirstScore()) {
        frame.setFinalFrameScore(frame.getFirstScore() +
                                 frame.getSecondScore() +
                                 next.getFirstScore());
    }
}

Updater.prototype.updateStrike = function(frame, next) {
    if (next.getFirstScore()) {
          frame.setFinalFrameScore(frame.getFirstScore() +
                                   next.getFirstScore() +
                                   next.getSecondScore());
     }
}

Updater.prototype.updateStrikeIfNextFrameIsStrike = function(frame, next, nextNext){
    if (nextNext.getFirstScore()) {
        frame.setFinalFrameScore(frame.getFirstScore() +
                                 next.getFirstScore() +
                                 nextNext.getFirstScore());
    }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
   module.exports = Updater;
}
