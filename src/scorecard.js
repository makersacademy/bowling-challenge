'use strict';

//mport Frame from '../src/frame.js'

class Scorecard {
    constructor() {
        this.frames = [];
    }

    createFrames(frame) {
        if (this.frameCount() === 10) { throw new Error("No more frames left, start a new game to play again."); }
        for (var i = 0; i < 9; i++) { this.frames.push(new frame); }
    }

    frameCount() {
        return this.frames.length;
    }

    score() {
        var total = 0;
        for (var i = 0; i < this.frames.length; i++) {
            total += this.frames[i].score;
        }
        return total;
    }

}

//export default Scorecard;