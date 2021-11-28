const Frame = require('./frame');
const readline = require("readline-sync");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const scoreArray = require('./score_array');

class Scorecard {

    constructor(game_record = []) {
        this.game_record = [];
        this.frame = new Frame();
        this.frameCount = 1;
        this.sum = 0;
    }

    processFrame() {
        while (this.frameCount < 10) {
            this.frame = new Frame();
            console.log(`Frame ${this.frameCount} `);
            this.frame.roll1();
                if (this.frame.ball1 == 10) {
                    scorecard.strike();
                }
                else {
                    this.frame.roll2();
                    this.game_record.push(this.frame.ball1, this.frame.ball2);
                    this.frameCount++;
                    // console.log(`Current game total: ${this.scoring()}`)
                }

        }
        console.log(this.game_record);
    };

    scoring() {
        this.sum = 0
        for (let i = 0; i < this.game_record.length; i++) {
            this.sum += this.game_record[i];
        }
        return this.sum

    }

    strike() {
        this.game_record.push(this.frame.ball1, this.frame.ball2 =0);
        this.frameCount++;
        console.log('Current game total: Pending for bonus rolls');
        var strike_index = this.game_record.length-2

    }
    strikeBonus() {
        // var bonus = this.game_record[this.strike.strike_index]+this.game_record[strike_index+1]+this.game_record[strike_index+2]
        // console.log(strike_index);
        // console.log(strike_bonus);
        let strikes = this.game_record.indexOf(10);
        console.log(strikes);
        return strikes;
    }
};
scorecard = new Scorecard();
scorecard.processFrame();
scorecard.strikeBonus();
module.exports = Scorecard;
