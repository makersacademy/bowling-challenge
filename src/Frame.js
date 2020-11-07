class Frame {

  constructor() {
    this.pinsLeft = 10
  }

  roll(pinsKnockedDown){
    this.pinsLeft -= pinsKnockedDown
  }

};
