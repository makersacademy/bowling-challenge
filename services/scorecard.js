const Frame = require('./frame');
// const scoreArray = require('./score_array');

class Scorecard {

    constructor(game_record = []) {
        this.game_record = [];
        this.frame = new Frame();
        this.frameCount = 1;
    }



    processFrame() {
        do {
            this.frame = new Frame();
            this.frame.roll1(0);
                if (this.frame.pins == 10) {
                    this.game_record.push(this.frame.ball1, this.frame.ball2 =0);
                    this.frameCount++;
                }
                else {
                    this.frame.roll2(3);
                    this.game_record.push(this.frame.ball1, this.frame.ball2);
                    this.frameCount++;
                }

        }
        while (this.frameCount < 2);
    };
};

module.exports = Scorecard;
