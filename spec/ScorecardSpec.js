'use strict';

describe("Scorecard", function(){
  var scorecard = new Scorecard();

  describe("constructor", function(){
    it("creates a new instance", function(){
      expect(scorecard instanceof Scorecard).toBe(true)
    })
  })

  beforeEach(function(){
    scorecard = new Scorecard();
  })

  describe("add", function(){
    it("adds score for each roll to scores", function(){
      scorecard.add(3)
      expect(scorecard.scores).toEqual([3])
    })

    it("adds score for each roll to frame_score", function(){
      scorecard.add(5)
      expect(scorecard.frame_score).toEqual([5])
    })

    describe("when a strike on first roll", function(){
      it("adds +1 to frames tally", function(){
        scorecard.add(10)
        expect(scorecard.frames).toEqual(2)
      })
    })

    describe("when not a strike on first roll", function(){
      it("adds +1 to roll_num tally", function(){
        scorecard.add(6)
        expect(scorecard.roll_num).toEqual(2)
      })
    })
  })

  describe("getRoll", function(){
    it("adds score for each roll to scores", function(){
      scorecard.getRoll(3)
      expect(scorecard.scores).toEqual([3])
    })

    it("adds score for each roll to frame_score", function(){
      scorecard.getRoll(1)
      expect(scorecard.frame_score).toEqual([1])
    })
  })

  describe("getTenthFrameRoll", function(){
    it("adds +1 to roll_num", function(){
      scorecard.getTenthFrameRoll(8)
      expect(scorecard.roll_num).toEqual(2)
    })
  })

  describe("isStrike", function(){
    it("is true when first roll of a frame equals 10", function(){
      for(var i = 0; i < 10; i++){
        scorecard.add(10);
      }
      expect(scorecard.isStrike()).toEqual(true)
    })

    it("is false when first roll of a frame does not equal 10", function(){
      for(var i = 0; i < 20; i++){
        scorecard.add(3);
      }
      expect(scorecard.isStrike()).toEqual(false)
    })
  })

  describe("isSpare", function(){
    it("is true when second roll makes frame_score equal 10", function(){
      for(var i = 0; i < 20; i++){
        scorecard.add(5);
      }
      expect(scorecard.isSpare()).toEqual(true)
    })

    it("is false when after two rolls played frame_score does not equal 10", function(){
      for(var i = 0; i < 20; i++){
        scorecard.add(2);
      }
      expect(scorecard.isSpare()).toEqual(false)
    })

  })

  describe("isBonusBall", function(){
    it("returns true if sum of first and second rolls of frame greater than or equal to 10", function(){
      for(var i = 0; i < 11; i++){
        scorecard.add(10);
      }
      expect(scorecard.isBonusBall()).toEqual(true)
    })

    it("returns false if sum of first and second rolls of frame is less than or equal to 10", function(){
      for(var i = 0; i < 20; i++){
        scorecard.add(2);
      }
      expect(scorecard.isBonusBall()).toEqual(false)
    })

  })

  describe("clearFrame", function(){
    it("clears the frame score", function(){
      for(var i = 0; i < 12; i++){
        scorecard.add(10);
      }
      scorecard.clearFrame()
      expect(scorecard.frame_score).toEqual([])
    })
  })

  describe("cumulCalc", function(){
    it("calculates the cumulative score over a game", function(){
      for(var i = 0; i < 12; i++){
        scorecard.add(10);
      }
      expect(scorecard.cumulCalc()).toEqual([30,60,90,120,150,180,210,240,270,300])
    })
  })
})
