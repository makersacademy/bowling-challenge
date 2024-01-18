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
        this.rollResult = this.bowlingPinInstance.roll();
        this.scoreBoard_game_01 = this.scoreBoard.game_01();
        this.strike = false;
        this.spare = false

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rollAndAsk(playerName, turn = 1) {
        if (turn > 10) {
            console.log("Game over");
            this.rl.close();
            return;
        }

        if (turn == 1) {
            this.rl.question(`Alright, this is the First Turn, please press enter to start bowling or 'no' to stop and end the game: `, (answer) => {
                if (answer.toLowerCase() !== 'no') {
                    console.log(this.rollResult);
                    if (this.rollResult.rollOne == 10) {
                        console.log("WOW, You got a Strike");
                        this.rollResult.rollTwo = 0;
                        this.strike = true;
                        this.rollAndAsk(playerName, turn + 1);
                    } else if (this.rollResult.rollOne + this.rollResult.rollTwo >= 10) {
                        console.log("Nice, You got a Spare");
                        
                    }
                    this.rollAndAsk(playerName, turn + 1);
                } else {
                    console.log("Game stopped");
                    this.rl.close();
                }
            });
        } else { 
            this.rl.question(`Turn: ${turn} Roll again? (press Enter for yes, type 'no' to stop) `, (answer) => {
                if (answer.toLowerCase() !== 'no') {
                    console.log(this.rollResult, this.bowlingPinInstance.roll());
                    this.scoreBoard.frames['frame01'] += 1;
                    this.scoreBoard.frames['frame02'] += 1;
                    this.rollAndAsk(playerName, turn + 1);
                } else {
                    console.log("Game stopped");
                    this.rl.close();
                }
            });
        }
    }
    
    is_game_on(playerName) {
        this.player.add(playerName);
        this.rl.question(`Hi ${playerName} Are you ready to play? (press Enter to start) `, (answer) => {
            if (answer.toLowerCase() !== 'no') { 
                this.rollAndAsk(playerName);
            } else {
                console.log("Alright, we are not gonna start the game.");
                this.rl.close();
            }
        });
    }
}

let game = new Game();
game.is_game_on("Gustavo"); // Start the game with a prompt
