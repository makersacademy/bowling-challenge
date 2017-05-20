function Game() {
   this.score = STARTING_SCORE;
   this.roll = STARTING_ROLL;
 }

 const STARTING_SCORE = 0;
 const STARTING_ROLL = 0;

 Game.prototype.viewScore = function () {
   return this.score;
 };

 Game.prototype.viewRoll = function () {
   return this.roll;
 };
