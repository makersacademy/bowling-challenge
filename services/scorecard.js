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
    }




    processFrame() {
        while (this.frameCount < 10) {
            this.frame = new Frame();
            console.log(`Frame ${this.frameCount} `);
            this.frame.roll1();
                if (this.frame.ball1 == 10) {
                    this.game_record.push(this.frame.ball1, this.frame.ball2 =0);
                    this.frameCount++;
                }
                else {
                    // const currentPins = readline.question('How many pins did you knock down on roll 2? ');
                    // console.log(`You entered ${currentPins}`);
                    this.frame.roll2();
                    this.game_record.push(this.frame.ball1, this.frame.ball2);
                    this.frameCount++;
                }
        }
        console.log(this.game_record);
    };
};
scorecard = new Scorecard();
scorecard.processFrame();
module.exports = Scorecard;
