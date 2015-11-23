'use strict';

describe('Game', function(){
  var game;
  var roll;
  var rollOneWithSevenPins;
  var rollTwoWithTwoPins;
  var rollTwoWithThreePins;

  beforeEach(function(){
    game = new Game();

    rollOneWithSevenPins = {
      rollNumber: function() {
        return 1;
      },
      knockedDownPins: function() {
        return 7;
      },
      isSpare: function() {
        return false;
      }
    }

    rollTwoWithTwoPins = {
      rollNumber: function() {
        return 2;
      },
      knockedDownPins: function() {
        return 2;
      },
      isSpare: function() {
        return true;
      }

    }

    rollTwoWithThreePins = {
      rollNumber: function() {
        return 2;
      },
      knockedDownPins: function() {
        return 3;

      },
      isSpare: function() {
        return false;
      }
    }

  });

  it('roll number is 1 by default', function(){
    expect(game.rollNumber()).toEqual(1);
  });

  it('frame number is 1 by default', function(){
    expect(game.frameNumber()).toEqual(1);
  });

  it('score is 0 by default', function(){
    expect(game.score()).toEqual(0);
  });

  it('tracks the roll number', function(){
    game.increaseScore(rollTwoWithThreePins);
    expect(game.rollNumber()).toEqual(2);
  });

  it('tracks the frame number', function(){
    game.increaseScore(rollOneWithSevenPins);
    game.increaseScore(rollTwoWithTwoPins);
    expect(game.frameNumber()).toEqual(2);
  });

  it('can increase the score at first roll', function(){
    game.increaseScore(rollOneWithSevenPins);
    expect(game.score()).toEqual(7);
  });

  it('can increase the score at second roll', function(){
    game.increaseScore(rollOneWithSevenPins);
    game.increaseScore(rollTwoWithThreePins);
    expect(game.score()).toEqual(10);
  });

  it('can account for a spare', function() {
    game.increaseScore(rollOneWithSevenPins);
    game.increaseScore(rollTwoWithThreePins);
    console.log(game._score)
    console.log(rollTwoWithTwoPins.isSpare())
    game.increaseScore(rollTwoWithTwoPins);
    console.log(game._score)
    expect(game.score()).toEqual(14);
  });

});
