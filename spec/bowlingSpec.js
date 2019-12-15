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
    expect(bowling.currentScore()).toEqual("");
    expect(bowling.currentNotes()).toEqual("");
  });

  describe("on the first frame and first roll", function() {
    it("can add number of pins knocked down to the scoreheet", function() {
      bowling.knockedDown(3);
      expect(bowling.scoreSheet[0]["pins"]).toEqual(3);
    });

    it("moves on to the next roll after the turn has been taken", function() {
      bowling.knockedDown(3);
      expect(bowling.currentFrame()).toEqual(1);
      expect(bowling.currentRoll()).toEqual(2);
      expect(bowling.currentPins()).toEqual("");
      expect(bowling.currentScore()).toEqual("");
      expect(bowling.currentNotes()).toEqual("");
    });
  });

  describe("on the first frame and second roll", function() {
    it("adds the new total score to the score sheet once second roll has been taken", function() {
      bowling.knockedDown(3);
      expect(bowling.currentScore()).toEqual("");
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[1]["score"]).toEqual(7);
    });
  });


});
