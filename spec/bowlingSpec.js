'use strict';

describe('Bowling', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("starts with a total score of 0", function() {
    expect(bowling.totalScore).toEqual(0);
  });

  it("starts with an empty score sheet", function(){
    expect(bowling.currentFrame()).toEqual(1);
    expect(bowling.currentRoll()).toEqual(1);
    expect(bowling.currentPins()).toEqual("");
    expect(bowling.currentNotes()).toEqual("");
  });



});
