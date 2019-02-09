function Scorecard(){
  this.pins_knocked_one = 0;
  this.pins_knocked_two = 0;
};

var number;

Scorecard.prototype.record_first = function(number){
  this.pins_knocked_one = number;
};

Scorecard.prototype.record_second = function(number){
  this.pins_knocked_two = number;
};
