describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with a bowl index of 1", function() {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe("#bowl", function() {

    beforeEach(function() {
      frame.bowl(2);
    });

    it("pushes the pins score into the bowls array", function() {
      expect(frame.bowls).toContain(2);
    });

    it("increases the bowl index by 1", function() {
      expect(frame.bowlIndex).toEqual(2);
    });
  });

  describe("#isAStrike", function() {

    it("knows when the frame is a strike", function() {
      frame.bowl(10);
      expect(frame.isAStrike()).toEqual(true);
    });
  });

  describe("#isASpare", function() {

    it("knows when the frame is a spare", function() {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isASpare()).toEqual(true);
    });
  });

  describe("#frameScore", function() {

    it("calculates the frame score", function() {
      frame.bowl(3);
      frame.bowl(5);
      expect(frame.frameTotal()).toEqual(8);
    });
  });

  describe("#finalFrameScore", function() {
    it("calculates the final frame score", function() {
      frame.finalFrame = true
      frame.bowl(10);
      frame.bowl(10);
      frame.bowl(10);
      expect(frame.finalFrameTotal()).toEqual(30);
    });

  })

});
