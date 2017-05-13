describe("Frame", function(){

  beforeEach(function(){
    testFrame = new Frame();
  });

  describe("variables", function(){

    it("contains a score array" , function(){
      expect(testFrame.score).toEqual([]);
    });

    it("contains an extra turn counter" , function(){
      expect(testFrame.addExtra).toEqual(0);
    });

    it("contains a current throw counter" , function(){
      expect(testFrame.throwNumber).toEqual(0);
    });

  });

  describe("#setExtra", function(){

    it("set no extra if total score < 10" , function(){
      testFrame.score.push(9);
      testFrame.setExtra();
      expect(testFrame.addExtra).toEqual(0);
    });

    it("set 1 extra if total score = 10" , function(){
      testFrame.score.push(9);
      testFrame.score.push(1);
      testFrame.setExtra();
      expect(testFrame.addExtra).toEqual(1);
    });

    it("set 2 extra if first throw score = 10" , function(){
      testFrame.score.push(10);
      testFrame.setExtra();
      expect(testFrame.addExtra).toEqual(2);
    });

  });

  describe("#calculateScore", function(){

    it("returns the correct score", function(){
      testFrame.score.push(10);
      testFrame.score.push(4);
      testFrame.score.push(5);
      expect(testFrame.calculateScore()).toEqual(19);
    });

  });

  describe("#isTurnCompleted", function(){

    it("returns false if the frame is open", function(){
      testFrame.score.push(3);
      expect(testFrame.isTurnCompleted()).toEqual(false);
    });

    it("returns true if the frame is closed", function(){
      testFrame.score.push(3);
      testFrame.score.push(2);
      expect(testFrame.isTurnCompleted()).toEqual(true);
    });

    it("returns true if the frame is closed with a strike", function(){
      testFrame.score.push(10);
      expect(testFrame.isTurnCompleted()).toEqual(true);
    });

  });

  describe("pushNormal", function(){

    it("add the score to the current frame", function(){
      testFrame.pushNormal(2);
      expect(testFrame.score[0]).toEqual(2);
    });

  });

  describe("#pushExtra", function(){

    it("adds a score when addExtra is > 0", function(){
      testFrame.addExtra = 1;
      testFrame.pushExtra(2);
      expect(testFrame.calculateScore()).toEqual(2);
    });

    it("does not add a score when addExtra is = 0", function(){
      testFrame.addExtra = 0;
      testFrame.pushExtra(2);
      expect(testFrame.calculateScore()).toEqual(0);
    });

  });

});
