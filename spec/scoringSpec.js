'use strict';

describe('Scoring', function(){

  var scoring;

  beforeEach(function(){
    scoring = new Scoring();
  })

  it('bowl 1 score starts at zero', function(){
    expect(scoring.getBowlOneScore()).toEqual(0);
  });

  it('bowl 2 score starts at zero', function(){
    expect(scoring.getBowlTwoScore()).toEqual(0);
  });

  it('total score starts at zero', function(){
    expect(scoring.getTotalScore()).toEqual(0);
  });


})
