class Game {

  constructor() {
    this.total = 0;
    this.frame = new Frame();
  }

  roll(pins) {
    this.frame.add(pins);
    this.total += pins;
  }

  gameover() {
    return this.total
  }

}
