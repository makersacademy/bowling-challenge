"use strict";

describe('BowlingModel', function() {
  //var BowlingModel = require('../../public/js/BowlingModel');
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    // spyOn(bowlingModel.turnIncrementer, 'incrementTurn').and.returnValue({frame: 1, roll: 2});
    // spyOn(bowlingModel.turnIncrementer, 'incrementFrame').and.returnValue({frame: 2, roll: 1});
    // spyOn(bowlingModel.scoreCalculator, 'calculate').and.returnValue({total: 5, scoresArray: [5,0,0,0,0,0,0,0,0,0]});
  });

  describe('.play', function() {
    it('If new frame, creates new Frame object', function() {
      bowlingModel.play(5);
      expect(bowlingModel._frameArray.length).toEqual(1);
    });

    it('Passes pins to frame object', function() {

    });

    it('Adds new frame to _frameArray', function() {
      bowlingModel.play(5);
      expect(bowlingModel._frameArray.length).toEqual(1);
    });
  });
});
