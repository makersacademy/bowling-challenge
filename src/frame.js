class Frame {

  constructor() {
    this.bonus = 0; this.pinsKnocked = []; this.inTurn = true;
  }

  addTurn(pinsDowned) {
    this.pinsKnocked.push(pinsDowned);
    checkTurn(pinsDowned);
  }

  checkTurn(pinsDowned) {
    if (this.pinsKnocked.length === 1 && pinsDowned === 10)
    {this.inTurn = false; this.bonus = 2;}
    else if (this.pinsKnocked.length === 2) {
      if ( this.pinsKnocked.reduce((a, b) => a + b, 0) === 10 )
      {this.bonus = 1;};
      this.inTurn = false;
    };
  }

}
