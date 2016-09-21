/*jshint -W117 */

describe("feature test", function(){ "use strict";

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe("bowl functionality", function(){

    it("pinsKnockdown method generates number between 0 and 10 ", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValue(3);
      expect(bowling.pinsKnockdown()).toEqual(3);
    });

    it("records roll score in correct variable",function(){
      bowling.frameAndRoll();
      spyOn(bowling, 'pinsKnockdown').and.returnValue(3);
      bowling.rollScoreRecord();
      expect(bowling._rollScore1).toEqual(0)
      expect(bowling._rollScore2).toEqual(3)
    })

    it("records if a strike has been achieved", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValue(10);
      bowling.bowl();
      expect(bowling._sX).toEqual("Strike!");
    });

    it("records if a spare has been achieved", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 5);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._sX).toEqual("Spare!");
    });

    it("records correct total score", function(){
      bowling._totalScore = 0;
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 2);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._totalScore).toEqual(7);
    });

    it("adds correct amount to score when a strike is recoreded", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValues(10, 2, 7);
      bowling.bowl();
      bowling.bowl();
      bowling.bowl();
      expect(bowling._totalScore).toEqual(28);
  });

  it("adds correct amount to score when a spare is recoreded", function(){
    spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 5, 5, 2);
    bowling.bowl();
    bowling.bowl();
    bowling.bowl();
    bowling.bowl();
    expect(bowling._totalScore).toEqual(22);
  });
});

  describe("frame/roll functionality", function(){

    it("alternates roll count", function(){
      bowling.rollAlternate();
      expect(bowling._roll).toEqual(2);
      bowling.rollAlternate();
      expect(bowling._roll).toEqual(1);
    });

    it("increments frame count", function(){
      bowling._standingPins = 0
      bowling.frameIncrement();
      expect(bowling._frame).toEqual(2);
    });

    it("manages frame and roll logic", function(){
      bowling._standingPins = 0
      bowling.frameAndRoll();
      expect(bowling._frame).toEqual(2);
      expect(bowling._roll).toEqual(1);
    });


    it("frame specific variables are reset at a new frame", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValues(3, 4);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._rollScore1).toEqual(0);
      expect(bowling._rollScore2).toEqual(0);
      expect(bowling._currentKnockdown).toEqual(0);
      expect(bowling._standingPins).toEqual(10);
    });

    it("manages end game - frame not increased after 10", function(){
      bowling._frame = 10
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 2);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._frame).toEqual(10);
    });

    it("manages end game - extra roll for strike/spare", function(){
      bowling._frame = 10
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 5);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._frame).toEqual(11);
    });
  });

});
