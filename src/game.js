Game = function() {
  this._frame1 = new Frame();
  this._frame2 = new Frame();
  this._frame3 = new Frame();
  this._frame4 = new Frame();
  this._frame5 = new Frame();
  this._frame6 = new Frame();
  this._frame7 = new Frame();
  this._frame8 = new Frame();
  this._frame9 = new Frame();
  this._frame10 = new Frame();
  this._frameTotal = [];
  this._gameTotal = 0;
};
//
// Game.prototype.getGameTotal = function() {
//   var a = this._frame1._frameScore;
//   var b = this._frame2._frameScore;
//   var c = this._frame3._frameScore;
//   var d = this._frame4._frameScore;
//   var e = this._frame5._frameScore;
//   var f = this._frame6._frameScore;
//   var g = this._frame7._frameScore;
//   var h = this._frame8._frameScore;
//   var i = this._frame9._frameScore;
//   var j = this._frame10._frameScore;
//
//   this._frameTotal.push(a,b,c,d,e,f,g,h,i,j);
//
//   this._gameTotal = this._frameTotal.reduce(function(a, b) {
//     return a + b;
//   }, 0);
//
//   return this._gameTotal;
// };
//
// Game.prototype.getBonus = function(previousFrame, roll1) {
//   if (previousFrame.getStrikeType() === "X") {
//     previousFrame.addBonus(10);
//   }
//   else if (previousFrame.getStrikeType() === "/") {
//     previousFrame.addBonus(roll1);
//   } else {
//   }
// };
//
// Game.prototype.getFinalBonus = function(previousFrame, roll1, roll2) {
//   var rolls = roll1 + roll2;
//   if (previousFrame.getStrikeType() === "X") {
//     previousFrame.addBonus(rolls);
//   }
//   else if (previousFrame.getStrikeType() === "/") {
//     previousFrame.addBonus(roll1);
//   } else {
//   }
// };
//
// Game.prototype.playFrame1 = function(roll1, roll2) {
//   this._frame1.setRoll1(roll1);
//   this._frame1.setRoll2(roll2);
// };
//
// Game.prototype.playFrame2 = function(roll1, roll2) {
//   this._frame2.setRoll1(roll1);
//   this._frame2.setRoll2(roll2);
//   this.getBonus(this._frame1, roll1);
// };
//
// Game.prototype.playFrame3 = function(roll1, roll2) {
//   this._frame3.setRoll1(roll1);
//   this._frame3.setRoll2(roll2);
//   this.getBonus(this._frame2, roll1); //prev frame may get a bonus
//   if (this._frame1.getStrikeType() === "X"){
//     this.getBonus(this._frame1, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame4 = function(roll1, roll2) {
//   this._frame4.setRoll1(roll1);
//   this._frame4.setRoll2(roll2);
//   this.getBonus(this._frame3, roll1); //prev frame may get a bonus
//   if (this._frame2.getStrikeType() === "X"){
//     this.getBonus(this._frame2, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame5 = function(roll1, roll2) {
//   this._frame5.setRoll1(roll1);
//   this._frame5.setRoll2(roll2);
//   this.getBonus(this._frame4, roll1); //prev frame may get a bonus
//   if (this._frame3.getStrikeType() === "X"){
//     this.getBonus(this._frame3, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame6 = function(roll1, roll2) {
//   this._frame6.setRoll1(roll1);
//   this._frame6.setRoll2(roll2);
//   this.getBonus(this._frame5, roll1); //prev frame may get a bonus
//   if (this._frame4.getStrikeType() === "X"){
//     this.getBonus(this._frame4, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame7 = function(roll1, roll2) {
//   this._frame7.setRoll1(roll1);
//   this._frame7.setRoll2(roll2);
//   this.getBonus(this._frame6, roll1); //prev frame may get a bonus
//   if (this._frame5.getStrikeType() === "X"){
//     this.getBonus(this._frame5, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame8 = function(roll1, roll2) {
//   this._frame8.setRoll1(roll1);
//   this._frame8.setRoll2(roll2);
//   this.getBonus(this._frame7, roll1); //prev frame may get a bonus
//   if (this._frame6.getStrikeType() === "X"){
//     this.getBonus(this._frame6, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame9 = function(roll1, roll2) {
//   this._frame9.setRoll1(roll1);
//   this._frame9.setRoll2(roll2);
//   this.getBonus(this._frame8, roll1); //prev frame may get a bonus
//   if (this._frame7.getStrikeType() === "X"){
//     this.getBonus(this._frame7, roll1);//prev prev frame gets a bonus
//   }
// };
//
// Game.prototype.playFrame10 = function(roll1, roll2) {
//   this._frame10.setRoll1(roll1);
//   this._frame10.setRoll2(roll2);
//   if (this._frame10.getStrikeType() === "X" || this._frame10.getStrikeType() === "/"){
//     this.getFinalBonus(this._frame9, roll1, roll2); //prev frame may get a bonus
//     this._frame10.getExtraRoll();
//     if (this._frame8.getStrikeType() === "X"){
//       this.getBonus(this._frame8, roll1);//prev prev frame gets a bonus
//     }
//   }
//   else {
//     this.getFinalBonus(this._frame9, roll1, roll2); //prev frame may get a bonus
//       if (this._frame8.getStrikeType() === "X"){
//         this.getBonus(this._frame8, roll1);//prev prev frame gets a bonus
//       }
//   }
//   this.getGameTotal();
// };
