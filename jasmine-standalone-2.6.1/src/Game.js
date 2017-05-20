function Game() {
   this.score = STARTING_SCORE;
 }

 const STARTING_SCORE = 0

 Game.prototype.viewScore = function () {
   return this.score;
 };
