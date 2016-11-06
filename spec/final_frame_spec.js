'use strict';

describe('Final Frame', function() {
  var finalFrame;

  beforeEach(function(){
    finalFrame = new FinalFrame();
  });

  describe("spare/strike in final frame", function() {
    it('calculates correct skittles with spare', function() {
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(5);
      expect(finalFrame.totalScore).toEqual(15);
    });

    it('calculates correct skittles with strike', function() {
      finalFrame.addScore(10);
      finalFrame.addScore(7);
      finalFrame.addScore(1);
      expect(finalFrame.totalScore).toEqual(18);
    });

    it('calculates correct skittles with 3 final strikes', function() {
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.totalScore).toEqual(30);
    });

    it('calculates correct skittles with a strike then a spare', function() {
      finalFrame.addScore(10);
      finalFrame.addScore(5);
      finalFrame.addScore(5);
      expect(finalFrame.totalScore).toEqual(20);
    });
  });

  it('is normally allowed 2 hits', function() {
    expect(finalFrame.allowedTurns).toEqual(2);
  });

  it('is allowed 3 shots if it is a strike', function() {
    finalFrame.addScore(10);
    expect(finalFrame.allowedTurns).toEqual(3);
  });

  it('is allowed 3 shots if it is a spare', function() {
    finalFrame.addScore(3);
    finalFrame.addScore(7);
    expect(finalFrame.allowedTurns).toEqual(3);
  });

  describe('Turns', function() {
    it("can't have more turns than is allowed", function() {
      finalFrame.addScore(3);
      finalFrame.addScore(3);
      expect(function() { finalFrame.addScore(3); }).toThrowError('Game Over')
    });

    it("can't throws error if too many points", function() {
      finalFrame.addScore(8);
      expect(function() { finalFrame.addScore(8); }).toThrowError('Illegal Score')
    });

    it("knows game is over", function() {
      finalFrame.addScore(3);
      finalFrame.addScore(3);
      expect(finalFrame.isOver).toEqual(true);
    });

  });

});
