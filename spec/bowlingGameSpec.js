describe('BowlingGame', function() {
  var bowlingGame;
  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe('basic game rules', function() {
    xit('starts with a frame score of 0', function() {
      expect(bowlingGame.frameScore).toEqual(0);
    });

    xit('starts with a total score of 0', function() {
      expect(bowlingGame.score).toEqual(0);
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

    it('keeps track of the score if it is a spare in frame number 10', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      expect(bowlingGame.score.frame[10]).toEqual([6, 4, 10]);
    });

    it('does not keep track of frame number 11 if it is a spare in the 10th frame', function() {
      bowlingGame.frameNumber = 10;
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      expect(bowlingGame.score.frame[11]).toBe(undefined);
    });

    it('does not keep track of frame number 11 if you roll three strikes in the 10th frame', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.roll(10); }
        expect(bowlingGame.score.frame[11]).toBe(undefined);
    });

    it('does not keep track of frame number 12 if you roll three strikes in the 10th frame', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.roll(10); }
        expect(bowlingGame.score.frame[12]).toBe(undefined);
    });
  });

  describe('each frame', function() {
    it('goes to the next frame if you roll a strike', function() {
      bowlingGame.roll(10);
      expect(bowlingGame.frameNumber).toEqual(2);
    });

    it('goes to next frame if you roll twice', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(4);
      expect(bowlingGame.frameNumber).toEqual(2);
    });

    it('resets the roll number when you go to the next frame', function() {
      bowlingGame.roll(4);
      bowlingGame.roll(4);
      expect(bowlingGame.rollNumber).toEqual(0);
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
});
