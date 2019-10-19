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

  describe('.isStrike()', () => {

    it('.isStrike returns false initially', () => {
      expect(game.isStrike()).toEqual(false);
    });

    // it('returns true if a player knocks 10 pins on roll 1', () => {
    //   game.addKnocks(10);
    //   expect(game.isStrike()).toEqual(true);
    // });

  });

  describe('.isSpare()', () => {

    it('returns false initially', () => {
      expect(game.isSpare()).toEqual(false);
    });

    // it('returns true if player knocks 10 pins using two rolls', () => {
    //
    // });

  });



  // Setters

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


  it('.newFrame() starts the next frame and resets currentRoll to 1', () => {
    game.newRoll();
    game.newFrame();
    expect(game.getCurrentFrame()).toEqual(2);
    expect(game.getCurrentRoll()).toEqual(1);
  });

  it('.addScore(arg) adds a given number to the total score', () => {
    game.addScore(5);
    expect(game.getScore()).toEqual(5);
  });

  describe('.play()', () => {

    it('records the number of knocked pins and proceeds to next roll', () => {
      game.play(5);
      expect(game.getScore()).toEqual(5);
      expect(game.getCurrentRoll()).toEqual(2);
    });

    it('does not start a new frame after Frame 10 has completed', () => {
      for (let roll = 1; roll <= 21; roll++) {
        game.play(1);
      }
      expect(game.getCurrentFrame()).toEqual(10);
    });

  });


  // edge case: when player enters a value that is not between 0 and 10

  // 3 possible outcomes in a given frame

  describe('when player does not strike in a given frame', () => {

    // it('.addKnocks(arg) resets the roll no. to 1 ', () => {
    //   game.addKnocks(5);
    //   expect(game.getScore()).toEqual(5);
    //   expect(game.getCurrentRoll()).toEqual(2);
    // });

  });

  describe('when player strikes in the first roll of a frame', () => {

  });

  describe('when player has a spare within two rolls of a given frame', () => {

  });

  describe('.writeResult', () => {
    // writes result to a row and display HTML on page
  });

});
