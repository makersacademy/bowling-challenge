describe('bowling', function() {
  beforeEach(function() {
    bowlingGame = new Bowling();
  });

  describe('#pins', function() {
    it('Starts a game with 10 pins', function() {
      expect(bowlingGame.pins).toEqual(10)
    });
  });

  describe('#current_frame', function() {
    it('Starts the game on frame 1', function() {
      expect(bowlingGame.current_frame).toEqual(1)
    });
  });

  describe('#current_roll', function() {
    it('#Starts a game on roll 1', function() {
      expect(bowlingGame.current_roll).toEqual(1)
    });
  });

  describe('#frame_score', function() {
    it('#Starts a game on 0', function() {
      expect(bowlingGame.frame_score).toEqual(0)
    });
  });

  describe('#score_card', function() {
    it('#Starts a game empty', function() {
      expect(bowlingGame.score_card).toEqual([])
    });
  });

  describe('#roll', function() {

    it('Should knock down specified number of pins', function() {
      bowlingGame.roll(5);
      expect(bowlingGame.pins).toEqual(5)
    });

    it('Should throw an error if attempting to knock too many pins', function() {
      expect(function() { bowlingGame.roll(11) } ).toThrow("You cannot knock over more pins than there are standing")
    });

    it('Should throw an error if attempting to knock too many pins', function() {
      bowlingGame.roll(5);
      expect(function() { bowlingGame.roll(6) } ).toThrow("You cannot knock over more pins than there are standing")
    });

    it('Should start current roll on a new frame as 1 ', function() {
      expect(bowlingGame.current_roll).toEqual(1)
    });

    it('Should change the current roll to 2', function() {
      bowlingGame.roll(5);
      expect(bowlingGame.current_roll).toEqual(2)
    });

    it('Should update the frame score', function() {
      bowlingGame.roll(5);
      expect(bowlingGame.frame_score).toEqual(5)
    })
  });

  describe('#end_frame', function() {

    it('Sets current_roll to 1', function() {
      bowlingGame.roll(10)
      expect(bowlingGame.current_roll).toEqual(1)
    });

    it('Updates the score_card', function() {
      bowlingGame.roll(5);
      bowlingGame.roll(5);
      expect(bowlingGame.score_card).toEqual([10])
    });

    it('Starts a new frame after a strike', function() {
      bowlingGame.roll(10);
      expect(bowlingGame.current_frame).toEqual(2)
    });

    it('Starts a new frame after two rolls in a frame', function() {
      bowlingGame.roll(1);
      bowlingGame.roll(1);
      expect(bowlingGame.current_frame).toEqual(2)
    });

    it('Resets the pins to 10', function() {
      bowlingGame.roll(10);
      expect(bowlingGame.pins).toEqual(10)
    });
  });
});
