class Game {
  constructor(pins, score, history, index){
		this.pins = 10;
		this.score = 0;
		this.history = [[],[],[],[],[],[],[],[],[],[]]
		this.index = 0
  }
  

  record(val){
	  this.pins -= val;
		this.history[this.index].push(val);
		if (this.history[this.index].length > 1 || val === 10){
			this.index += 1
			this.pins = 10
		}
		console.log(this.pins)
  }



}

module.exports = Game;
