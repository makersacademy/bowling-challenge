class TenthFrame {

  constructor() {
    this.rolls = 0;
    this.pins = 10;
    this.score = 0;
    this.followingFrameRolls = [];
  };

  addRoll(pinsFelled) {

    console.log(this.rolls)
    if (this.rolls >= 2 && this.score <= 9) {
      throw new Error("You have already finished this frame");
    };

    if (this.rolls >= 3) {
      throw new Error("You have already finished this frame");
    };
    if (pinsFelled < 0) {
      throw new Error("You cannot fell fewer pins than 0");
    };
    if (pinsFelled > 10) {
      throw new Error("You cannot fell more pins than 10");
    };
    if (pinsFelled > this.pins) {
      throw new Error("You can only fell 10 pins total in the tenth frame unless you have scored a spare or strike");
    };


    this.rolls += 1;
    this.pins -= pinsFelled;
    this.score += pinsFelled;

    if (this.isStrike()) {
      this.pins = 10
    };

    if (this.rolls === 2 && this.score >= 10) {
      this.pins = 10
    }

  };


  isStrike() {
    return this.rolls === 1 && this.pins === 0
  };


};