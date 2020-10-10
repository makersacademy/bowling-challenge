class Frame {
  constructor() {
    this.rolls = 0;
    this.pins = 10;
    this.score = 0;
    this.followingFrameRolls = [];
  };

  addRoll(pinsFelled) {
    if (this.rolls >= 2 || this.pins === 0) {
      throw new Error('You have already finished this frame');
    };
    if (pinsFelled > this.pins) {
      throw new Error('You cannot down more pins than available');
    };
    if (pinsFelled < 0) {
      throw new Error('You cannot fell fewer pins than 0');
    };

    this.rolls += 1;
    this.pins -= pinsFelled;
    this.score += pinsFelled;
  };

  frameScore() {
    if (!this.frameCompleted()) {
      return 0;
    };

    if (!this.isStrike() && !this.isSpare()) {
      return this.score;
    };

    if (this.isStrike()) {
      if (this.followingFrameRolls.length < 2) {
        return 0;
      };
      return this.score + this._arraySum();
    };

    if (this.isSpare()) {
      if (this.followingFrameRolls.length < 1) {
        return 0;
      };

      return this.score + this.followingFrameRolls[0];
    };
  };


  addFollowingFrameRoll(pinsFelled) {
    if (this.followingFrameRolls.length >= 2) {
      return;
    };

    if (pinsFelled > 10) {
      throw new Error('You cannot fell more pins than 10');
    };

    if (pinsFelled < 0) {
      throw new Error('You cannot fell fewer pins than 0');
    };

    if (this.followingFrameRolls.length === 1 && this.followingFrameRolls[0] < 10 && this.followingFrameRolls[0] + pinsFelled > 10) {
      throw new Error('You can only fell 10 pins in a frame');
    };

    this.followingFrameRolls.push(pinsFelled);
  };


  frameCompleted() {
    return this.pins === 0 || this.rolls === 2;
  }

  isStrike() {
    return this.rolls === 1 && this.pins === 0;
  }

  isSpare() {
    return this.rolls === 2 && this.pins === 0;
  }

  _arraySum() {
    const sum = this.followingFrameRolls.reduce((a, b) => {
      return a + b;
    });
    return sum;
  }
};
