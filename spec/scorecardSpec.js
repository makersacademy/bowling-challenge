'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('calculating two rolls of one frame.', function(){
    it('starts with an empty scorecard array', function() {
      expect(scorecard.currentGameScore()).toEqual([]);
    });

    it('starts with an empty currentframe array', function() {
      expect(scorecard.currentFrame).toEqual([]);
    });

    it('stores first role in the rollOne', function() {
      scorecard.calculateCurrentRole(3);
      expect(scorecard.roleOne).toEqual(3);
    });

    it('stores second role in rollTwo if rollOne has been taken', function() {
      scorecard.calculateCurrentRole(4);
      scorecard.calculateCurrentRole(7);
      expect(scorecard.roleTwo).toEqual(7);
    });
  });
});
