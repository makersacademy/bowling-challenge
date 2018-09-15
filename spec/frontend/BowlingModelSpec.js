"use strict";

describe('BowlingModel', function() {
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
  });

  describe('.play', function() {
    it('Adds new frame to _frameArray', function() {
      bowlingModel.play(5);
      expect(bowlingModel._frameArray.length).toEqual(1);
    });

    it('Add pins to current frame if not new Frame', function() {
      bowlingModel.play(5);
      bowlingModel.play(5);
      expect(bowlingModel._frameArray.length).toEqual(1);
    });
  });

  describe('.score', function() {
    it('Add pins to current frame if not new Frame', function() {
      bowlingModel.play(5);
      expect(bowlingModel.score()).toEqual({ total: 5, frameScores: [ 5, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    });
  });

  describe('.currentTurn', function() {
    it('Returns current turn', function() {
      bowlingModel.play(5);
      expect(bowlingModel.currentTurn()).toEqual({frame: 1, roll:1})
    });
  });
});
