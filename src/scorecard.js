

function Scorecard() {
  this.frameScores = [];
  this.currentFrame = [];
  this.bonus = 0;
  this.spare = false;
  this.total = 0;
}

Scorecard.prototype.roll = function(pins){
  this.currentFrame.push(pins);
};

Scorecard.prototype.calcFrameScores = function () {

  if(this._previousRollisSpare()){
    this._updatePreviousSpareFrame ();
  }

  if(this._isSpare()) {
    this._calcSpareLogic();
    return this.frameScores;
  } else {
      for(var i = 0; i < this.currentFrame.length; i++) {
        this.total += this.currentFrame[i];
      }
      this.frameScores.push(this.total);
      this._nextFrame();
  }
};

Scorecard.prototype._isSpare = function (){
  return this.currentFrame[0] + this.currentFrame[1] === 10;
};

Scorecard.prototype._previousRollisSpare = function (){
 return this.bonus !== 0 && this.spare == true;
};

Scorecard.prototype._updatePreviousSpareFrame = function () {
  this.total += this.bonus + this.currentFrame[0];
  this.frameScores.push(this.total);
  this.spare = false;
  this.bonus = 0;
};

Scorecard.prototype._calcSpareLogic = function (){
  this.spare = true;
  this.bonus = 10;
  this._nextFrame();
};

Scorecard.prototype._nextFrame = function () {
   this.currentFrame = [];
};

// Scorecard.prototype. = function () {
//   var total = 0;
//   for(var i = 0; i< this.framesScores.length; i++) {
//     total += this.framesScores[i]
//   }
//     return total;
// }
