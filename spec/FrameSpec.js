describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("scoring in the game", function() {
    it("should be able to return the score", function() {
      expect(frame.getScore()).toEqual(0);
    });

    it("should be able to accept roll and return score", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(3);
      expect(frame.getScore()).toEqual(3);
    });

    it("should be able to return score for a bowl", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(3);
      expect(frame.getRollScore(1)).toEqual(3);
      frame.roll(4);
      expect(frame.getRollScore(2)).toEqual(4);
    });

    it("returns true for a strike", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it("returns true for a spare", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    });

  });

  it("return if another bowl can be taken", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(5);
    expect(frame.isGetAnotherBowl()).toEqual(true);
  });  

  it("should return true when frame is finished", function() {
    spyOn(frame, 'isGetAnotherBowl').and.returnValue(false);
    expect(frame.isFinished()).toEqual(true);
  });

  it("should return true when it is the final frame", function() {
    var f10 = new Frame(true);
    expect(f10.finalFrame).toEqual(true);
  });

  it("should allow 2 extra rolls when get a strike in final frame", function() {
    var f10 = new Frame(true);
    f10.roll(10);
    expect(f10.isGetAnotherBowl()).toEqual(true);
    f10.roll(10)
    expect(f10.isGetAnotherBowl()).toEqual(true);
  });


});
