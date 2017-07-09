

describe("Frame", function(){

  var frame;
  var rollOne;
  var rollTwo;

  beforeEach(function(){
    rollOne = 5;
    rollTwo = 5;
    frame = new Frame(rollOne, rollTwo);
  });

  describe("init", function(){
    it("will store two rolls in an array", function(){
      expect(frame._rolls.constructor).toBe(Array);
      expect(frame._rolls.length).toEqual(2);
    });
    it("will create a max score of ten", function(){
      expect(frame.MAX_SCORE).toEqual(10)
    });
  });

  describe("#total", function(){
    it("will sum the score of rolls", function(){
      expect(frame.regularScore()).toEqual(10);
    });
  });

  describe("#isStrike", function(){
    var strikeFrame;
    strikeFrame = new Frame(10, 0);
    it("will return true when frame is a strike", function(){
      expect(strikeFrame.isStrike()).toBeTruthy();
    });
  });

  describe("#isSpare", function(){
    var spareFrame;
    spareFrame = new Frame(5, 5);
    it("will return true when frame is a spare", function(){
      expect(spareFrame.isSpare()).toBeTruthy();
    });
  });



});
