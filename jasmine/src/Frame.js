function Frame() {
  this.frameScore = 0;
  this.bowlOne = null;
  this.bowlTwo = null;

  Frame.prototype.isStrike = function(){
    return this.bowlOne === 10
  };

  Frame.prototype.isSpare = function(){
    return this.bowlOne + this.bowlTwo === 10
  };

  Frame.prototype.bowl = function(pins){
    this.updateFrame(pins);
  };

  Frame.prototype.updateFrame = function(pins){
    this.frameScore += pins;
    this.bowlOne === null ? this.bowlOne = pins : this.bowlTwo = pins;
  };
}

//   this.isComplete = false;
// };
//
// Frame.prototype.bowlOne = function(pins) {
//   this.amountOfPinsOne = pins;
//   if (this.strike()) {
//     this.isComplete = true;
//   }
// };
//
// Frame.prototype.bowlTwo = function(pins) {
//   this.amountOfPinsTwo = pins;
//   this.isComplete = true;
// };
//
// Frame.prototype.strike = function(){
//   return this.amountOfPinsOne === 10
// }
//
// Frame.prototype.spare = function(){
//   if(this.amountOfPinsOne + this.amountOfPinsTwo === 10)
//   return true;
// }
//
// Frame.prototype.calculate = function(){
//   if(frame.strike() == true){
//     this.frameScore = 0;
//     return 'strike'
//   }
//   if(frame.spare() == true){
//     this.frameScore = 0;
//     return 'spare'
//   }
//   this.frameScore = this.amountOfPinsOne + this.amountOfPinsTwo
// }
