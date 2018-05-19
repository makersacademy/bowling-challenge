describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Creates an incomplete frame", function(){
    expect(frame.isComplete).toBe(false);
  })

  describe("#addScore", function(){
    it("Takes the result of the first roll", function(){
      frame.addScore(5);
      expect(frame.rollScores[0]).toEqual(5);
    });

    it("Takes the result of the second roll", function(){
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.rollScores[frame.rollScores.length - 1]).toEqual(3);
    });

    it("completes a frame once two normal balls are bowled(no X or /)", function(){
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.isComplete).toBe(true);
    });

    it("registers a strike", function(){
      frame.addScore(10);
      expect(frame.isStrike).toBe(true)
    });

    it("registers a spare", function(){
      frame.addScore(5);
      frame.addScore(5);
      expect(frame.isComplete).toBe(false);
    });

    it("adds a bonus ball for a spare", function(){
      frame.addScore(5);
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.rollScores.length).toEqual(3)
      expect(frame.rollScores[frame.rollScores.length - 1]).toBe(3);
    });
  });

  describe("#_calculateScore", function(){
    it("calculates its score", function(){
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.Score).toEqual(8);
    });
  });


});
