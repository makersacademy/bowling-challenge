
//  888                               d8b                888
// 888                               Y8P                888
// 888                                                  888
// 888888 .d88b. 888d88888888b.d88b. 88888888b.  8888b. 888888 .d88b. 888d888
// 888   d8P  Y8b888P"  888 "888 "88b888888 "88b    "88b888   d88""88b888P"
// 888   88888888888    888  888  888888888  888.d888888888   888  888888
// Y88b. Y8b.    888    888  888  888888888  888888  888Y88b. Y88..88P888
//  "Y888 "Y8888 888    888  888  888888888  888"Y888888 "Y888 "Y88P" 888

// DECIDES WHETHER TO TERMINATE A FRAME OR NOT GIVEN A PLAY STATE

function FrameTerminator(){

  this.framesFinished = 0;
  this.throwsMade  = 0;
  this.throw1 = 0;
  this.throw2 = 0;
  this.throw3 = 0;

  this.isFrameOver = function(state){
    this._stateParser(state)
    if (this._isNotInFrame10()){
      return (this._isStrike() || this._isThrowLimitExceeded())
    } else{
      return (this._isF10ThrowLimit()||this._isF10NormalRound())
    }
  }

}

FrameTerminator.prototype._isNotInFrame10 = function(){
  return !(this.framesFinished === 9)
}
FrameTerminator.prototype._isStrike = function(){
  return (this.throw1 === 10 && this.throwsMade === 1)
}
FrameTerminator.prototype._isThrowLimitExceeded = function(){
  return (this.throwsMade === 2)
}

FrameTerminator.prototype._isF10ThrowLimit= function(){
  return (this.throwsMade === 3);
}

FrameTerminator.prototype._isF10NormalRound = function(){
  var scoreTotal =(this.throw1 + this.throw2)
  return (this.throwsMade === 2 && scoreTotal < 10);
}

FrameTerminator.prototype._stateParser = function(state){
  this.framesFinished = state.framesFinished;
  this.throwsMade  = state.throwsMade;
  this.throw1 = state.throw1;
  this.throw2 = state.throw2;
  this.throw3 = state.throw3;
}
