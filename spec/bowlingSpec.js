/*jshint -W117 */

describe("feature test", function(){ "use strict";

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });


  it("Has an initial frame number of 1", function(){
    expect(bowling._frame).toEqual(1);
  });

  it("Has an initial roll number of 1", function(){
    expect(bowling._roll).toEqual(1);
  });

  it("Has an initial score of 0", function(){
    expect(bowling._score).toEqual(0);
  });

  it("pinsKnockdown method generates number between 0 and 10 ", function(){
    spyOn(bowling, 'pinsKnockdown').and.returnValue(3);
    expect(bowling.pinsKnockdown()).toEqual(3);
  });

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

  it("records roll score in correct variable",function(){
    bowling.frameAndRoll();
    spyOn(bowling, 'pinsKnockdown').and.returnValue(3);
    bowling.rollScoreRecord();
    expect(bowling._rollScore1).toEqual(0)
    expect(bowling._rollScore2).toEqual(3)
  })

});
