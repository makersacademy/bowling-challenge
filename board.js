const prompt = require("prompt-sync")({ sigint: true });

class Board {
    constructor() {
        this.total = 0;
        this.scores = [];
        this.game_on = true;
    }

    add_throw(throw_score) {
        this.total += throw_score
    }

    counting_total() {
        this.scores[this.scores.length - 1].forEach(element => this.add_throw(element));
    }

    run() {
        while (this.game_on) {

            let frame = [];
            let wrong_input = false;
            let spare = false;
            let strike = false;


            for (let i = 1; i < 3; i++) {

                let throw_score = parseInt(prompt(`What is the throw score? `));

                let wrong_input = throw_score > 10 || throw_score < 0

                if (wrong_input) {
                    console.log("Score cannot be higher than 10 or less than 0. Try again.");
                    break;
                }

                frame.push(throw_score)

                if (throw_score == 10 && i == 1) {
                    console.log("strike");
                    strike = true;
                    break;
                } else if (i == 2 && frame[0] + frame[1] == 10) {
                    console.log("spare");
                    spare = true;
                }

            }

            if (!wrong_input) {

                this.scores.push(frame);
                let len = this.scores.length;

                this.counting_total()

                let previous_strike = len > 1 && this.scores[this.scores.length - 2][0] == 10
                let previous_spare = len > 1 && (this.scores[len - 2][0] + this.scores[len - 2][1]) == 10

                if (previous_strike) {
                    this.counting_total();
                } else if (previous_spare) {
                    this.add_throw(this.scores[len - 1][0]);
                }

            }

            this.scores.length == 11 ? this.game_on = false : this.game_on = true;

            if (this.scores.length == 10) {
                if (!strike && !spare) {
                    this.game_on = false;
                    console.log("if is executed");
                } else if (strike || spare) {
                    this.game = true;
                    console.log("else if is executed");
                }

            }

            console.log(this.scores, this.game_on)
            console.log(`scores: ${this.scores}`)
            console.log(`total is ${this.total}`)
        }
    }

}

game = new Board
game.run()