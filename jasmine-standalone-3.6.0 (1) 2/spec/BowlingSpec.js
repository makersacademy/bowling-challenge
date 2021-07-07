'use strict';

describe('Bowling', function() {
  var score;
  var pins;

  it('starts at 0 score', function() {
    score = new Bowling();
    expect(score.getCurrentScore()).toEqual(0);
  });

  it('increases the score by number of pins knocked down with add()', function() {
    score = new Bowling();
    var pins = window.prompt("How many pins did you knock down? ");
    pins = parseInt(pins, 10);
    score.add(pins);
    expect(score.getCurrentScore()).toEqual(pins);
  });

  it('handles strikes correctly', function() {
    score = new Bowling();
    score.add(10);
    score.add(10);
    score.add(2);
    score.add(1);
    expect(score.getCurrentScore()).toEqual(22+13+2+1);
  });

  it('handles spares correctly', function () {
    score = new Bowling();
    score.add(5);
    score.add(5);
    score.add(2);
    expect(score.getCurrentScore()).toEqual(10+2+2)
  })

});
