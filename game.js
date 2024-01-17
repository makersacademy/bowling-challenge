const bowlingPin = require('./Pin').bowlingPin;
const player = require('./Player').player;
const scoreboard = require('./ScoreBoard').scoreboard;

class Game{
    constructor() {
        this.pins = new bowlingPin();
        this.player = new player();
        this.scoreboard = new scoreboard();
    }
    game() {

    }
}