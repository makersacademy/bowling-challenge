var Frame = function() {
  this.rolls = [];

 Frame.prototype.add_roll = function(knocked_down_pins){
   if(this.rolls.length >= 2){
     throw new Error('Each frame can have at most two rolls');
   } else {
   this.rolls.push(knocked_down_pins);
  }
 }

 Frame.prototype.score_no_bonus = function(){
   var score = 0;
   this.rolls.forEach(function (roll, index) {
     score += roll;
   });
   return score;
 }





 }
