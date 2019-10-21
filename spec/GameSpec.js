describe('Game', () => {

  let game;

  beforeEach(() => { game = new Game; });

  // Getters

  describe('.getTotalScore()', () => {
    it('returns the total score', () => {
      expect(game.getTotalScore()).toEqual(0);
    });
  });

  describe('.getCurrentFrame()', () => {
    it('returns the current frame', () => {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });

  describe('.getCurrentRoll()', () => {
    it('returns the current roll', () => {
      expect(game.getCurrentRoll()).toEqual(1);
    });
  });

  describe('.getStandingPins()', () => {
    it('returns no. of pins still standing', () => {
      game.play(3);
      expect(game.getStandingPins()).toEqual(7);
    });
  });

  describe('.isGameOver()', () => {
    it('returns true when there are no more frames to play', () => {
      for (let roll = 1; roll <= 20; roll++) {
        game.play(1);
      }
      expect(game.isGameOver()).toEqual(true);
    });
  });

  describe('When in the 1st roll', () => {

    it('.is1stRoll() returns true', () => {
      expect(game.is1stRoll()).toEqual(true);
    });

    it('.is2ndRoll() returns false', () => {
      expect(game.is2ndRoll()).toEqual(false);
    });

  });

  describe('When in the 2nd roll', () => {

    it('.is1stRoll() returns false', () => {
      game.play(5);
      expect(game.is1stRoll()).toEqual(false);
    });

    it('.is2ndRoll() returns true', () => {
      game.play(5);
      expect(game.is2ndRoll()).toEqual(true);
    });

  });

  // Setters

  describe('.setupNextPlay()', () => {

    it('sets currentRoll to 2 if the 1st roll has completed', () => {
      game.setupNextPlay();
      expect(game.getCurrentRoll()).toEqual(2);
    });

    it('proceeds to the next frame if the 2nd roll has completed', () => {
      game.setupNextPlay();
      game.setupNextPlay();
      expect(game.getCurrentFrame()).toEqual(2);
      expect(game.getCurrentRoll()).toEqual(1);
    });

  });

  describe('.newFrame()', () => {

    it('starts the next frame and resets currentRoll to 1', () => {
      game.newFrame();
      expect(game.getCurrentFrame()).toEqual(2);
      expect(game.getCurrentRoll()).toEqual(1);
    });

    it('does not start a new frame after the final frame has completed', () => {
      for (let frame = 1; frame <= game.MAX_FRAMES; frame++) {
        game.newFrame();
      }
      expect(game.getCurrentFrame()).toEqual(10);
    });

  });

  describe('.updateTotalScore()', () => {

    it('adds a given number to the total score', () => {
      game.updateTotalScore(5);
      game.updateTotalScore(3);
      expect(game.getTotalScore()).toEqual(8);
    });

  });

  describe('.resetPins()', () => {
    it('resets the number of pins for a new frame', () => {
      game.play(5);
      game.play(3);
      game.resetPins();
      expect(game.getStandingPins()).toEqual(10);
    });
  });

  describe('.addBonusToSpend(arg)', () => {
    it('adds a bonus', () => {
      game.addBonusToSpend(1);
      expect(game.bonusToSpend()).toEqual(1);
    });
  });

  // describe('.printResult()', () => {
  //   // prints result to a row (or rows) on HTML page
  // });


  // ====================== WHEN THE GAME IS PLAYED ===========================

  // --------------------- 1st Roll Outcome 1: Normal -------------------------

  describe('SCENARIO 1st roll, player does not strike', () => {

    beforeEach(() => {
      game.play(5);
    });

    it('the number of knocks is recorded', () => {
      expect(game.frames.frame1.roll1.knocks).toEqual(5);
    });

    it('the total score is not recorded yet', () => {
      expect(game.frames.frame1.totalScore).toEqual(undefined);
    });

    it('player proceeds to 2nd roll', () => {
      expect(game.is2ndRoll()).toEqual(true);
    });

  });

  // ----------------- Completed frame Outcome 1: Normal ---------------------

  describe('SCENARIO 2nd Roll, player does not score strike or spare', () => {

    beforeEach(() => {
      game.play(5);
      game.play(3);
    });

    it('the number of knocks is recorded', () => {
      expect(game.frames.frame1.roll1.knocks).toEqual(5);
      expect(game.frames.frame1.roll2.knocks).toEqual(3);
    });

    it('the total score is recorded', () => {
      expect(game.frames.frame1.totalScore).toEqual(8);
    });

    it('player moves on to 1st roll of the next frame', () => {
      expect(game.getCurrentFrame()).toEqual(2);
      expect(game.getCurrentRoll()).toEqual(1);
    });

    it('.bonusToSpend() returns 0', () => {
      expect(game.bonusToSpend()).toEqual(0);
    });

  });

  // ------------------ Completed frame Outcome 2: Strike ---------------------

  describe('SCENARIO when player strikes in the first roll of a frame', () => {

    beforeEach(() => {
      game.play(10);
    });

    it('does not add a score yet', () => {
      expect(game.getTotalScore()).toEqual(0);
    });

    it('.bonusToSpend() returns 2', () => {
      expect(game.bonusToSpend()).toEqual(2);
    });

    it('adds the bonus from the next 2 rolls', () => {
      game.play(3);
      game.play(4);
      expect(game.getTotalScore()).toEqual(10 + 7 + 7);
    });

  });

  // ------------------ Completed frame Outcome 3: Spare ---------------------

  describe('SCENARIO when player has a spare within two rolls of a given frame', () => {

    beforeEach(() => {
      game.play(6);
      game.play(4);
    });

    it('.bonusToSpend() returns 1', () => {
      expect(game.bonusToSpend()).toEqual(1);
    });


  });

});
