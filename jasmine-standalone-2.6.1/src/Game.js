function Game() {
   this.score = 1;
   this.firstScore = 1;
   this.secondScore = 2;
 }

 Game.prototype.firstBowl = function() {
    this.score = 1;
 };

 Game.prototype.secondBowl = function () {
   this.score = 2;
   this.total = this.firstScore + this.secondScore;
 };
