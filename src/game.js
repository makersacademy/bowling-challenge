
function Game(player) {
  this.player = player;
  this.frames = [new Frame(1), new Frame(2),new Frame(3), new Frame(4),new Frame(5),
                new Frame(6),new Frame(7), new Frame(8),new Frame(9), new Frame(10)];
  this.totalScores = 0;

};

Game.prototype = {
  countScores: function(){
    for (var i=0; i < 10; i++) {
      // adding spare bonus to frame
      this.addSpareBonus(i);
      this.addStrikeBonus(i);
      this.totalScores += this.frames[i].scores;

    };
  },

  addSpareBonus: function(i) {
    if (this.frames[i].isSpare()) {
      this.frames[i].scores += this.frames[i+1].firstScore;
    };
  },

  addStrikeBonus: function(i) {
     if (this.frames[i].isStrike() && this.frames[i+1].isStrike()) {
     this.frames[i].scores += this.frames[i+1].firstScore + this.frames[i+2].firstScore;
   } else if (this.frames[i].isStrike()) {
      this.frames[i].scores += this.frames[i+1].firstScore + this.frames[i+1].secondScore;
   }
  },


};
