'use strict';

describe('ScoreCard',function(){
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  describe('Overall scores:', function(){
    it('One can see the score on the scorecard', function(){
      expect(scoreCard.viewScore()).toEqual(0);
    });

    it('Updates the score on the scorecard', function(){
      scoreCard.updateBowlOne(8);
      expect(scoreCard.viewScore()).toEqual(8);
    });
  });

  describe('Frames:', function(){

    describe('scores', function(){

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

      it('Gives bonus 10 points for strike', function(){
        scoreCard.updateBowlOne(10);
        scoreCard.updateBowlOne(2);
        scoreCard.updateBowlTwo(3);
        expect(scoreCard.viewScore()).toEqual(20);
      });

    });

    describe('Errors', function(){

      it('Bowl 1 has a max of 10 points', function(){
        expect(function(){
          scoreCard.updateBowlOne(11);
        }).toThrowError('Cannot knock down more than 10 pins');
      });

      it('The max cumulative score is 10 points',  function(){
        scoreCard.updateBowlOne(9);
        expect(function(){
          scoreCard.updateBowlTwo(2);
        }).toThrowError('Cannot knock down more than 10 pins');
      });

      it('The min score is zero', function(){
        expect(function(){
          scoreCard.updateBowlOne(-1);
        }).toThrowError('Cannot knock down less than 0 pins');
      });

    });

  });

});
