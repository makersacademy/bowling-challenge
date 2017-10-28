function Frame(number, first_roll) {
  this._number = number;
  this._first_roll = first_roll;
  this._second_roll = 0;
  this._bonus = 0;
}

Frame.prototype.number = function() {
  return this._number;
}

Frame.prototype.total = function() {
  return this._first_roll + this._second_roll + this._bonus;
}

Frame.prototype.add_roll = function(second_roll) {
  this._second_roll = second_roll;
}

Frame.prototype.add_bonus = function(bonus) {
  this._bonus = bonus;
}
