function Game() {
   this.score = 1;
 }

 Game.prototype.bowl = function() {
    this.score = 1;
 };

 Game.prototype.secondBowl = function () {
   this.score = 1;
   this.total = this.score + this.score
 };
