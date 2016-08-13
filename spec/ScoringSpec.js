'use strict';

describe('Scoring', function(){
  var score;
  var firstRoll;
  var secondRoll;
  var frameTotal;
  var strike = 10;

  beforeEach(function(){
    score = new Scoring();
    firstRoll = 5;
    secondRoll = 4;
    strike;
  });

  it('calculates the total score of a frame', function(){
    frameTotal = firstRoll + secondRoll;
    score.calculateScore(firstRoll, secondRoll);
    expect(score.getCurrentScore()).toEqual(frameTotal);
  });

  it('can register a strike rolled', function(){
    expect(score.isStrike(strike)).toEqual(true);
  });

  it('can register the spare rolled', function(){
    expect(score.isSpare(5+5)).toEqual(true);
  });

  it('adds a strike bonus to next frame', function(){
    score.isStrike(strike);
    score.calculateScore(firstRoll, secondRoll);
    var bonus = (firstRoll + secondRoll);
    expect(score.getCurrentScore()).toEqual(strike + bonus);
  });

  it('adds stike bonuses for two strikes in a row', function(){
    score.isStrike(strike);
    score.isStrike(strike);
    score.calculateScore(firstRoll, secondRoll);
    var currentTotal = ((strike*2)+ firstRoll + secondRoll);
    expect(score.getCurrentScore()).toEqual(currentTotal);
  });

  it('adds spare bonus to next frame', function(){
    score.isSpare(firstRoll + 5);
    score.calculateScore(firstRoll, 5);
    score.calculateScore(firstRoll, secondRoll);
    frameTotal = ((firstRoll*2 + secondRoll) + 5);
    expect(score.getCurrentScore()).toEqual(frameTotal);
  });

});
