describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("New frame", function() {
    it("starts with null as the current roll", function() {
      expect(frame.currentRoll()).toEqual(null);
    });

    it("starts with frame complete set to false", function() {
      expect(frame.isComplete()).toEqual(false);
    });
  });

  describe("Bowling balls", function() {
    it("stores the first ball's score", function() {
      expect(frame.bowlFirstBall(5)).toEqual(5);
    });

    it("stores the second ball's score", function() {
      expect(frame.bowlSecondBall(3)).toEqual(3);
    });

    it("doesn't allow rolling first ball again in the same frame", function() {
      frame.bowlFirstBall(4);
      expect( function(){frame.bowlFirstBall(5)}).toThrowError("You have already bowled your first ball for this frame.")
    });

    it("doesn't allow rolling second ball again in the same frame", function() {
      frame.bowlFirstBall(6);
      frame.bowlSecondBall(2);
      expect( function(){frame.bowlSecondBall(2)}).toThrowError("You have already bowled your second ball for this frame.")
    });

    describe("More than 10 pins can't be bowled over", function() {
      it("In first roll, doesn't allow more than 10 pins to be knocked over", function() {
        expect( function(){frame.bowlFirstBall(11)}).toThrowError("Attempted to knock over more than 10 pins.")
      });

      it("In second roll, doesn't allow more than 10 pins to be knocked over aggregate", function() {
        frame.bowlFirstBall(5);
        expect( function(){frame.bowlSecondBall(6)}).toThrowError("Attempted to knock over more than 10 pins.")
      });
    });

    describe("Frame completion", function() {
      it("sets the frame as complete after second roll", function() {
        frame.bowlFirstBall(5);
        frame.bowlSecondBall(3);
        expect(frame.isComplete()).toEqual(true);
      });

      it("sets the frame as complete after a strike on the first roll", function() {
        frame.bowlFirstBall(10);
        expect(frame.isComplete()).toEqual(true);
      });
    });
  });

  describe("Calculating a frame's score", function() {
    it("adds up the score for both bowls", function() {
      frame.bowlFirstBall(5);
      frame.bowlSecondBall(1);
      frame.calculateFrameTotal();
      expect(frame.currentRoll()).toEqual(6);
    });

    it("marks \"X\" as the score for a strike", function() {
      frame.bowlFirstBall(10);
      frame.calculateFrameTotal();
      expect(frame.currentRoll()).toEqual("X");
    });

  });
});
