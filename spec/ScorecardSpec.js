'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('#scoreArray', function(){

    it ("Empty array exists", function(){

      expect(scorecard.scoreArray).toEqual([]);

    });

  });

  describe ('#addScore', function() {

    it ("should add score to array", function() {

      scorecard.addScore(3)

      expect(scorecard.scoreArray).toContain(3)

    })
  })



});

