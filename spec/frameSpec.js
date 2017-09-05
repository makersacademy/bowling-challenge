

describe("Frame", function(){

  var frame;
  var rollOne;
  var rollTwo;

  beforeEach(function(){
    rollOne = 4;
    rollTwo = 6;
    frame = new Frame(rollOne, rollTwo);
  });

  describe("init", function(){
    it("will store two rolls in an array", function(){
      expect(frame._rolls.constructor).toBe(Array);
      expect(frame._rolls.length).toEqual(2);
    });
    it("will create a max score of ten", function(){
      expect(frame.MAX_PINS).toEqual(10)
    });
  });

  describe("#regularScore", function(){
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

  describe("#isIllegal", function(){
    var illegalFrame;
    illegalFrame = new Frame(6, 5);
    it("will return true when frame is a spare", function(){
      expect(illegalFrame.isIllegal()).toBeTruthy()
    });
  });

  describe("#spareScore", function(){
    it("will return the total as well as the next's first roll", function(){
      var nextFrame;
      nextFrame = new Frame(5, 2);
      expect(frame.spareScore(nextFrame)).toEqual(15)
    });
  });

  describe("#strikeScore", function(){
    describe("when next frame is also a strike", function(){
      it("will return two totals and the third frame's first roll", function(){
        var nextFrame;
        var thirdFrame;
        nextFrame = new Frame(10, 0);
        thirdFrame = new Frame(7, 2);
        expect(frame.strikeScore(nextFrame, thirdFrame)).toEqual(27)
      });
    });

    describe("when next frame is not a strike", function(){
      it("will return two totals", function(){
        var nextFrame;
        var thirdFrame;
        nextFrame = new Frame(7, 2);
        thirdFrame = new Frame(7, 2);
        expect(frame.strikeScore(nextFrame, thirdFrame)).toEqual(19)
      });
    });
  });


  describe("#totalScore", function(){

    describe("when the frame is a strike", function(){
      it("will return a strike score", function(){
        var strikeFrame;
        strikeFrame = new Frame(10, 0);
        nextFrame = new Frame(2, 2);
        thirdFrame = new Frame(5, 5);
        expect(strikeFrame.totalScore(nextFrame, thirdFrame)).toEqual(14)
      });
    });

    describe("when the frame is a spare", function(){
      it("will return a spare score", function(){
        var spareFrame;
        spareFrame = new Frame(5, 5);
        nextFrame = new Frame(5, 2);
        thirdFrame = new Frame(5, 5);
        expect(spareFrame.totalScore(nextFrame, thirdFrame)).toEqual(15)
      });
    });

    describe("when the frame is neither a strike or spare", function(){
      it("will return a regular score", function(){
        var spareFrame;
        normalFrame = new Frame(4, 3);
        nextFrame = new Frame(5, 2);
        thirdFrame = new Frame(5, 5);
        expect(normalFrame.totalScore(nextFrame, thirdFrame)).toEqual(7)
      });
    });

  });



});
