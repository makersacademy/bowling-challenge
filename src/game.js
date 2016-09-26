function Game(){
  this.frames = [new Frame(1), new Frame(2), new Frame(3), new Frame(4),
                new Frame(5), new Frame(6), new Frame(7), new Frame(8),
                new Frame(9), new Frame(10)];
  this.finalScore = 0;
}

 Game.prototype = {
   calculateScore: function() {
     for (var i=0; i < 10; i++) {
       this.finalScore += this.frames[i].scores;
     }
   }
 };

var frame = new Frame(index);
