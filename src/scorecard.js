'use strict';

class Scorecard {
    constructor() {
        this.frames = [];
    }

    createFrames(frame) {
        for (var i = 0; i < 10; i++) {
            frame = 0
            this.frames.push(frame++);
        }
    }

}