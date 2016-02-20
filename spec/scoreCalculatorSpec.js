'use strict';

describe("scoreCalculator",function(){
  var calculator, spareRoll,normalRoll, strikeRoll, halfSpareRoll, halfSingleStrikeRoll;

  beforeEach(function(){
    calculator = new scoreCalculator();
    spareRoll = [1,9,5,4];
    normalRoll = [2,5,4,5];
    strikeRoll = [10,0,5,2];
    halfSpareRoll = [2,5,5,5,3,4,5,2,6,1];
    halfSingleStrikeRoll = [2,5,4,5,10,0,5,2,6,1];
  });

  describe("type",function(){
    it("finds a spare",function(){
      expect(calculator.type(spareRoll)).toEqual('spare');
    });

    it("finds a spare",function(){
      var spareRoll2 = [0,10,7,2];
      expect(calculator.type(spareRoll2)).toEqual('spare');
    });

    it("does not find a spare",function(){
      expect(calculator.type(normalRoll)).toEqual('normal');
    });

    it("finds a strike",function(){
      expect(calculator.type(strikeRoll)).toEqual('strike');
    });
  });

  describe("spareCalculation",function(){
    it("calculates the right value of a spare",function(){
      expect(calculator.spareBonus(spareRoll.slice(2,4))).toEqual(5);
    });
    it("calculates a single strike correctly",function(){
      expect(calculator.strikeBonus(strikeRoll.slice(2,4))).toEqual(7);
    });

    it("calculates a double strike correctly",function(){
      var doubleStrike = [10,0,10,0,5,7]
      expect(calculator.strikeBonus(doubleStrike.slice(2,doubleStrike.length))).toEqual(15);
    });

    it("calculates a triple strike correctly",function(){
      var doubleStrike = [10,0,10,0,10,0]
      expect(calculator.strikeBonus(doubleStrike.slice(2,doubleStrike.length))).toEqual(20);
    });
  });

  describe("incrementalScore",function(){
    it("calculates the right scores of a spare roll",function(){
      expect(calculator.incrementalScore(halfSpareRoll)).toEqual([7,20,27,34,41]);
    });

    it("calculates the right scores of a strike roll",function(){
      expect(calculator.incrementalScore(halfSingleStrikeRoll)).toEqual([7,16,33,40,47]);
    });

    it("doesnt return the value if bonus is in last frame",function(){
      var thirdFrameStrike = [0,5,0,5,10,0];
      expect(calculator.incrementalScore(thirdFrameStrike)).toEqual([5,10,NaN]);
    });


    it("calculates the right scores of a double strike roll",function(){
      var halfDoubleStrikeRoll = [2,5,4,5,10,0,10,0,6,1];
      expect(calculator.incrementalScore(halfDoubleStrikeRoll)).toEqual([7,16,42,59,66]);
    });

    it("calculates the right scores of a triple strike roll",function(){
      var halfDoubleStrikeRoll = [2,5,10,0,10,0,10,0,6,1];
      expect(calculator.incrementalScore(halfDoubleStrikeRoll)).toEqual([7,37,63,80,87]);
    });

    it("works from the first roll",function(){
      var firstFrame = [1];
      expect(calculator.incrementalScore(firstFrame)).toEqual([1]);
    });

    it("works from the first frame",function(){
      var firstFrame = [1,2];
      expect(calculator.incrementalScore(firstFrame)).toEqual([3]);
    });

    it("works for ten frames",function(){
      var tenFrames = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,];
      expect(calculator.incrementalScore(tenFrames)).toEqual([3,6,9,12,15,18,21,24,27,30]);
    });
  });

  xdescribe("tenFrameCalc",function(){
    it("does not contain any frames",function(){
      expect(game.frames.length).toEqual(0);
    });
  });
});
