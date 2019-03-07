class Frame {

  constructor(framenumber) {
    this.framenumber = framenumber
    this.scoreroll1 = 0
    this.scoreroll2 = 0
    this.scoreroll3 = 0
    this.rollnumber = 0
  }

  addroll(rollscore) {

    if(this.framenumber == 9) {
       return this.lastFrame(rollscore)
    }

    else {
      return this.notLastFrame(rollscore)
    }
  }

  lastFrame(rollscore) {
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

  notLastFrame(rollscore) {
    if(this.rollnumber== 0 && rollscore == 10) {
      this.addRollStrike(rollscore)
    } else if(this.rollnumber == 0) {
      this.addFirstRoll(rollscore)
    } else if(this.rollnumber == 1) {
      this.addSecondRoll(rollscore)
    } else {
      return "Frame Complete"
    }
  }

  addRollStrike(rollscore) {
    this.scoreroll1 = rollscore
    this.rollnumber += 2;
  }

  addFirstRoll(rollscore) {
    this.scoreroll1 = rollscore
    this.rollnumber += 1;
  }

  addSecondRoll(rollscore) {
    this.scoreroll2 = rollscore
    this.rollnumber += 1;
  }



}
