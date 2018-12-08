var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

function Updater() {
}

Updater.prototype.update = function(frames) {
    frames.forEach(function(frame, index){
       if (index == 8){
            var next = frames[index + 1];
            if (frame.isStrike()) {
                if (next.isStrike()){
                    if (next.getSecondScore() !== null) {
                        var score = frame.getFirstScore() +
                                    next.getFirstScore() +
                                    next.getSecondScore();
                        frame.setFinalFrameScore(score);
                    }
                } else {
                    if (next.getFirstScore() !== null) {
                        var score = frame.getFirstScore() +
                                    next.getFirstScore() +
                                    next.getSecondScore();
                        frame.setFinalFrameScore(score);
                    }
                }
            } else if (frame.isSpare()) {
                if (next.getFirstScore() !== null) {
                    var score = frame.getFirstScore() +
                                frame.getSecondScore() +
                                next.getFirstScore();
                    frame.setFinalFrameScore(score);
                }
            }
        } else if (!(frame instanceof TenthFrame)) {
            var next = frames[index + 1];
            var nextNext = frames[index + 2];
            if (frame.isStrike()) {
                if (next.isStrike()){
                    if (nextNext.getFirstScore() !== null) {
                        var score = frame.getFirstScore() +
                                    next.getFirstScore() +
                                    nextNext.getFirstScore();
                        frame.setFinalFrameScore(score);
                    }
                } else {
                    if (next.getFirstScore() !== null) {
                        var score = frame.getFirstScore() +
                                    next.getFirstScore() +
                                    next.getSecondScore();
                        frame.setFinalFrameScore(score);
                    }
                }
            } else if (frame.isSpare()) {
                if (next.getFirstScore() !== null) {
                    var score = frame.getFirstScore() +
                                frame.getSecondScore() +
                                next.getFirstScore();
                    frame.setFinalFrameScore(score);
                }
            }
        }
    });

}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
   module.exports = Updater;
}
