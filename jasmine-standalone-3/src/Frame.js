class Frame {

  constructor(framenumber) {
    this.framenumber = framenumber
    this.scoreroll1 = 0
    this.scoreroll2 = 0
    this.scoreroll3 = 0
    this.rollnumber = 0
  }

  // var rollnumber = 0
  //
  // this._addrollnumber = function() {
  //   rollnumber += 1;
  // }

  addroll(rollscore) {

    if(this.framenumber == 9) {

      if(this.rollnumber == 0) {
        this.scoreroll1 = rollscore;
        this.rollnumber += 1;
      }

      else if(this.rollnumber == 1) {
        this.scoreroll2 = rollscore;
        this.rollnumber += 1;
      }

      else if(this.rollnumber == 2 && this.scoreroll1 == 10 && this.scoreroll2 == 10) {
        this.scoreroll3 = rollscore;
        this.rollnumber += 1;
      }

      else if(this.rollnumber == 2 && (this.scoreroll1 + this.scoreroll2) == 10 && !(this.scoreroll1 == 10)) {
        this.scoreroll3 = rollscore;
        this.rollnumber += 1;
      }

      else {
        return "Frame Complete"
      }

    }

    else if(this.rollnumber== 0 && rollscore == 10) {
      this.scoreroll1 = rollscore
      this.rollnumber += 2;
    }

    else if(this.rollnumber == 0) {
      this.scoreroll1 = rollscore
      this.rollnumber += 1;
    }

    else if(this.rollnumber == 1) {
      this.scoreroll2 = rollscore
      this.rollnumber += 1;
    }

    else {
      return "Frame Complete"
    }
  }

}
