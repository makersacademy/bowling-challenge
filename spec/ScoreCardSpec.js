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
        expect(scoreCard.viewFrameScore()).toEqual([7,2]);
      });

      it('Resets frame score to 0 after frame', function(){
        scoreCard.updateBowlOne(8);
        scoreCard.updateBowlTwo(2);
        scoreCard.updateBowlOne(3);
        expect(scoreCard.viewScore()).toEqual(13);
        expect(scoreCard.viewFrameScore()).toEqual([3]);
      });

      describe('bonus points', function(){

        it('Gives bonus points for strike', function(){
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(2);
          scoreCard.updateBowlTwo(3);
          expect(scoreCard.viewScore()).toEqual(20);
        });

        it('Gives bonus points for spare', function(){
          scoreCard.updateBowlOne(4);
          scoreCard.updateBowlTwo(6);
          scoreCard.updateBowlOne(7);
          scoreCard.updateBowlTwo(2);
          expect(scoreCard.viewScore()).toEqual(26);
        });

        it('Two consecutive strikes means bonus points roll to the third frame', function(){
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(5);
          scoreCard.updateBowlTwo(3);
          expect(scoreCard.viewScore()).toEqual(51);
        });

        it('Strike and spare combo', function(){
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(5);
          scoreCard.updateBowlTwo(5);
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
          scoreCard.updateBowlOne(4);
          scoreCard.updateBowlTwo(2);
          expect(scoreCard.viewScore()).toEqual(86);
        });

      });

      it('A perfect game is 300', function(){
        var i;
        for( i=1 ; i<11 ; i++ ){
          scoreCard.updateBowlOne(10);
          scoreCard.updateBowlTwo(0);
        };
        scoreCard.bonusBowlOne(10);
        scoreCard.bonusBowlTwo(10);
        expect(scoreCard.viewScore()).toEqual(300);
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
