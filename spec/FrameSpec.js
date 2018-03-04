describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe("roll", function() {
    it("Records the number of pins knocked down", function() {
      frame.roll(6);
      frame.roll(1);
      expect(frame.rolls).toEqual([6, 1]);
    });
  });

  describe("score", function() {
    it("returns the score for the frame", function() {
      frame.roll(3);
      frame.roll(2);
      expect(frame.score()).toEqual(5);
    });
  });

  describe("strike", function() {
    it("returns strike when 10 pins are knocked down on first roll", function() {
      frame.roll(10);
      expect(frame.strike()).toBeTruthy();
    });
  });

  describe("spare", function() {
    it("returns spare when 10 pins are knocked down by first and second rolls", function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.spare()).toBeTruthy();
    });
  });

  describe("strike score", function() {
    it("strike plus next frame results equal 24", function() {
      frame.roll(10);
      frame.roll(4);
      frame.roll(3);
      rollMany(0, 16);
      expect(frame.strikeScore()).toEqual(24);
    });
  });

  describe("Gutter game", function() {
    it("finish a game on 0", function() {
      rollMany(0, 20);
      expect(frame.score()).toEqual(0);
    });
  });

  describe("Perfect game", function() {
    it("finish a game on 300", function() {
      rollMany(10, 12);
      expect(frame.score()).toEqual(300);
    });
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      frame.roll(pins);
    }
  };




});
