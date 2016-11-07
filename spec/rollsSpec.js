'use strict';

describe('Rolls', function() {

  var rolls;

  beforeEach(function() {
    rolls = new Rolls();
  });


  describe('calculating 2 rolls of 1 frame', function() {

    it('stores first roll in the rollOneScore', function() {
      rolls.calculateCurrentRoll(7);
      expect(rolls.rollOneScore).toEqual(7);
    });

    it('toggles rollOneTaken to true after first role', function() {
      rolls.calculateCurrentRoll(7);
      expect(rolls.rollOneTaken).toBe(true);
    });

    it('stores second roll in rollTwoscore if rollOne has been taken', function() {
      rolls.calculateCurrentRoll(4);
      rolls.calculateCurrentRoll(3);
      expect(rolls.rollTwoScore).toEqual(3);
    });

    it('increments frameNum variable by 1 after each frame.', function() {
      rolls.calculateCurrentRoll(4);
      rolls.calculateCurrentRoll(3);
      expect(rolls.frameNum).toEqual(2);
    });
  });


  describe('calculating after 3 frames', function() {
    it('increments frameNum variable by 3 after 3 frames.', function() {
      for (var i = 0; i < 6; i++) {
        rolls.calculateCurrentRoll(4);   // 6 rolls = 3 frames
      }
      expect(rolls.frameNum).toEqual(4);
    });
  });


  describe('recognises strikes and spares', function() {
    it('skips roll 2 if roll 1 is a strike', function() {
      rolls.calculateCurrentRoll(10);
      expect(rolls.rollOneTaken).toBe(false);
    });

    it('adds strike to currentGame array if a strike', function() {
      rolls.calculateCurrentRoll(10);
      expect(rolls.currentGame[0]).toEqual(strike);
    });

    it('adds spare to currentGame array if a spare', function() {
      rolls.calculateCurrentRoll(10); //strike
      rolls.calculateCurrentRoll(4);
      rolls.calculateCurrentRoll(6);  //spare
      expect(rolls.currentGame[1]).toEqual(spare);
    });

    it('adds regular frame score to currentGame array if no strikes or spares happened', function() {
      rolls.calculateCurrentRoll(4);
      rolls.calculateCurrentRoll(5);
      expect(rolls.currentGame[0]).toEqual(9);
    });
  });

  describe('adding strikes and spares', function() {
    it('adds the bonus score after 2 strikes in a row', function() {
      rolls.calculateCurrentRoll(10); //strike
      rolls.calculateCurrentRoll(10); //strike
      rolls.calculateCurrentRoll(5);
      rolls.calculateCurrentRoll(3);  //spare
      expect(rolls.currentGame[0]).toEqual(25);
    });

    // it('adds the bonus score after 1 strike followed by a spare', function() {
    //   rolls.calculateCurrentRoll(6);
    //   rolls.calculateCurrentRoll(3); //9        [9]
    //   rolls.calculateCurrentRoll(10); //strike  [9, strike]
    //   rolls.calculateCurrentRoll(6);
    //   rolls.calculateCurrentRoll(4);  //spare   [9, strike, spare]
    //   rolls.calculateCurrentRoll(6);
    //   rolls.calculateCurrentRoll(3); //9        [9, strike, spare, 9]
    //   expect(rolls.currentGame[1]).toEqual(20);
    // });

    // it('adds the bonus score after 1 spare', function() {
    //   rolls.calculateCurrentRoll(9); //strike
    //   rolls.calculateCurrentRoll(1); //strike
    //   rolls.calculateCurrentRoll(8);
    //   rolls.calculateCurrentRoll(0); //finished turn
    //   expect(rolls.currentGame[0]).toEqual(18);
    // });

  });

});
