var Frame = function() {

  var frame = 0;
  var MAX_PINS = 10;
  var roll_number = 0;
  var MAX_ROLLS = 2;

  this.roll = function roll(pins){
    if ( roll_number < MAX_ROLLS ){

      frame += pins;
      roll_number ++;

      if ( this.total() > MAX_PINS ){
        frame = MAX_PINS
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

};