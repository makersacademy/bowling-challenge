'use strict';

describe('Scorecard',function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  it('starts the game at 0',function(){
    expect(scorecard.total).toEqual(0);
  });





});
