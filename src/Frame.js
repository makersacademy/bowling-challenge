function Frame(special = false)
) {
  this._remaingPins = 10;
  this._special = special;
  this._rolls = 0
  this._score = 0;
};

Frame.prototype.roll = function (num) {
  this._remaingPins -= num;
  this._score += num;
  console.log(score);
  this._rolls ++;
}
Frame.prototype.isSpecial = function() {
  if (this._rolls <= 2 && this._score === 10) {
    this._special = true;
  }
};

function Special() {
  this._score = 10
}

Special.prototype.bonusScore = function(score) {
  this._score += score;
}

function TenthFrame(){
  this._rolls = 0
  this._score = 0
}

TenthFrame.prototype.roll = function(num){
  this._score += num;
  this._rolls ++;
}
