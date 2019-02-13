class Game {
  constructor(pins, score, history, index) {
    this.pins = 10;
    this.score = [];
    this.history = [[], [], [], [], [], [], [], [], [], []];
    this.index = 0;
  }

  record(val) {
    this.pins -= val;
    this.history[this.index].push(val);
    if (this.history[this.index].length > 1 || val === 10) {
			let framescore = this.history[this.index].reduce((acc, cur) => acc + cur);
			this.score.push(framescore);
			this.index += 1;
      this.pins = 10;
    }
	}

}

module.exports = Game;
