describe("A normal frame", function() {
  var frame;
  var rand = 4;

  beforeEach(function() {
    frame = new Frame(false);
    spyOn(Math, "floor").and.callFake(function() {
      return rand;
    });
  });

  it("Score's two play's correctly", function() {
    frame.run();
    expect(frame.calculateScore()).toEqual(8);
  });

  it("Can only take down max 10 pins in total both plays", function() {
    rand = 10;
    frame.run();
    expect(frame.calculateScore()).toEqual(rand);
  });

  it("returns an array of the scores", function() {
    rand = 4;
    frame.run();
    expect(frame.getScores()).toEqual([4, 4]);
  });

  describe("isStrike", function() {
    it("returns true if all pins down in first play", function() {
      rand = 10;
      frame.run();
      expect(frame.isStrike()).toBeTruthy();
    });

    it("returns false if not all pins were down", function() {
      rand = 3;
      frame.run();
      expect(frame.isStrike()).toBeFalsy();
    });

    it("returns false if spare", function() {
      rand = 5;
      frame.run();
      expect(frame.isStrike()).toBeFalsy();
    });
  });

  describe("isSpare", function() {
    it("return true if all pins down after second play", function() {
      rand = 5;
      frame.run();
      expect(frame.isSpare()).toBeTruthy();
    });

    it("return false if pins still remain", function() {
      rand = 3;
      frame.run();
      expect(frame.isSpare()).toBeFalsy();
    });

    it("returns false if a strike", function() {
      rand = 10;
      frame.run();
      expect(frame.isSpare()).toBeFalsy();
    });
  });

});
