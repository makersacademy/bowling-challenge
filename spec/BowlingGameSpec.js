'use strict';
var BowlingGame = require('../lib/BowlingGame.js');

describe('BowlingGame', function() {

  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('starts on the first frame', function() {
    expect(bowlingGame.getCurrentFrame()).toEqual(1);
  });

  it('can move to the next frame', function(){
    bowlingGame.nextFrame();
    expect(bowlingGame.getCurrentFrame()).toEqual(2);
  });

  it('can return the number of the previous frame', function() {
    bowlingGame.nextFrame();
    expect(bowlingGame.getPreviousFrame()).toEqual(1);
  });

  it('starts on the first roll of the frame', function() {
    expect(bowlingGame.getRollNumber()).toEqual(1);
  });

  it('can change the roll number', function() {
    bowlingGame.changeRollNumber();
    expect(bowlingGame.getRollNumber()).toEqual(2);
  })
});
