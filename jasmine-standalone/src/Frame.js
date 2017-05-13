function Frame() {
  this._resultA = 0;
  this._resultB = 0;
  this._frameResult = 0;
  this._frameScore = 0;
  this._possibleResults = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};

// Roll functions below. Not DRY code, but most functional solution for now.
// !!Pay close attention to updating possible outcomes at the end of rollA

Frame.prototype.rollA = function(toppledPins){
  if(toppledPins < 0 || toppledPins > 10){throw new TypeError("Invalid number of toppledPins")}; // Guard clause against invalid toppledPins inputs
  this._resultA = toppledPins;
  this._updateFrameResult();
  this._updatePossible();
};

Frame.prototype.rollB = function(toppledPins){
  if(toppledPins < 0 || toppledPins > Math.max(...this._possibleResults)){throw new TypeError("Invalid number of toppledPins")}; // Guard clause against invalid toppledPins inputs
  this._resultB = toppledPins;
  this._updateFrameResult();
};

// The functions below act only to preserve functionality of the Frame function
// and should not be called in isolation

Frame.prototype._updatePossible = function(){
  this._possibleResults = [];
  var remaining = 10 - this._resultA;
  for (i=0; i<= remaining; i++){
    this._possibleResults.push(i)
  };
};

Frame.prototype._updateFrameResult = function(){
  this._frameResult = (this._resultA + this._resultB);
};

// Guard clause functions. Guard against invalid inputs and erroneous outcomes.
