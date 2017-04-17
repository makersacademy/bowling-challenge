describe('BowlingGame', function() {
  var bowlingGame;
  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe('basic game rules', function() {
    it('starts with frame number 1', function() {
      expect(bowlingGame.frameNumber).toEqual(1);
    });

    it('starts with a total score of 0', function() {
      expect(bowlingGame.gameTotal(1)).toBe(0);
    });

    it('a perfect game has a score of 300', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.register(10); }
      var total = bowlingGame.gameTotal(10);
      expect(total).toEqual(300);
    });

    it('calculates the total for a frame', function() {
      bowlingGame.register(5);
      bowlingGame.register(4);
      expect(bowlingGame.score.frame[1]).toEqual(9);
    });

    it('each frame must not be greater than 10, scenario 1', function() {
      bowlingGame.register(5);
      expect(function(){ bowlingGame.register(6); }).toThrow(new Error('Not possbile'));
    });

    it('each frame must not be greater than 10, scenario 2', function() {
      bowlingGame.register(5);
      expect(function(){ bowlingGame.register(10); }).toThrow(new Error('Not possbile'));
    });

    it('is over after frame number 10 is done, scenario 1', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.register(10); }
      bowlingGame.register(5);
      bowlingGame.register(4);
      expect(function(){ bowlingGame.register(4); }).toThrow(new Error('Not possbile'));
    });

    it('is over after frame number 10 is done, scenario 2', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.register(10); }
      bowlingGame.register(6);
      bowlingGame.register(4);
      bowlingGame.register(10);
      expect(function(){ bowlingGame.register(4); }).toThrow(new Error('Not possbile'));
    });

    it('is over after frame number 10 is done, scenario 3', function() {
      for (var i = 0; i < 12; i++) { bowlingGame.register(10); }
      expect(function(){ bowlingGame.register(4); }).toThrow(new Error('Not possbile'));
    });
  });

  describe('each frame', function() {
    it('increases the roll number in the event of no strike', function() {
      bowlingGame.register(5);
      expect(bowlingGame.rollNumber).toEqual(1);
    });

    it('increases the roll number again in the event of no strike', function() {
      bowlingGame.register(5);
      bowlingGame.register(5);
      expect(bowlingGame.rollNumber).toEqual(2);
    });

    it('resets the roll number when it is the next frame', function() {
      bowlingGame.register(4);
      bowlingGame.register(4);
      bowlingGame.register(4);
      expect(bowlingGame.rollNumber).toEqual(1);
    });

    it('frame number stays the same after a strike', function() {
      bowlingGame.register(10);
      expect(bowlingGame.frameNumber).toEqual(1);
    });

    it('frame number increases on next roll after a strike', function() {
      bowlingGame.register(10);
      bowlingGame.register(4);
      expect(bowlingGame.frameNumber).toEqual(2);
    });

    it('frame number stays the same after two rolls', function() {
      bowlingGame.register(4);
      bowlingGame.register(4);
      expect(bowlingGame.frameNumber).toEqual(1);
    });

    it('frame number increases on next roll after two rolls', function() {
      bowlingGame.register(4);
      bowlingGame.register(4);
      bowlingGame.register(4);
      expect(bowlingGame.frameNumber).toEqual(2);
    });
  });

  describe('tracking the rolls', function() {
    it('keeps track of the rolls of the frame', function() {
      bowlingGame.register(4);
      bowlingGame.register(5);
      bowlingGame.register(3);
      bowlingGame.register(6);
      expect(bowlingGame.roll.frame[1]).toEqual([4, 5]);
    });

    it('keeps track of the rolls of the next frame', function() {
      bowlingGame.register(4);
      bowlingGame.register(5);
      bowlingGame.register(3);
      bowlingGame.register(5);
      expect(bowlingGame.roll.frame[2]).toEqual([3, 5]);
    });

    it('keeps track of a strike of the frame', function() {
      bowlingGame.register(10);
      bowlingGame.register(10);
      expect(bowlingGame.roll.frame[1]).toEqual([10]);
    });

    it('keeps track of a strike of the next frame', function() {
      bowlingGame.register(10);
      bowlingGame.register(10);
      expect(bowlingGame.roll.frame[2]).toEqual([10]);
    });
  });

  describe('scoring', function() {
    it('keeps track of the score of the rolls of the frame', function() {
      bowlingGame.register(4);
      bowlingGame.register(5);
      expect(bowlingGame.score.frame[1]).toEqual(9);
    });

    it('keeps track of the score of the rolls of the next frame', function() {
      bowlingGame.register(4);
      bowlingGame.register(5);
      bowlingGame.register(2);
      bowlingGame.register(7);
      expect(bowlingGame.score.frame[2]).toEqual(9);
    });

    it('increases bonus by 1 in the event of a spare', function() {
      bowlingGame.register(3);
      bowlingGame.register(7);
      expect(bowlingGame.numberOfBonus).toEqual(1);
    });

    it('increases bonus by 2 in the event of a strike', function() {
      bowlingGame.register(10);
      expect(bowlingGame.numberOfBonus).toEqual(2);
    });

    it('keeps track of the score in the event of a spare', function() {
      bowlingGame.register(7);
      bowlingGame.register(3);
      bowlingGame.register(5);
      expect(bowlingGame.score.frame[1]).toEqual(15);
    });

    it('decreases bonus to 0 after next roll', function() {
      bowlingGame.register(7);
      bowlingGame.register(3);
      bowlingGame.register(5);
      expect(bowlingGame.numberOfBonus).toEqual(0);
    });

    it('keeps track of the score in the event of a strike', function() {
      bowlingGame.register(10);
      bowlingGame.register(6);
      bowlingGame.register(3);
      expect(bowlingGame.score.frame[1]).toEqual(19);
    });

    it('keeps track of the score in the event of two strikes', function() {
      bowlingGame.register(10);
      bowlingGame.register(10);
      bowlingGame.register(3);
      expect(bowlingGame.score.frame[1]).toEqual(23);
    });

    it('decreases bonus to 1 after next roll', function() {
      bowlingGame.register(10);
      bowlingGame.register(6);
      expect(bowlingGame.numberOfBonus).toEqual(1);
    });
  });

  describe('scoring for frame number 10', function() {
    it('keeps track of the score in the event of a spare', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.register(10); }
      bowlingGame.register(6);
      bowlingGame.register(4);
      bowlingGame.register(10);
      expect(bowlingGame.score.frame[10]).toEqual(20);
    });

    it('keeps track of frame number 9 in the event of a strike', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.register(10); }
      bowlingGame.register(10);
      bowlingGame.register(10);
      bowlingGame.register(4);
      expect(bowlingGame.score.frame[9]).toEqual(30);
    });

    it('keeps track of frame number 10 in the event of a strike', function() {
      for (var i = 0; i < 9; i++) { bowlingGame.register(10); }
      bowlingGame.register(10);
      bowlingGame.register(10);
      bowlingGame.register(4);
      expect(bowlingGame.score.frame[10]).toEqual(24);
    });
  });
});
