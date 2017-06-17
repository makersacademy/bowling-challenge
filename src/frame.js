var Frame = function() {
  this.roll_count = 0

 Frame.prototype.add_roll = function(knocked_down_pins){
   if(this.roll_count >= 2){
     throw new Error('Each frame can have at most two rolls');
   } else{
   this.roll_count += 1
 }
 }





 }
