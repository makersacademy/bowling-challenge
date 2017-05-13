function Bowling() {
  // var score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var score = [];

  var self = {
    i: 0,
    bonus: 0,

    roll: function(pins) {
      if (this.bonus > 0) {
        this.addRoll(pins * 2);
        this.bonus--;
      }
      else {
        this.addRoll(pins);
        if (pins === 10 && isEven(this.i)) {
          this.incrementRoll();
          this.bonus = 2;
      }
      else if (score[this.i] + score[this.i - 1] >= 10) {
      	this.bonus = 1;
      }
      }
      this.incrementRoll();
    },

    incrementRoll: function() {
    		this.i++;
    },

    addRoll: function(pins) {
    		score[this.i] = pins;
    },

    score: function() {
    	return score.reduce((prev, curr) => prev + curr);
    }
  }
  return self;
}

function isEven(num) {
	return (num === 0 || num % 2 === 0)
}
