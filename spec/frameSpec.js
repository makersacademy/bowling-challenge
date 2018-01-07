describe("frame", function() {

  describe("score", function() {

    it("it should be able record the two bowls", function() {
      var frame = new Frame();
      frame.bowl(3,4);
      expect(frame.bowls).toEqual([3,4]);
    });

  });

  describe("strike checker", function() {

    it("should return true if a strike is bowled", function() {
      var frame = new Frame();
      frame.bowl(10, null);
      expect(frame.isAStrike()).toEqual(true);
    });

    it('should return false if it is not a strike', function() {
      var frame = new Frame();
      frame.bowl(2,3);
      expect(frame.isAStrike()).toEqual(false);
    });

  });

  describe("spare checker", function() {

    it("should return true if a spare is bowled", function() {
      var frame = new Frame();
      frame.bowl(8, 2);
      expect(frame.isASpare()).toEqual(true);
    });

    it('should return false if it is not a spare', function() {
      var frame = new Frame();
      frame.bowl(2,3);
      expect(frame.isASpare()).toEqual(false);
    });

  });

  describe("gutter ball checker", function() {

    it("should return true if a gutter ball is bowled", function() {
      var frame = new Frame();
      frame.bowl(0, 0);
      expect(frame.isAGutterBall()).toEqual(true);
    });

    it('should return false if a gutter ball is not bowled', function() {
      var frame = new Frame();
      frame.bowl(2,3);
      expect(frame.isAGutterBall()).toEqual(false);
    });

  });

  describe("calcFrameScore", function(){
    it("should add the number of pins knocked down", function(){
      var frame = new Frame();
      frame.bowl(2,3);
      expect(frame.calcFrameScore()).toEqual(5);
    })
    it("should return spare if a spare is bowled", function(){
      var frame = new Frame();
      frame.bowl(2,8);
      expect(frame.calcFrameScore()).toEqual("Spare")
    })
    it("should return strike if a strike is bowled", function(){
      var frame = new Frame();
      frame.bowl(10,null);
      expect(frame.calcFrameScore()).toEqual("Strike")
    })
  })

  describe("last frame checker", function(){
    it("should return true, if player is legible for bonus bowl after strike in 10th", function(){
      var frame = new Frame(true);
      frame.bowl(10,null);
      expect(frame.bonusBowlChecker()).toEqual(true);
    });
    it("should return true, if player is legible for bonus bowl after spare in 10th", function(){
      var frame = new Frame(true);
      frame.bowl(4,6);
      expect(frame.bonusBowlChecker()).toEqual(true);
    });
    it("should return false otherwise", function(){
      var frame = new Frame(true);
      frame.bowl(5,3);
      expect(frame.bonusBowlChecker()).toEqual(false);
    });
  })

  // describe("bowl bonus bowl", function(){
  //   it("should be able to bowl one bowl", function(){
  //     var frame = new Frame(true);
  //     frame.bowl(10,null);
  //   })
  // })

});
