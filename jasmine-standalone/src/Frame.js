function Frame() {
  this._result = {"A": null, "B": null};
  this._frameScore = null;
  this._pins = 10;
  this._multiplyer = null;
};

// Roll functions below. Not DRY code, but most functional solution for now.
// !!Pay close attention to updating possible outcomes at the end of rollA

Frame.prototype.rollA = function(toppledPins){
  if(toppledPins < 0 || toppledPins > this._pins){throw new TypeError("Invalid number of toppledPins")}; // Guard clause against invalid toppledPins inputs
  this._result["A"] = toppledPins;
  this._pins = 10 - this._result["A"];
  if(this._pins == 0){this._multiplyer = 1};
  this.setCurrentScore();
};

Frame.prototype.rollB = function(toppledPins){
  if(toppledPins < 0 || toppledPins > this._pins){throw new TypeError("Invalid number of toppledPins")}; // Guard clause against invalid toppledPins inputs
  this._result["B"] = toppledPins;
  this.setCurrentScore();
};

Frame.prototype.setCurrentScore = function(){
  if (this._result["A"] == 10){
    this._multiplyer = 1;
  } else if ((this._result["A"] + this._result["B"]) == 10){
    this._multiplyer = 0;
  } else if (this._result["B"]){
    this._frameScore = (this._result["A"] + this._result["B"]);
  };
};
//
Frame.prototype.setPreviousScore = function(previousRoll){
  if (previousRoll._multiplyer == 1){
    previousRoll._frameScore = ((this._result["A"] + this._result["B"]) + (previousRoll._result["A"] + previousRoll._result["B"]));
  } else if (previousRoll._multiplyer == 0){
    previousRoll._frameScore = (this._result["A"] + previousRoll._result["A"] + previousRoll._result["B"]);
  } else {
    previousRoll._frameScore = previousRoll._frameScore;
  };
};

// The functions below act only to preserve functionality of the Frame function
// and should not be called in isolation

// Guard clause functions. Guard against invalid inputs and erroneous outcomes.
