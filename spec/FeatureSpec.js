'use strict';

describe('Feature tests',function(){
  var bowling
  var scoreCard

  beforeEach(function(){
    bowling = new Bowling();
    scoreCard = new ScoreCard();
  });

  it('Bowling the ball generates the first score', function(){
    spyOn(Math,'floor').and.returnValue(8);
    bowling.bowlOne(scoreCard)
    expect(scoreCard.viewScore()).toEqual(8)
  });

  it('a frame has two rolls with a cumulative score', function(){
    spyOn(Math,'floor').and.returnValue(4);
    bowling.bowlOne(scoreCard)
    bowling.bowlTwo(scoreCard)
    expect(scoreCard.viewScore()).toEqual(8)
  });

  it('frame scores and overall scores are both tracked', function(){
    spyOn(Math,'floor').and.returnValue(3);
    bowling.bowlOne(scoreCard);
    bowling.bowlTwo(scoreCard);
    bowling.bowlOne(scoreCard);
    bowling.bowlTwo(scoreCard);
    expect(scoreCard.viewScore()).toEqual(12)
    expect(scoreCard.viewFrameScore()).toEqual([3,3])
  });

  describe('Bonus points',function(){
    it('When a stike is scored, I get bonus points for the next 2 goes', function(){
      spyOn(Math,'floor').and.returnValues(10,0,1,1);
      bowling.bowlOne(scoreCard);
      bowling.bowlTwo(scoreCard);
      bowling.bowlOne(scoreCard);
      bowling.bowlTwo(scoreCard);
      expect(scoreCard.viewScore()).toEqual(14)
    });

    it('When a spare is scored, I get bonus points on the next go', function(){
      spyOn(Math,'floor').and.returnValues(5,5,3,2);
      bowling.bowlOne(scoreCard);
      bowling.bowlTwo(scoreCard);
      bowling.bowlOne(scoreCard);
      bowling.bowlTwo(scoreCard);
      expect(scoreCard.viewScore()).toEqual(18)
    });

  });

});
