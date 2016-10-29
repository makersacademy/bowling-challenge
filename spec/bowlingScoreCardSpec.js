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
  });
});
