describe("Scorecard", function() {
  var scorecard;
  var frameDouble;
  var spareDouble;
  var strikeDouble;

  beforeEach(function() {
    scorecard = new Scorecard();
    frameDouble = { 
      rolls: [2,2],
      total : function() { return 4 },
      isSpare : function() { return false },
      isStrike : function() { return false }
    }
    spareDouble = { 
      rolls: [4,6],
      total : function() { return 10},
      isSpare : function() { return true },
      isStrike : function() { return false }
    }
    strikeDouble = {
      rolls: [10],
      total : function() { return 10},
      isStrike : function() { return true },
      isSpare : function() { return false }
    }
  });

    it("can take a frame", function(){
      scorecard.addFrame({});
      expect(scorecard.frames).toEqual([{}]);
    });

    it("can only take 10 frames", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        scorecard.addFrame(frame);
      };
      expect(scorecard.gameOver()).toEqual(true);
    });

    it("can calculate a total of a series of frames", function(){
      scorecard.addFrame(frameDouble);
      scorecard.addFrame(frameDouble);
      expect(scorecard.total()).toEqual(8);
    });

    it("knows the score of a particular ball in a particular frame", function() {
      frameDouble.rolls = [4,6]
      scorecard.addFrame(frameDouble);
      expect(scorecard.getRollScore(0, 1)).toEqual(6);
    });

    it("knows the score of a particular frame", function() {
      scorecard.addFrame(frameDouble);
      expect(scorecard.getFrameScore(0,0,1)).toEqual(4);
    });

    it("accumulates bonus points from spare frames", function(){
      scorecard.addFrame(spareDouble);
      scorecard.addFrame(frameDouble);
      expect(scorecard.total()).toEqual(16);
    });

    it("accumulates bonus points from a strike", function(){
      scorecard.addFrame(strikeDouble);
      scorecard.addFrame(frameDouble);
      expect(scorecard.total()).toEqual(18);
    });

    it("can handle multiple strikes", function(){
      scorecard.addFrame(strikeDouble);
      scorecard.addFrame(strikeDouble);
      scorecard.addFrame(strikeDouble);
      expect(scorecard.total()).toEqual(60);
    });


});