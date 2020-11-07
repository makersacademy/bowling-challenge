class Frame {

  constructor() {
    this.pinsLeft = 10
    this.rolls = []
  }

  roll(pinsKnockedDown){
    this.pinsLeft -= pinsKnockedDown
    var roll = new Roll();
    this.rolls.push(roll);
  }

};
