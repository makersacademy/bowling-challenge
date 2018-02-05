describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

    it("is an array rolls", function() {
      expect(frame.bowls).toEqual([]);
    });

  describe("enters bowl scores", function() {
    it("enters a first bowl into the array", function() {
      frame.roll(3);
      expect(frame.bowls).toEqual([3])
    });

    it("enters the second bowl into the array", function() {
      frame.roll(3);
      frame.roll(4);
      expect(frame.bowls).toEqual([3,4])
    });

    beforeEach(function() {
      frame.roll(3);
      frame.roll(4);
      frame.closeFrame();
    });

    it("sums the score of two bowls", function() {
      expect(frame.matchScores).toEqual([7])
    });

    it("empties the frame at the closeFrame", function() {
      expect(frame.bowls).toEqual([]);
    });

    it("keeps score over multiple frames", function() {
      frame.roll(1);
      frame.roll(0);
      frame.closeFrame();
      expect(frame.matchScores).toEqual([7,1])
    });

    it("has a running total", function() {
      frame.roll(1);
      frame.roll(0);
      frame.closeFrame();
      expect(frame.runningTotal).toEqual(8)
    });

  });

  describe("scoring when bowling a spare", function() {

    it("is not a spare by default", function() {
      expect(frame.isPreviouslySpare).toEqual(false)
    });

    it("knows the previous turn was a spare", function() {
      frame.roll(7);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.isPreviouslySpare).toEqual(true)
    });

    it("knows a turn is not spare even a previous was", function() {
      frame.roll(7);
      frame.roll(3);
      frame.closeFrame();
      frame.roll(1);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.isPreviouslySpare).toEqual(false)
    });

    it("adds the next roll to the previous frame score", function() {
      frame.roll(7);
      frame.roll(3);
      frame.closeFrame();
      frame.roll(1);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.matchScores).toEqual([11,4])
    });

    it("has the correct running total", function() {
      frame.roll(7);
      frame.roll(3);
      frame.closeFrame();
      frame.roll(1);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.runningTotal).toEqual(15)
    });

  });

  describe("scoring when bowling a strike", function() {
    it("is not a spare by default", function() {
      expect(frame.isPreviouslyStrike).toEqual(false)
    });

    it("knows the previous turn was a stike", function() {
      frame.roll(10);
      frame.closeFrame();
      expect(frame.isPreviouslyStrike).toEqual(true)
    });

    it("knows a turn is not strike even a previous was", function() {
      frame.roll(10);
      frame.closeFrame();
      frame.roll(1);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.isPreviouslyStrike).toEqual(false)
    });

    it("adds the next two rolls to the previous frame score", function() {
      frame.roll(10);
      frame.closeFrame();
      frame.roll(1);
      frame.roll(3);
      frame.closeFrame();
      expect(frame.matchScores).toEqual([14,4])
    });

    it("adds the next two rolls if the first of them is strike", function() {
      frame.roll(10);
      frame.closeFrame();
      frame.roll(10);
      frame.closeFrame();
      frame.roll(3);
      frame.roll(5);
      frame.closeFrame();
      expect(frame.matchScores).toEqual([23,18,8])
    });

    it("has the correct running total after 2 strikes", function() {
      frame.roll(10);
      frame.closeFrame();
      frame.roll(10);
      frame.closeFrame();
      frame.roll(3);
      frame.roll(5);
      frame.closeFrame();
      expect(frame.runningTotal).toEqual(49)
    });
  });

  describe("10th frame", function() {
    it("knows it is not the last frame", function() {
      expect(frame.isLastFrame).toEqual(false)
    });

    it("knows it is the last frame", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(1);
      frame.roll(0);
      frame.closeFrame();
      expect(frame.isLastFrame).toEqual(true)
    });

    it("ends the game after 10th frame without bonuses", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(1);
      frame.roll(0);
      expect(frame.closeFrame()).toEqual("Game over")
    });

    it("does not end game if 10th frame is spare", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(9);
      frame.roll(1);
      expect(frame.closeFrame()).not.toEqual("Game over")
    });

    it("allows extra roll if 10th frame is spare", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(9);
      frame.roll(1);
      expect(frame.closeFrame()).toEqual("One more roll")
    });

    it("counts extra roll score if 10th frame is spare", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(9);
      frame.roll(1);
      frame.closeFrame();
      frame.roll(3);
      frame.closeFrame();
      frame.recalculateTotal();
      expect(frame.runningTotal).toEqual(58)
    });

    it("allows 2 extra rolls if 10th frame is strike", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(10);
      expect(frame.closeFrame()).toEqual("Two more rolls")
    });

    it("allows 2 extra rolls if 10th frame is strike", function() {
      frame.matchScores = [1,2,3,4,5,6,7,8,9]
      frame.roll(10);
      frame.closeFrame()
      frame.roll(3);
      frame.roll(4);
      frame.closeFrame();
      expect(frame.runningTotal).toEqual(62)
    });

  });

  describe("perfect game", function() {
    it("has a score of 300", function() {
      for(var i=0; i < 10; i++){
        frame.roll(10);
        frame.closeFrame();
        console.log(frame.isLastFrame)
      }
      frame.roll(10);
      frame.roll(10);
      frame.closeFrame();
      expect(frame.runningTotal).toEqual(300)
    });
  });

  describe("gutter game", function() {
    it("has a score of 0", function() {
      for(var i=0; i < 10; i++){
        frame.roll(0);
        frame.roll(0);
        frame.closeFrame();
      }
      expect(frame.runningTotal).toEqual(0)
    });
  });

  it("gives the correct total for the example README game", function() {
    frame.roll(1);
    frame.roll(4);
    frame.closeFrame();
    frame.roll(4);
    frame.roll(5);
    frame.closeFrame();
    frame.roll(6);
    frame.roll(4);
    frame.closeFrame();
    frame.roll(5);
    frame.roll(5);
    frame.closeFrame();
    frame.roll(10);
    frame.closeFrame();
    frame.roll(0);
    frame.roll(1);
    frame.closeFrame();
    frame.roll(7);
    frame.roll(3);
    frame.closeFrame();
    frame.roll(6);
    frame.roll(4);
    frame.closeFrame();
    frame.roll(10);
    frame.closeFrame();
    frame.roll(2);
    frame.roll(8);
    frame.closeFrame();
    frame.roll(6)
    frame.closeFrame();
    expect(frame.runningTotal).toEqual(133)
  });

});
