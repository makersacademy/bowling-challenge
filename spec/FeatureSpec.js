'use strict';

// As a player
// So that I can play my first frame
// I'd like to bowl 2 balls and know my score

describe('Feature tests',function(){
  var bowling
  var scoreCard

  beforeEach(function(){
    bowling = new Bowling();
    scoreCard = new ScoreCard();
  });

  it('bowling the ball generates the first score', function(){
    spyOn(Math,'floor').and.returnValue(8);
    bowling.bowl(scoreCard)
    expect(scoreCard.viewScore()).toEqual(8)
  });

  it('a frame has two rolls with a cumulative score', function(){
    spyOn(Math,'floor').and.returnValue(7);
    bowling.bowl(scoreCard)
    bowling.bowl(scoreCard)
    expect(scoreCard.viewScore()).toEqual(14)
  });

  it('frame scores and overall scores are both tracked', function(){
    spyOn(Math,'floor').and.returnValue(7);
    var i;
    for( i = 0; i < 4; i++){
      bowling.bowl(scoreCard);
    };
    expect(scoreCard.viewScore()).toEqual(28)
    expect(scoreCard.viewFrameScore()).toEqual(14)

  });

});
