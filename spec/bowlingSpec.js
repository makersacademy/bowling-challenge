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
    it('#Starts a game on knock_pins 1', function() {
      expect(bowlingGame.current_roll).toEqual(1)
    });
  });


  describe('#frame_score', function() {
    it('#Starts a game on 0', function() {
      expect(bowlingGame.frame_score).toEqual([])
    });
  });


  describe('#score_card', function() {
    it('#Starts a game empty', function() {
      expect(bowlingGame.score_card).toEqual([])
    });

    it('Keeps track of multiple frame scores', function() {
      bowlingGame.knock_pins(5);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(2);
      bowlingGame.knock_pins(3);
      expect(bowlingGame.score_card).toEqual([[5, 1], [2, 3]])
    });

    it('Updates after a strike', function() {
      bowlingGame.knock_pins(10);
      expect(bowlingGame.score_card).toEqual([[10]])
    })
  });


  describe('#knock_pins', function() {

    it('Should knock down specified number of pins', function() {
      bowlingGame.knock_pins(5);
      expect(bowlingGame.pins).toEqual(5)
    });

    it('Should throw an error if attempting to knock too many pins', function() {
      expect(function() { bowlingGame.knock_pins(11) } ).toThrow("You cannot knock over more pins than there are standing")
    });

    it('Should throw an error if attempting to knock too many pins', function() {
      bowlingGame.knock_pins(5);
      expect(function() { bowlingGame.knock_pins(6) } ).toThrow("You cannot knock over more pins than there are standing")
    });

    it('Should start current roll on a new frame as 1 ', function() {
      bowlingGame.knock_pins(10);
      expect(bowlingGame.current_roll).toEqual(1)
    });

    it('Should change the current roll to 2', function() {
      bowlingGame.knock_pins(5);
      expect(bowlingGame.current_roll).toEqual(2)
    });

    it('Should update the frame score', function() {
      bowlingGame.knock_pins(5);
      expect(bowlingGame.frame_score).toEqual([5])
    });
  });


  describe('#end_frame', function() {

    it('Sets current_knock_pins to 1', function() {
      bowlingGame.knock_pins(10)
      expect(bowlingGame.current_roll).toEqual(1)
    });

    it('Updates the score_card', function() {
      bowlingGame.knock_pins(5);
      bowlingGame.knock_pins(5);
      expect(bowlingGame.score_card).toEqual([[5, 5]])
    });

    it('Starts a new frame after a strike', function() {
      bowlingGame.knock_pins(10);
      expect(bowlingGame.current_frame).toEqual(2)
    });

    it('Starts a new frame after two knock_pinss in a frame', function() {
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(1);
      expect(bowlingGame.current_frame).toEqual(2)
    });

    it('Resets the pins to 10', function() {
      bowlingGame.knock_pins(10);
      expect(bowlingGame.pins).toEqual(10)
    });

    it('Resets the frame score', function() {
      bowlingGame.knock_pins(2);
      bowlingGame.knock_pins(4);
      expect(bowlingGame.frame_score).toEqual([])
    });
  });


  describe('#Getting a spare', function() {
    it('Gains bonus score after the next roll', function() {
      bowlingGame.knock_pins(5);
      bowlingGame.knock_pins(5);
      bowlingGame.knock_pins(1);
      expect(bowlingGame.score_card).toEqual([[5, 5, 1]])
    });

    it('Only gains bonus score after the next roll', function() {
      bowlingGame.knock_pins(6);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(8);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(2);
      expect(bowlingGame.score_card).toEqual([[6, 4, 8], [8, 1,]])
    });

    it('Works for multiple spares in a row', function() {
      bowlingGame.knock_pins(6);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(8);
      bowlingGame.knock_pins(2);
      bowlingGame.knock_pins(3);
      bowlingGame.knock_pins(7);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(6);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(9);
      expect(bowlingGame.score_card).toEqual([[6, 4, 8], [8, 2, 3], [3, 7, 4], [4, 6, 1], [1, 9]])
    });

    it('Works for random spares', function() {
      bowlingGame.knock_pins(6);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(8);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(3);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(4);
      bowlingGame.knock_pins(6);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(9);
      bowlingGame.knock_pins(3);
      expect(bowlingGame.score_card).toEqual([[6, 4, 8], [8, 1], [3, 4], [4, 6, 1], [1, 9, 3]])
    });
  });


  describe('Getting a strike', function() {
    it('Gains a bonus for the next two rolls', function() {
      bowlingGame.knock_pins(10);
      bowlingGame.knock_pins(1);
      bowlingGame.knock_pins(2);
      expect(bowlingGame.score_card).toEqual([[10, 1, 2], [1, 2]])
    });

    // it('Works for multiple strikes in a row', function() {
    //
    // })
  });
});
