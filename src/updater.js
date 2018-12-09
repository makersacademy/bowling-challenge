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
          that.updateStrikeIfNextFrameIsStrike(frame, next, nextNext, index);
        } else {
          that.updateStrike(frame, next);
        }
    } else if (frame.isSpare()) {
       that.updateSpare(frame, next);
    }
}

Updater.prototype.updateSpare = function(frame, next) {
        frame.setFinalFrameScore(frame.getFirstScore() +
                                 frame.getSecondScore() +
                                 next.getFirstScore());
}

Updater.prototype.updateStrike = function(frame, next) {
          frame.setFinalFrameScore(frame.getFirstScore() +
                                   next.getFirstScore() +
                                   next.getSecondScore());
}

Updater.prototype.updateStrikeIfNextFrameIsStrike = function(frame, next, nextNext, index){
    if (index === 8) {
       this.updateStrike(frame, next);
       return;
    } else {
        frame.setFinalFrameScore(frame.getFirstScore() +
                                 next.getFirstScore() +
                                 nextNext.getFirstScore());
    }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
   module.exports = Updater;
}
