
'use strict'

describe('Scorecard',function(){

var scorecard;

beforeEach(function(){
  scorecard = new Scorecard;
});

it('has a total default to zero', function(){
  expect(scorecard.totalScore()).toEqual(0);
});

it('can add to the score', function(){
  expect(scorecard.knockDownPins(5,3)).toEqual(8)
});

// it can add knocked pins to total score
it('can add two frames to the score', function(){
  expect(scorecard.knockDownPins(5,3)).toEqual(8)
});

// spare - it adds the next score on

// is strike?

// strike - it adds the next two scores on

});

