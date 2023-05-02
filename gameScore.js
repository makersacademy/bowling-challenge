class Frame {
    constructor() {
        this.rolls = [];
    }
  
    addRoll(pins) {
        this.rolls.push(pins);
    }
  
    score() {
        return this.rolls;
    }
}

class Game {
    constructor() {
        this.frames = [];
        this.frame = new Frame();
    }
  
    roll(pins) {
        this.frame.addRoll(pins);
    
        if (this.frame.rolls.length === 2 || this.frame.rolls.reduce((a, b) => a + b, 0) === 10) {
          this.frames.push(this.frame.score());
          this.frame = new Frame();
        }
    }
  
    getScore() {
        return this.frames;
    }
}

class FinalScore {
    constructor() {
        this.total = 0
    }

    addStrikeBonus (score) {

    }

    addSpareBonus (score) {

    }

    gameScore () {

    }

}

module.exports = {
    Game: Game,
    Frame: Frame,
    FinalScore: FinalScore
};
  
const game = new Game();

game.roll(10);
game.roll(5);
game.roll(2);
game.roll(10);
game.roll(10);
game.roll(5);
game.roll(2);
game.roll(10);

console.log(game.getScore()); 