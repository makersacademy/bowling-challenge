describe ("Bowling", function() {
  var bowling;
  var frame;
  var roll;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("#knockDown", function() {
    it("knocks the specified number of pins", function() {
      bowling.knockDown(5);
      expect(bowling.getCurrentFrame()).toBe(5);
    });

    it("generates an open frame", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      expect(bowling.getCurrentFrame()).toBe(9);
    });

    it("generates a spare", function() {
      bowling.knockDown(6);
      bowling.knockDown(4);
      expect(bowling.getCurrentFrame()).toBe(10);
    });

    it("generates a strike", function() {
      bowling.knockDown(10);
      expect(bowling.getCurrentFrame()).toBe(10);
    });

    it("validates that the current frame is not finished", function() {
      bowling.knockDown(8);
      bowling.knockDown(1);
      expect(function() {
        bowling.knockDown(1);
      }).toThrowError('Current frame is finished');
    });

    it("validates that a frame does not go over 10", function() {
      bowling.knockDown(8);
      expect(function() {
        bowling.knockDown(4);
      }).toThrowError('Invalid number of pins');
    });
  });

  describe("#isCurrentFrameFinished", function() {
    it("returns true if the current frame is open", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      expect(bowling.isCurrentFrameFinished()).toBe(true);
    });

    it("returns true if the current frame is a spare", function() {
      bowling.knockDown(6);
      bowling.knockDown(4);
      expect(bowling.isCurrentFrameFinished()).toBe(true);
    });

    it("returns true if the current frame is a strike", function() {
      bowling.knockDown(10);
      expect(bowling.isCurrentFrameFinished()).toBe(true);
    });

    it("returns false if the current frame is not complete", function() {
      bowling.knockDown(5);
      expect(bowling.isCurrentFrameFinished()).toBe(false);
    });
  });

  describe('#nextFrame', function() {
    it("starts a new frame", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      bowling.nextFrame();
      expect(bowling.getCurrentFrame()).toBe(0);
    });

    it("validates that the current frame is finished", function() {
      bowling.knockDown(5);
      expect(function() {
        bowling.nextFrame();
      }).toThrowError('Current frame is not finished');
    });
  });

  describe('#frameScore', function() {
    it("adds the score when the frame is open", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      bowling.nextFrame();
      expect(bowling.frameScore(0)).toBe(9);
    });

    it("adds the score when the frame is a spare", function() {
      bowling.knockDown(5);
      bowling.knockDown(5);
      bowling.nextFrame();
      bowling.knockDown(3);
      bowling.knockDown(6);
      bowling.nextFrame();
      expect(bowling.frameScore(0)).toBe(5 + 5 + 3);
    });

    it("adds the score when the frame is a strike", function() {
      bowling.knockDown(10);
      bowling.nextFrame();
      bowling.knockDown(3);
      bowling.knockDown(6);
      bowling.nextFrame();
      expect(bowling.frameScore(0)).toBe((10 + 3 + 6));
    });
  });

  describe('#totalScore', function() {
    it("adds the score when the frame is open", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      bowling.nextFrame();
      expect(bowling.totalScore()).toBe(9);
    });

    it("adds the score when the frame is a spare", function() {
      bowling.knockDown(5);
      bowling.knockDown(5);
      bowling.nextFrame();
      bowling.knockDown(3);
      bowling.knockDown(6);
      bowling.nextFrame();
      expect(bowling.totalScore()).toBe((10 + 3) + (3 + 6));
    });

    it("adds the score when the frame is a strike", function() {
      bowling.knockDown(10);
      bowling.nextFrame();
      bowling.knockDown(3);
      bowling.knockDown(6);
      bowling.nextFrame();
      expect(bowling.totalScore()).toBe((10 + 3 + 6) + (3 + 6));
    });

    it("adds the score for three consecutive strikes", function() {
        bowling.knockDown(10);
        bowling.nextFrame();
        bowling.knockDown(10);
        bowling.nextFrame();
        bowling.knockDown(10);
        bowling.nextFrame();
        bowling.knockDown(4);
        bowling.knockDown(1);
        bowling.nextFrame();
      expect(bowling.totalScore()).toBe((10 + 10 + 10) + (10 + 10 + 4) +
      (10 + 4 + 1) + (4 + 1));
    });

    it("adds the score for a perfect game", function() {
      for (var i = 0; i < 12; i++) {
        bowling.knockDown(10);
        bowling.nextFrame();
      }
      expect(bowling.totalScore()).toBe(300);
    });
  });
});
