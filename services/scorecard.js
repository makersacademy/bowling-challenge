const frame = require('./frame');
const scoreArray = require('./score_array');

class Scorecard {

    constructor(game_record = []) {
       this.game_record = [
            new Frame(0, 3),
            new Frame(5, 2),
            new Frame(8, 2),
            new Frame(9, 1),
            new Frame(10, 0),
            new Frame(10, 0),
            new Frame(10, 0),
            new Frame(9, 0),
            new Frame(10, 0),
            new Frame(9, 1)
       ];
    }

    frameCount = 1;

    processFrame() {
        do {
            frame = new Frame(0,0);
            frame.roll1(0);
            frameCount++;
        }
        while frameCount < 10;
    }
}



// module.exports = Scorecard;
