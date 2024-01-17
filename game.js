const readline = require('readline');
const bowlingPin = require('./Pin').bowlingPin;
const player = require('./Player').player;
const scoreBoard = require('./ScoreBoard').scoreBoard;

class Game {
    constructor() {
        this.bowlingPinInstance = new bowlingPin();
        this.player = new player();
        this.scoreBoard = new scoreBoard();
        this.game_is_on = true;
        this.number_of_plays = 0;

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rollAndAsk(playername, turn = 1) {
        if (turn > 10) {
            console.log("Game over");
            this.rl.close();
            return;
        }

        let rollResult = this.bowlingPinInstance.roll();
        let player = this.player.add(playername);
        let scoreBoard = this.scoreBoard.game_01();
        console.log(rollResult, player, scoreBoard);
        console.log(`Turn ${turn}`);

        // Additional game logic here

        this.rl.question("Roll again? (press Enter for yes, type 'no' to stop) ", (answer) => {
            if (answer.toLowerCase() !== 'no') {
                this.rollAndAsk(playername, turn + 1);
            } else {
                console.log("Game stopped");
                this.rl.close();
            }
        });
    }

    is_game_on() {
        this.rl.question("Are you ready to play? (press Enter to start) ", (answer) => {
            this.rollAndAsk('gustavo');
        });
    }

    next_game() {
        this.scoreBoard.frames['frame01'] += 1;
        this.scoreBoard.frames['frame02'] += 1;
    }
}

let game = new Game();
game.is_game_on(); // Start the game with a prompt
