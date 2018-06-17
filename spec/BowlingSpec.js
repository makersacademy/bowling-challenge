'use strict';

describe('Bowling',function(){
  var bowling;
  var scoreCard;

  beforeEach(function(){
    bowling = new Bowling();
    scoreCard = jasmine.createSpyObj('scoreCard',['updateBowlOne','updateBowlTwo']);

  });

  it('Bowls ball 1', function(){
    bowling.bowlOne(scoreCard)
    expect(scoreCard.updateBowlOne).toHaveBeenCalled();
  });

  it('Bowls ball 2', function(){
    bowling.bowlTwo(scoreCard)
    expect(scoreCard.updateBowlTwo).toHaveBeenCalled();
  });

});
