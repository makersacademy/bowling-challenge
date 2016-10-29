'use strict';

describe ('Scorecard', function() {

  var Scorecard = require('../src/bowlingScoreCard');
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  describe('start conditions', function(){

    it('it starts with a total score of 0', function(){
      expect(scorecard.total).toEqual(0)
    });

    it('it starts at frame 1', function(){
      expect(scorecard.getCurrentFrame()).toEqual(1)
    });

    it('it starts at turn 1', function(){
      expect(scorecard.getCurrentTurn()).toEqual(1)
    });
  });

  describe("first turn", function () {

    it("it updates the game total", function () {
      scorecard.updateScore(4)
      expect(scorecard.getCurrentScore()).toEqual(4)
    });

    it("it updates the frame total", function () {
      scorecard.updateScore(5);
      expect(scorecard.getFrameScore()).toEqual(5)
    });
  });
  //
  // describe("end conditions", function () {
  //
  //   it("it can on", function () {
  //
  //   });
  // });

});
