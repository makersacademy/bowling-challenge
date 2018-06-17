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
    scoreCard.updateBowlOne(8);
    expect(scoreCard.viewScore()).toEqual(8);
  });

  describe('Frames:', function(){

    it('Updates the frame score on the scorecard', function(){
      scoreCard.updateBowlOne(7);
      scoreCard.updateBowlTwo(2);
      expect(scoreCard.viewFrameScore()).toEqual(9);
    });

    it('Resets frame score to 0 after frame', function(){
      scoreCard.updateBowlOne(8);
      scoreCard.updateBowlTwo(2);
      scoreCard.updateBowlOne(3);
      expect(scoreCard.viewScore()).toEqual(13);
      expect(scoreCard.viewFrameScore()).toEqual(3);
    });

    // it('Bowl 1 has a max of 10 points', function(){
    //   expect(function(){
    //     scoreCard.update(11);
    //   }).toThrowError('Cannot score more than 10 points');
    // });

    // it('The max cumulative score is 10 points', function(){
    //   scoreCard.update(8);
    //   expect(scoreCard.viewFrameScore()).toEqual(3);
    // });
    //
    // it('The min score is zero', function(){
    //   scoreCard.update(8);
    //   expect(scoreCard.viewFrameScore()).toEqual(3);
    // });

  });

});
