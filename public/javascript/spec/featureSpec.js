'use strict';

describe('feature tests', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('when there are no strikes or spares', function(){
    it('can score several frames correctly', function(){
      scorecard.roll(5)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(1)
      scorecard.roll(3)
      scorecard.roll(6)
      expect(scorecard.calculate_score()).toEqual(21)
    });
  });

})
