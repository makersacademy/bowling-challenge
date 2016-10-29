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
      expect(scorecard.getCurrentRoll()).toEqual(1)
    });
  });

  describe("first full turn", function () {

    describe("first roll", function () {

      it("it updates the game total", function () {
        scorecard.updateScore(4)
        expect(scorecard.getCurrentScore()).toEqual(4)
      });

      it("it updates the frame total", function () {
        scorecard.updateScore(5)
        expect(scorecard.getFrameScore()).toEqual(5)
      });

      it("it starts a new turn if you score a maximum of 10 on the first roll", function () {
        scorecard.updateScore(10)
        expect(scorecard.getCurrentFrame()).toEqual(2)
      });
    });

    describe("second roll", function () {

      it("it changes to turn two after updating the score", function () {
        scorecard.updateScore(5)
        expect(scorecard.getCurrentRoll()).toEqual(2)
      });

    });
  });


      // describe("second full turn", function () {
      //
      //   it("it changes the rolls to 0 upon starting a new framme", function () {
      //     scorecar
      //   });
      // });


  //
  // describe("end conditions", function () {
  //
  //   it("it can on", function () {
  //
  //   });
  // });

});
