const bowlingPin = require('./Pin').bowlingPin;
const player = require('./Player').player
const scoreBoard = require('./ScoreBoard').scoreBoard

class Game{
    constructor() {
        this.bowlingPinInstance = new bowlingPin();
        this.player = new player()
        this.scoreBoard = new scoreBoard()
    
    }
    game(playername) {
        let rollResult = this.bowlingPinInstance.roll();
        let player = this.player.add(playername)
    }
}

game = new Game()
console.log(game.game('gustavo'))