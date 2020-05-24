'use strict';

class BowlingCalculator {

  constructor() {
    this.DEFAULT_PINS = 0;
    this.pins = this.DEFAULT_PINS;
    this.strike = 10;
    this.spare = 10;
  }

  getCurrentPins(){
  return this.pins;
  }

  showStrike(){
    return this.strike;
  }

  up(){
    if (this.pins === this.strike) {
  return;
    }

    this.pins++;
  }

  down(){
    if (this.pins === this.DEFAULT_PINS) {
  return;
   }
    this.pins--;
  }

  reset(){
    return this.pins = this.DEFAULT_PINS;
    //create a new object to enable reset
  }
  //
  // function strikeCalculator(){
  //   if (roll_1.pins === roll.strike) {
  //     rollResult = roll_1.pins + (roll_3.pins + roll_4.pins);
  //     totalResult = roll_1.pins + ((roll_3.pins + roll_4.pins) * 2));
  //
  //   } else if (roll_1.pins != roll.strike) {
  //     $('.total').text(roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
  //     + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
  //     + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
  //   }
  //
  //   if ((roll_1.pins === roll.strike) && (roll_3.pins === roll.strike)) {
  //     $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
  //     $('.total').text(roll_3.pins + ((roll_5.pins + roll_6.pins) * 2));
  //
  //   } else if ((roll_1.pins != roll.strike) && (roll_3.pins === roll.strike)) {
  //     $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
  //     $('.total').text(roll_3.pins + ((roll_5.pins + roll_6.pins) * 2));
  //   }
  //
  //   if (roll_5.pins === roll.strike) {
  //     $('#5').text(roll_5.pins + (roll_7.pins + roll_8.pins));
  //     $('.total').text(roll_5.pins + ((roll_7.pins + roll_8.pins) * 2));
  //
  //   } else if (roll_5.pins != roll.strike) {
  //     // $('.total').text($('#1') + $('#2' ) + $('#3') + $('#4') + $('#5'));
  //     $('.total').text(roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
  //     + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
  //     + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
  //   }
  // }
  //





  }
