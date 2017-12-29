describe("frame", function() {

  describe("score", function() {

    it("it should be able record the two bowls", function() {
      var frame = new Frame(1);
      frame.bowl(3,4);
      expect(frame.score).toEqual([3,4]);
    });

  });

  describe("strike checker", function() {

    it("should return true if a strike is bowled", function() {
      var frame = new Frame(1);
      frame.bowl(10, null);
      expect(frame.isAStrike()).toEqual(true);
    });

    it('should return false if it is not a strike', function() {
      var frame = new Frame(1);
      frame.bowl(2,3);
      expect(frame.isAStrike()).toEqual(false);
    });

  });

  describe("spare checker", function() {

    it("should return true if a spare is bowled", function() {
      var frame = new Frame(1);
      frame.bowl(8, 2);
      expect(frame.isASpare()).toEqual(true);
    });

    it('should return false if it is not a spare', function() {
      var frame = new Frame(1);
      frame.bowl(2,3);
      expect(frame.isASpare()).toEqual(false);
    });

  });

});
