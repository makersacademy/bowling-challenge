export class Frame {
  constructor() {
    this.complete = false;
    this.note = '';
    this.outcome = '';
    this.rolls = [];
    this.score = 0;
  }

  bowl(pinsKnockedDown) {
    this.rolls.push(pinsKnockedDown);
  }
}
