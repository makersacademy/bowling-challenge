function Scorecard(){
  this.pins_knocked_one = 0;
  this.pins_knocked_two = 0;
  this.frame_score = 0;
  this.total_score_array = [];

  this.bonus = [];
};

var number_one;
var number_two;

Scorecard.prototype.record_first = function(number_one){
  this.pins_knocked_one = number_one;
  this.bonus.push(this.pins_knocked_one);
  return this.pins_knocked_one;
};

Scorecard.prototype.record_second = function(number_two){
  this.pins_knocked_two = number_two;
  this.bonus.push(this.pins_knocked_two);
  return this.pins_knocked_two;
};

Scorecard.prototype.frame_score_display = function(){
  this.frame_score = (this.pins_knocked_one + this.pins_knocked_two);
  this.total_score_array.push(this.frame_score);
  return this.frame_score;
};

Scorecard.prototype.total_score_display = function(){
  var sum = this.total_score_array.reduce((a,b) => a + b, 0);
  if (sum > 0) {
    return sum;
  } else {
    return 'Gutter Game';
  };
};

Scorecard.prototype.clear = function(){
  this.total_score_array = [];
  return this.total_score_array;
};

Scorecard.prototype.strike = function(){
  this.pins_knocked_two = 0;
  this.bonus.push(this.pins_knocked_two);
  return this.pins_knocked_two;
};

Scorecard.prototype.strike_bonus = function(){
  if (this.bonus[0] == 10) {
    var bonus_score = this.bonus[2] + this.bonus[3];
  }
  this.frame_score += bonus_score;
  this.total_score_array.push(bonus_score);
  return bonus_score;
};

Scorecard.prototype.clear_bonus = function(){
  this.bonus = [];
  return this.bonus;
};
