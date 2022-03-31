export default class ScoreCard {
  #frames = [];

  roll(pins) {
    this.#frames.push(pins);
  }

  calculateScore() {
    return this.#frames.reduce((sum, curr) => sum + curr);
  }
}
