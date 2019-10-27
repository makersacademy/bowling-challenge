describe('Game', () => {

  let game;

  beforeEach(() => { game = new Game; });

  // Getters

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

  describe('.reduceStandingPins(knocks)', () => {
    it('reduces the no. of standing pins by the no. of pins knocked down', () => {
      game.reduceStandingPins(3);
      expect(game.getStandingPins()).toEqual(7);
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

  describe('.updateTotalScores()', () => {
    it('updates the cumulative score at the end of each frame', () => {
      game.play(3);
      game.play(4);
      game.updateTotalScores();
      expect(game.getFrameTotalScore('frame1')).toEqual(7);
    });
  });

  describe('.assignUnspentBonus(frame, bonus)', () => {
    it('logs an unspent bonus for the given frame', () => {
      game.assignUnspentBonus('frame1', 1);
      expect(game.getUnspentBonus('frame1')).toEqual(1);
    });
  });

  describe('.reduceUnspentBonus(frame)', () => {
    it('reduces the unspent bonus by 1 for the given frame', () => {
      game.play(8);
      game.play(2);
      game.reduceUnspentBonus('frame1');
      expect(game.getUnspentBonus('frame1')).toEqual(0);
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
      expect(game.frames.frame1.totalScore).toEqual(0);
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

    it('.getUnspentBonus(frame) returns 0', () => {
      expect(game.getUnspentBonus('frame1')).toEqual(0);
    });

  });

  // ------------------ Completed frame Outcome 2: Strike ---------------------

  describe('SCENARIO when player strikes in the first roll of a frame', () => {

    beforeEach(() => {
      game.play(10);
    });

    it('does not add a score yet', () => {
      expect(game.frames.frame1.totalScore).toEqual(0);
    });

    it('.getUnspentBonus(frame) returns 2', () => {
      expect(game.getUnspentBonus('frame1')).toEqual(2);
    });

    it('adds the bonus from the next 2 rolls', () => {
      game.play(3);
      game.play(4);
      expect(game.frames.frame1.totalScore).toEqual(10 + 3 + 4);
    });

    it('.getUnspentBonus(frame) is reduced every time a bonus calculation is applied', () => {
      game.play(3);
      expect(game.getUnspentBonus('frame1')).toEqual(1);
      game.play(4);
      expect(game.getUnspentBonus('frame1')).toEqual(0);
    });

  });

  // ------------------ Completed frame Outcome 3: Spare ---------------------

  describe('SCENARIO when player has a spare within two rolls of a given frame', () => {

    beforeEach(() => {
      game.play(6);
      game.play(4);
    });

    it('does not add a score yet', () => {
      expect(game.frames.frame1.totalScore).toEqual(0);
    });

    it('.getUnspentBonus(frame) returns 1', () => {
      expect(game.getUnspentBonus('frame1')).toEqual(1);
    });

    it('adds the bonus from the next roll', () => {
      game.play(3);
      expect(game.frames.frame1.totalScore).toEqual(10 + 3);
    });

    it('.getUnspentBonus(frame) is reduced every time a bonus calculation is applied', () => {
      game.play(3);
      expect(game.getUnspentBonus('frame1')).toEqual(0);
    });

  });


  // ---------------------------- 10th Frame ----------------------------------

  describe('SCENARIO 10th frame', () => {

    beforeEach(() => {
      // Play until Frame 9 is completed
      for (let frame = 1; frame <=9; frame++) {
        game.play(3);
        game.play(3);
      }
    });

    it('allows user the standard 2 rolls if neither strike or spare', () => {
      game.play(7);
      game.play(2);
      expect(game.isGameOver()).toEqual(true);
    });

    it('allows user 3 rolls if a strike is scored', () => {
      game.play(10);
      expect(game.isGameOver()).toEqual(false);
      game.play(3);
      expect(game.isGameOver()).toEqual(false);
      game.play(4);
      expect(game.isGameOver()).toEqual(true);
    });

    it('allows user 3 rolls if a spare is scored', () => {
      game.play(7);
      expect(game.isGameOver()).toEqual(false);
      game.play(3);
      expect(game.isGameOver()).toEqual(false);
      game.play(4);
      expect(game.isGameOver()).toEqual(true);
    });

  });

});
