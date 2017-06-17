var Frame = function() {
  this.rolls = [];

 Frame.prototype.add_roll = function(knocked_down_pins){
   var max_knocked_down_pins = knocked_down_pins;
   this.rolls.forEach(function (roll, index) {
     max_knocked_down_pins += roll;
   });
   if(max_knocked_down_pins > 10){
     throw new Error('Maximum knocked down pins in each frame is 10');
   }
   if(this.rolls.length >= 2){
     throw new Error('Each frame can have at most two rolls');
   }
   this.rolls.push(knocked_down_pins);
 }

 Frame.prototype.score_no_bonus = function(){
   var score = 0;
   this.rolls.forEach(function (roll, index) {
     score += roll;
   });
   return score;
 }

 Frame.prototype.is_strike = function(){
   return this.rolls[0] === 10 && this.rolls[1] !== null;
 }

 Frame.prototype.is_spare = function(){
   return this.rolls[0] + this.rolls[1] === 10;
}

 }
