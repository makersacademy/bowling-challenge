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
  });

  it('score card starts as an empty object', function() {
    expect(bowlingGame.getScoreCard()).toEqual({});
  });

  it('a roll of 3 on the first frame can be added to the score card', function(){
    bowlingGame.addRoll(3);
    expect(bowlingGame.getScoreCard()).toEqual({1: [3, undefined]});
  });

  it('a roll of 5 on the second frame can be added to the score card', function(){
    bowlingGame.scoreCard = {1: [3, undefined]};
    bowlingGame.changeRollNumber();
    bowlingGame.addRoll(5);
    expect(bowlingGame.getScoreCard()).toEqual({1: [3, 5]});
  });

  it('adding a roll to the score card changes the roll number', function() {
    bowlingGame.addRoll(9);
    expect(bowlingGame.getRollNumber()).toEqual(2);
  });

  it('adding a second roll to the score card changes the current and previous frame numbers', function() {
    bowlingGame.addRoll(2);
    expect(bowlingGame.getCurrentFrame()).toEqual(2);
    expect(bowlingGame.getPreviousFrame()).toEqual(1);
  });
});
