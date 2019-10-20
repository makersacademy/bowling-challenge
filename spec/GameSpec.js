describe('Game', () => {

  let game;

  beforeEach(() => { game = new Game; });

  // Getters

  it('.getScore() returns the total score', () => {
    expect(game.getScore()).toEqual(0);
  });

  it('.getCurrentFrame() returns the current frame', () => {
    expect(game.getCurrentFrame()).toEqual(1);
  });

  it('.getCurrentRoll() returns the current roll', () => {
    expect(game.getCurrentRoll()).toEqual(1);
  });

  it('On 1st roll, .is1stRoll() returns true, .is2ndRoll() returns false', () => {
    expect(game.is1stRoll()).toEqual(true);
    expect(game.is2ndRoll()).toEqual(false);
  });

  it('On 2nd roll, .is1stRoll() returns false, .is2ndRoll() returns true', () => {
    game.play(5);
    expect(game.is1stRoll()).toEqual(false);
    expect(game.is2ndRoll()).toEqual(true);
  });

  // Setters and Doers

  describe('.newroll()', () => {

    it('starts the next roll in the current frame', () => {
      game.newRoll();
      expect(game.getCurrentRoll()).toEqual(2);
    });

    it('resets the roll count after the second roll in a frame', () => {
      game.newRoll();
      game.newRoll();
      expect(game.getCurrentRoll()).toEqual(1);
    });

  });

  describe('.newFrame()', () => {

    it('starts the next frame and resets currentRoll to 1', () => {
      game.newRoll();
      game.newFrame();
      expect(game.getCurrentFrame()).toEqual(2);
      expect(game.getCurrentRoll()).toEqual(1);
    });

    it('does not start a new frame after Frame 10 has completed', () => {
      for (let roll = 1; roll <= 21; roll++) {
        game.play(1);
      }
      expect(game.getCurrentFrame()).toEqual(10);
    });

  });

  it('.addScore(arg) adds a given number to the total score', () => {
    game.addScore(5);
    expect(game.getScore()).toEqual(5);
  });

  it('.getStandingPins() returns no. of pins still standing', () => {
    game.play(3);
    expect(game.getStandingPins()).toEqual(7);
  });

  it('.resetPins() resets the number of pins for a new frame', () => {
    game.play(5);
    game.play(3);
    game.resetPins();
    expect(game.getStandingPins()).toEqual(10);
  });

  describe('.play()', () => {

    it('records the number of knocked pins and proceeds to next roll', () => {
      game.play(5);
      expect(game.getScore()).toEqual(5);
      expect(game.getCurrentRoll()).toEqual(2);
    });

  });

  it('.isGameOver() returns true when there are no more frames to play', () => {
    for (let roll = 1; roll <= 20; roll++) {
      game.play(1);
    }
    expect(game.isGameOver()).toEqual(true);
  });



  // edge case: when player enters a value that is not between 0 and 10

  // 3 possible outcomes in a given frame

  describe('when player does not strike after 2 rolls in a frame', () => {

    beforeEach(() => {
      game.play(5);
      game.play(3);
    });

    it('adds the correct score', () => {
      expect(game.getScore()).toEqual(8);
    });

    it('moves on to the first roll of the next frame', () => {
      expect(game.getCurrentFrame()).toEqual(2);
      expect(game.getCurrentRoll()).toEqual(1);
    });

  });

  describe('when player strikes in the first roll of a frame', () => {

    beforeEach(() => {
      game.play(10);
    });

    it('.bonusToSpend() returns 2', () => {
      expect(game.bonusToSpend()).toEqual(2);
    });

  });

  describe('when player has a spare within two rolls of a given frame', () => {

    beforeEach(() => {
      game.play(6);
      game.play(4);
    });

    it('.bonusToSpend() returns 1', () => {
      expect(game.bonusToSpend()).toEqual(1);
    });


  });

  describe('.writeResult', () => {
    // writes result to a row and display HTML on page
  });

});
