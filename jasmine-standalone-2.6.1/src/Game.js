function Game() {
   this.score = STARTING_SCORE;
   this.roll = STARTING_ROLL;
   this.frame = STARTING_FRAME;
 }

 const STARTING_SCORE = 0;
 const STARTING_ROLL = 0;
 const STARTING_FRAME = 1;

 Game.prototype.viewScore = function () {
   return this.score;
 };

 Game.prototype.viewRoll = function () {
   return this.roll;
 };

 Game.prototype.viewFrame = function () {
   return this.frame;
 };
