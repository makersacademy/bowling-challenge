var Frame = function() {

  var frame = 0;
  var MAX_PINS = 10;
  var roll_number = 0;
  var MAX_ROLLS = 2;
  var first_roll = 0;

  this.roll = function roll(pins){
    if ( roll_number < MAX_ROLLS  && this.total() < MAX_PINS){

      frame += pins;
      roll_number ++;

      if ( this.total() > MAX_PINS ){
        frame = MAX_PINS
      }

      if ( roll_number == 1){
        first_roll = pins;
      }
    }
  }

  this.total = function total(){
    return frame;
  }

  this.isStrike = function isStrike(){
    return roll_number == 1 && this.total() == MAX_PINS;
    // if ( roll_number == 1 && this.total() == MAX_PINS ) {
    //   return true;
    // }
    // return false;
  }

  this.isSpare = function isSpare(){
    return roll_number !== 1 && this.total() == MAX_PINS;
    // if ( roll_number !== 1 && this.total() == MAX_PINS ) {
    //   return true;
    // }
    //   return false;
  }

  this.get_first_roll = function get_first_roll(pins){
    return first_roll;
  }

};