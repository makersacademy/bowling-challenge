function Scorecard(){
  this.pins_knocked_one = 0;
  this.pins_knocked_two = 0;
  this.frame_score = 0;
  this.total_score_array = [];

  this.st_bonus = [];
  this.sp_bonus = [];
};

var number_one;
var number_two;

Scorecard.prototype.record_first = function(number_one){
  this.pins_knocked_one = number_one;
  this.st_bonus.push(this.pins_knocked_one);
  this.sp_bonus.push(this.pins_knocked_one);
  return this.pins_knocked_one;
};

Scorecard.prototype.record_second = function(number_two){
  this.pins_knocked_two = number_two;
  this.st_bonus.push(this.pins_knocked_two);
  this.sp_bonus.push(this.pins_knocked_two);
  return this.pins_knocked_two;
};
// ----
Scorecard.prototype.frame_score_display = function(){
  this.frame_score = (this.pins_knocked_one + this.pins_knocked_two);
  this.total_score_array.push(this.frame_score);
  return this.total_score_array.reduce((a,b) => a + b, 0);
};
// ----
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
// test will fail but this seems to be redundant
Scorecard.prototype.strike = function(){
  this.pins_knocked_two = 0;
  this.st_bonus.push(this.pins_knocked_two);
  return this.pins_knocked_two;
};

Scorecard.prototype.strike_bonus = function(){
  if (this.st_bonus[0] == 10 && this.st_bonus[2] != 10) {
    var bonus_score = this.st_bonus[2] + this.st_bonus[3];
  } else if (this.st_bonus[2] == 10 && this.st_bonus[4] != 10){
    var bonus_score = this.st_bonus[4] + this.st_bonus[5];
  } else if (this.st_bonus[4] == 10 && this.st_bonus[6] != 10){
    var bonus_score = this.st_bonus[6] + this.st_bonus[7];
  } else if (this.st_bonus[6] == 10 && this.st_bonus[8] != 10){
    var bonus_score = this.st_bonus[8] + this.st_bonus[9];
  } else if (this.st_bonus[8] == 10 && this.st_bonus[10] != 10){
    var bonus_score = this.st_bonus[10] + this.st_bonus[11];
  } else if (this.st_bonus[10] == 10 && this.st_bonus[12] != 10){
    var bonus_score = this.st_bonus[12] + this.st_bonus[13];
  } else if (this.st_bonus[12] == 10 && this.st_bonus[14] != 10){
    var bonus_score = this.st_bonus[14] + this.st_bonus[15];
  } else if (this.st_bonus[14] == 10 && this.st_bonus[16] != 10){
    var bonus_score = this.st_bonus[16] + this.st_bonus[17];
  } else if (this.st_bonus[16] == 10 && this.st_bonus[18] != 10){
    var bonus_score = this.st_bonus[18] + this.st_bonus[19];
  }

  this.frame_score += bonus_score;
  this.total_score_array.push(bonus_score);
  this.st_bonus = [];
  // return bonus_score;
};

Scorecard.prototype.clear_bonus = function(){
  if (this.st_bonus[0] != null) {
    return this.st_bonus = [];
  }
  if (this.sp_bonus[0] != null) {
    return this.sp_bonus = [];
  }
};

Scorecard.prototype.spare_bonus = function(){

  if (this.sp_bonus[0] + this.sp_bonus[1] == 10 && this.sp_bonus[0] != 10) {
    var bonus_score = this.sp_bonus[2];
    this.total_score_array.push(bonus_score);
    this.frame_score += bonus_score;
    this.sp_bonus.splice(0,2)
  } else if (this.sp_bonus[0] + this.sp_bonus[1] != 10) {
    this.sp_bonus.splice(0,2)
  }
};
