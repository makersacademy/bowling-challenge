'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    spyOn(window, 'Frame').and.callFake(function() {
      let rolls = [];
      let emptyFrame = jasmine.createSpyObj('frame', ['addRoll', 'getRolls']);
      emptyFrame.getRolls.and.callFake(function() { return rolls; });
      return emptyFrame;
    });

    scorecard = new Scorecard();
  });

  it('has a total score initially equal to zero', function(){
    expect(scorecard.getTotalScore()).toEqual(0);
  });

  it('has 10 frames', function(){
    expect(scorecard.getFrames().length).toEqual(10);
  });

  it('calculates the total score based on the frames and rolls', function(){
    let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
    roll_1.getScore.and.callFake(function() { return 4; });

    let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
    roll_2.getScore.and.callFake(function() { return 3; });

    let full_rolls = [ roll_1, roll_2 ];
    scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });

    expect(scorecard.getTotalScore()).toEqual(7);
  });

});