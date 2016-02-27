'use strict';

describe("scoreCalculator",function(){
  var calculator, spareRoll,normalRoll, strikeRoll, halfSpareRoll, halfSingleStrikeRoll;

  beforeEach(function(){
    calculator = new ScoreCalculator();
    spareRoll = [1,9,5,4];
    normalRoll = [2,5,4,5];
    strikeRoll = [10,0,5,2];
    halfSpareRoll = [2,5,5,5,3,4,5,2,6,1];
    halfSingleStrikeRoll = [2,5,4,5,10,0,5,2,6,1];
  });

  describe("type",function(){
    it("finds a spare",function(){
      expect(calculator.isSpare(spareRoll)).toEqual(true);
    });

    it("finds a spare",function(){
      var spareRoll2 = [0,10,7,2];
      expect(calculator.isSpare(spareRoll2)).toEqual(true);
    });

    it("does not find a spare",function(){
      expect(calculator.isSpare(normalRoll)).toEqual(false);
    });

    it("finds a strike",function(){
      expect(calculator.isStrike(strikeRoll)).toEqual(true);
    });
  });

  describe("spareCalculation",function(){
    it("calculates the right value of a spare",function(){
      expect(calculator._spareBonus(spareRoll.slice(2,4))).toEqual(5);
    });
    it("calculates a single strike correctly",function(){
      expect(calculator._strikeBonus(strikeRoll.slice(2,4))).toEqual(7);
    });

    it("calculates a double strike correctly",function(){
      var doubleStrike = [10,0,10,0,5,7]
      expect(calculator._strikeBonus(doubleStrike.slice(2,doubleStrike.length))).toEqual(15);
    });

    it("calculates a triple strike correctly",function(){
      var doubleStrike = [10,0,10,0,10,0]
      expect(calculator._strikeBonus(doubleStrike.slice(2,doubleStrike.length))).toEqual(20);
    });
  });

  describe("finalCalc",function(){
    it("calculates the right scores of a spare roll",function(){
      expect(calculator.finalCalc(halfSpareRoll)).toEqual([7,20,27,34,41]);
    });

    it("calculates the right scores of a strike roll",function(){
      expect(calculator.finalCalc(halfSingleStrikeRoll)).toEqual([7,16,33,40,47]);
    });

    it("doesnt return the value if bonus is in last frame",function(){
      var thirdFrameStrike = [0,5,0,5,10,0];
      expect(calculator.finalCalc(thirdFrameStrike)).toEqual([5,10,NaN]);
    });


    it("calculates the right scores of a double strike roll",function(){
      var halfDoubleStrikeRoll = [2,5,4,5,10,0,10,0,6,1];
      expect(calculator.finalCalc(halfDoubleStrikeRoll)).toEqual([7,16,42,59,66]);
    });

    it("calculates the right scores of a triple strike roll",function(){
      var halfDoubleStrikeRoll = [2,5,10,0,10,0,10,0,6,1];
      expect(calculator.finalCalc(halfDoubleStrikeRoll)).toEqual([7,37,63,80,87]);
    });

    it("works from the first frame",function(){
      var firstFrame = [1,2];
      expect(calculator.finalCalc(firstFrame)).toEqual([3]);
    });

    it("works for ten frames",function(){
      var tenFrames = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,];
      expect(calculator.finalCalc(tenFrames)).toEqual([3,6,9,12,15,18,21,24,27,30]);
    });

    it("one strike in last frame",function(){
      var tenFramesOneStrike = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,10,5,4];
      expect(calculator.finalCalc(tenFramesOneStrike)).toEqual([3,6,9,12,15,18,21,24,27,46]);
    });
  });

  describe("tenFrameCalc",function(){
    it("calculates the value of the tenth frame",function(){
      var tenthFrame = [10,5,4];
      expect(calculator._tenFrameCalc(tenthFrame)).toEqual(19);
    });

  });

});
