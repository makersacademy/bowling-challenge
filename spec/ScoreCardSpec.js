'use strict';

describe('ScoreCard',function(){
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  it('One can see the score on the scorecard', function(){
    expect(scoreCard.viewScore()).toEqual(0);
  });

  it('Updates the score on the scorecard', function(){
    scoreCard.update(8);
    expect(scoreCard.viewScore()).toEqual(8);
  });

  describe('Frames:', function(){

    it('Updates the frame score on the scorecard', function(){
      scoreCard.update(8);
      scoreCard.update(8);
      expect(scoreCard.viewFrameScore()).toEqual(16);
    });

    it('Resets frame score to 0 after frame', function(){
      scoreCard.update(8);
      scoreCard.update(8);
      scoreCard.update(3);
      expect(scoreCard.viewScore()).toEqual(19);
      expect(scoreCard.viewFrameScore()).toEqual(3);
    });

  });

});
