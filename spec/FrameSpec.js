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
      expect(frame.firstRoll).toEqual(5);
    });

    it("Takes the result of the second roll", function(){
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.secondRoll).toEqual(3);
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
