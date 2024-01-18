const readline = require('readline');
const bowlingPin = require('./Pin').bowlingPin;
const player = require('./Player').player;
const scoreBoard = require('./ScoreBoard').scoreBoard;

class Game {
    constructor() {
        this.bowlingPinInstance = new bowlingPin();
        this.player = new player();
        this.scoreBoard = new scoreBoard();
        this.rollResult = this.bowlingPinInstance.roll();
        this.scoreBoard_game_01 = this.scoreBoard.game_01();
        this.strike = false;
        this.spare = false;
        this.total_score = 0;
        this.remaining_strike = 0
        this.remaining_spare = 0

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rollAndAsk(playerName, turn = 1) {
        this.scoreBoard.frames['frame01'] = turn;
        this.scoreBoard.frames['frame02'] = turn;
        this.bowlingPinInstance.roll()
        if (turn > 10) {
            console.log("Game over");
            this.rl.close();
            return;
        }

        if (turn == 1) {
            this.rl.question(`Alright, this is the First Turn, please press enter to start bowling or 'no' to stop and end the game: `, (answer) => {
                if (answer.toLowerCase() !== 'no') {
                    if (this.rollResult.rollOne == 10) { 
                        this.strike = true;
                        this.total_score = 10;
                        this.remaining_strike = 2
                        console.log(`WOW, You got a Strike!! Roll One: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                    } else if (this.rollResult.rollOne + this.rollResult.rollTwo == 10) {  
                        this.spare = true;
                        this.total_score = 10;
                        this.remaining_spare = 1
                        console.log(`Nice, You got a Spare. Roll One: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                    } else {
                        this.total_score = this.rollResult.rollOne + this.rollResult.rollTwo;
                        console.log(`Your first Round status: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
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
                    // No strike 
                    if (this.remaining_strike == 0 && this.remaining_spare == 0) {
                        if (this.rollResult.rollOne == 10) { 
                            this.total_score += 10;
                            this.remaining_strike = 2;
                            console.log(`WOW, You got a Strike!! Roll One: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        } else if (this.rollResult.rollOne + this.rollResult.rollTwo == 10) {  
                            this.total_score += 10;
                            this.remaining_spare = 1;
                            console.log(`Nice, You got a Spare. Roll One: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        } else {
                            this.total_score += this.rollResult.rollOne + this.rollResult.rollTwo;
                            console.log(`Your ${turn} status: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        }
                    // If got a strike
                    } else if (this.remaining_strike >= 1 && this.remaining_spare == 0) {
                        if (this.rollResult.rollOne == 10) {
                            this.total_score += 20;
                            this.remaining_strike += 2;
                            console.log(`WOW, You got two Strikes in a row: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        // If you got a strike in the first and a spare in the second
                        } else if (this.rollResult.rollOne + this.rollResult.rollTwo == 10) {
                            this.total_score += 20;
                            this.remaining_strike -= 1;
                            this.remaining_spare += 1
                            this.total_score += this.rollResult.rollOne + this.rollResult.rollTwo;
                            console.log(`Nice, You got a Spare: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        // Nor strike or Spare in the second round
                        } else {
                            this.remaining_strike -= 1
                            this.total_score += (this.rollResult.rollOne + this.rollResult.rollTwo) * 2; // Double the bonus for striking last round
                            console.log(`Your ${turn} status: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        } 
                    // If got a spare
                    } else if (this.remaining_strike >= 0 && this.remaining_spare >= 1) {
                        if (this.rollResult.rollOne == 10) {
                            this.total_score += 20;
                            this.remaining_strike += 2;
                            this.remaining_spare -= 1
                            console.log(`WOW, You got two Strikes in a row: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        // If you got a strike in the first and a spare in the second
                        } else if (this.rollResult.rollOne + this.rollResult.rollTwo == 10) {
                            this.total_score += 20;
                            this.remaining_spare += 1
                            this.total_score += this.rollResult.rollOne + this.rollResult.rollTwo;
                            console.log(`Nice, You got a Spare: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        // Nor strike or Spare in the second round
                        } else {
                            this.remaining_strike -= 1
                            this.total_score += (this.rollResult.rollOne + this.rollResult.rollTwo) * 2; // Double the bonus for striking last round
                            console.log(`Your ${turn} status: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                        } 


                    // If got a spare and a strike
                    } else if (this.remaining_strike >= 1 && this.remaining_spare >= 1) {
                         // If you got a strike now
                         if (this.rollResult.rollOne == 10) {
                            this.total_score += 10;
                            this.total_score += this.rollResult.rollOne + this.rollResult.rollTwo;
                            this.strike = true
                            this.spare = false
                            console.log(`WOW, You got a strike in a roll: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);
                         } else if (this.rollResult.rollOne + this.rollResult.rollTwo == 10) {
                            this.total_score += 10;
                            this.strike = false
                            this.spare = true
                            this.total_score += (this.rollResult.rollOne + this.rollResult.rollTwo) * 2; // Double the bonus for striking last round
                            console.log(`Your ${turn} status: ${this.rollResult.rollOne}, Roll Two: ${this.rollResult.rollTwo}, Total Score ${this.total_score}`);

                         }
                    
                    }
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
