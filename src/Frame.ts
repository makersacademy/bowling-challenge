export default class Frame {
  static mockClear() {
    throw new Error("Method not implemented.");
  }
  // Types
  scores: number[];
  roll: number;
  is_tenth: boolean;

  constructor(is_tenth: boolean = false) {
    this.is_tenth = is_tenth;
    this.scores = is_tenth ? [0, 0, 0] : [0, 0];
    this.roll = 0;
  }

  get getScores(): number[] {
    return this.scores;
  }

  add_score(score: number): void {
    if (this.is_ended()) {
      return;
    }
    this.scores[this.roll] = score;
    this.roll += 1;
  }

  total_score(): number {
    return this.scores.reduce((a: number, b: number) => a + b, 0);
  }

  is_ended(): boolean {
    if (this.is_tenth) {
      return this.#check_tenth();
    } else {
      return this.scores[0] === 10 || this.roll == 2;
    }
  }

  status(): string {
    return this.#is_strike() ? "strike" : this.#is_spare() ? "spare" : "normal";
  }

  // Private

  #check_tenth(): boolean {
    const scores_of_first_two_rolls: number = this.scores[0] + this.scores[1];
    const continue_on_the_thrid: boolean =
      this.roll === 2 && scores_of_first_two_rolls < 10;
    return continue_on_the_thrid || this.roll === 3;
  }

  #is_strike(): boolean {
    return this.scores[0] === 10;
  }

  #is_spare(): boolean {
    return this.scores[0] + this.scores[1] == 10;
  }
}
