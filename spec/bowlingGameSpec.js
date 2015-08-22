describe('BowlingGame', function() {
  var bowlingGame;
  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe('basic game rules', function() {
    it('starts with a total score of 0', function() {
      expect(bowlingGame.totalScore()).toBe(0);
    });

    it('a perfect game has a score of 300', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.roll(10); }
      var total = bowlingGame.totalScore();
      expect(total).toEqual(300);
    });

    it('calculates the total for a frame', function() {
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      var total = bowlingGame.frameTotal(1);
      expect(total).toEqual(9);
    });

    it('starts with frame number 1', function() {
      expect(bowlingGame.frameNumber).toEqual(1);
    });

    it('is over after frame number 10 is done, scenario 1', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      expect(function(){ bowlingGame.roll(4); }).toThrow(new Error('Game Over'));
    });

    it('is over after frame number 10 is done, scenario 2', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      expect(function(){ bowlingGame.roll(4); }).toThrow(new Error('Game Over'));
    });

    it('is over after frame number 10 is done, scenario 3', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.roll(10); }
      expect(function(){ bowlingGame.roll(4); }).toThrow(new Error('Game Over'));
    });
  });

  describe('each frame', function() {
    it('increases the roll number in the event of no strike', function() {
      bowlingGame.roll(5);
      expect(bowlingGame.rollNumber).toEqual(1);
    });

    it('resets the roll number when it is the next frame', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(4);
      expect(bowlingGame.rollNumber).toEqual(0);
    });

    it('goes to the next frame in the event of a strike', function() {
      bowlingGame.roll(10);
      expect(bowlingGame.frameNumber).toEqual(2);
    });

    it('goes to the next frame after two rolls', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(4);
      expect(bowlingGame.frameNumber).toEqual(2);
    });
  });

  describe('scoring', function() {
    it('keeps track of the score of the first roll of the frame', function() {
      bowlingGame.roll(4);
      expect(bowlingGame.score.frame[1]).toEqual([4]);
    });

    it('keeps track of the score of the second roll of the frame', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(5);
      expect(bowlingGame.score.frame[1]).toEqual([4, 5]);
    });

    it('keeps track of the score of the rolls of the next frame', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(5);
      bowlingGame.roll(2);
      bowlingGame.roll(7);
      expect(bowlingGame.score.frame[2]).toEqual([2, 7]);
    });

    it('increases bonus by 1 in the event of a spare', function() {
      bowlingGame.roll(3);
      bowlingGame.roll(7);
      expect(bowlingGame.numberOfBonus).toEqual(1);
    });

    it('increases bonus by 2 in the event of a strike', function() {
      bowlingGame.roll(10);
      expect(bowlingGame.numberOfBonus).toEqual(2);
    });

    it('keeps track of the score in the event of a spare', function() {
      bowlingGame.roll(7);
      bowlingGame.roll(3);
      bowlingGame.roll(5);
      expect(bowlingGame.score.frame[1]).toEqual([7, 3, 5]);
    });

    it('decreases bonus to 0 after next roll', function() {
      bowlingGame.roll(7);
      bowlingGame.roll(3);
      bowlingGame.roll(5);
      expect(bowlingGame.numberOfBonus).toEqual(0);
    });

    it('keeps track of the score in the event of a strike', function() {
      bowlingGame.roll(10);
      bowlingGame.roll(6);
      bowlingGame.roll(3);
      expect(bowlingGame.score.frame[1]).toEqual([10, 6, 3]);
    });

    it('decreases bonus to 1 after next roll', function() {
      bowlingGame.roll(10);
      bowlingGame.roll(6);
      expect(bowlingGame.numberOfBonus).toEqual(1);
    });
  });

  describe('scoring for frame number 10', function() {
    it('keeps track of the score in the event of a spare', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      expect(bowlingGame.score.frame[10]).toEqual([6, 4, 10]);
    });

    it('keeps track of frame number 9 in the event of a strike', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.roll(10); }
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(4);
      expect(bowlingGame.score.frame[9]).toEqual([10, 10, 10]);
    });

    it('keeps track of frame number 10 in the event of a strike', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.roll(10); }
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(4);
      expect(bowlingGame.score.frame[10]).toEqual([10, 10 ,4]);
    });

    it('does not keep track of frame number 11 in the event of a spare', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      expect(bowlingGame.score.frame[11]).toBe(undefined);
    });

    it('does not keep track of frame number 11 in the event of three strikes', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.roll(10); }
        expect(bowlingGame.score.frame[11]).toBe(undefined);
    });
  });
});
