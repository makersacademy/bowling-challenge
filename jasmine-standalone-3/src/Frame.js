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
       return this._lastFrame(rollscore)
    }

    else {
      return this._notLastFrame(rollscore)
    }
  }

  _lastFrame(rollscore) {
    if(this.rollnumber == 0) {
      this._addFirstRoll(rollscore)
    } else if(this.rollnumber == 1) {
      this._addSecondRoll(rollscore)
    } else if(this._twoFinalStrikes() || this._finalHalfStrike()) {
      this._addThirdRoll(rollscore)
    } else {
      return "Frame Complete"
    }
  }

  _notLastFrame(rollscore) {
    if(this._strike(rollscore)) {
      this._addRollStrike(rollscore)
    } else if(this.rollnumber == 0) {
      this._addFirstRoll(rollscore)
    } else if(this.rollnumber == 1) {
      this._addSecondRoll(rollscore)
    } else {
      return "Frame Complete"
    }
  }

  _strike(rollscore) {
    return this.rollnumber== 0 && rollscore == 10
  }

  _twoFinalStrikes() {
    return this.rollnumber == 2 && this.scoreroll1 == 10 && this.scoreroll2 == 10
  }

  _finalHalfStrike() {
    return this.rollnumber == 2 && (this.scoreroll1 + this.scoreroll2) == 10
  }

  _addRollStrike(rollscore) {
    this.scoreroll1 = rollscore
    this.rollnumber += 2;
  }

  _addFirstRoll(rollscore) {
    this.scoreroll1 = rollscore
    this.rollnumber += 1;
  }

  _addSecondRoll(rollscore) {
    this.scoreroll2 = rollscore
    this.rollnumber += 1;
  }

  _addThirdRoll(rollscore) {
    this.scoreroll3 = rollscore;
    this.rollnumber += 1;
  }


}
