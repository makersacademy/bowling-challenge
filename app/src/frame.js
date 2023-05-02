class Frame {
  constructor(rolls) { // collects all the arguments passed to the function as an array
    this.rolls = rolls;
    this.claimBonusFor = 0;
    this.claimedBonuses = [];
    this.frameNumber = 0;
    this.setClaimBonus();
  }

  setFrameNumber(number) { // reference to the frame number to check if we are in the special case of the 10th frame.
    this.frameNumber = number;
  }

  setClaimBonus(){  // to know if this frame has any future claims on a roll as bonus.
    const claimBonus = this.getFrameScore() === 10 ? 1 : 0;
    this.claimBonusFor = claimBonus === 1 && this.rolls.length === 1 ? 2 : claimBonus;
  }

  reduceClaimBonusFor() {  //once the bonus been claimed we want to deduct it from the future claims.
    this.claimBonusFor--;
  }

  addClaimedBonus(bonus){
    this.claimedBonuses.push(bonus)
  }

  getFrameScore(){
    if(this.frameNumber > 10){
      return 0;
    }else{
      return this.rolls.slice(0, 3).reduce((total, currentValue) => total + currentValue, 0)
    }
  }

  getFrameBonus(){
    return this.claimedBonuses.reduce((total, currentValue) => total + currentValue, 0)
  }
}


module.exports = Frame;