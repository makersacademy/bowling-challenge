'use strict';

describe('Bowling',function(){
  var bowling;
  var scoreCard;

  beforeEach(function(){
    bowling = new Bowling();
    scoreCard = jasmine.createSpyObj('scoreCard',['update','viewScore', 'viewFrameScore']);

  });

  it('bowling the ball updates the scorecard', function(){
    bowling.bowl(scoreCard)
    expect(scoreCard.update).toHaveBeenCalled();
  });

});
