'use strict'

describe('Bowling Scoreboard', function () {
  var scoreboard;
  var round;
  var roll1;
  var roll2;

  beforeEach(function () {
    scoreboard = new Scoreboard ();
  })

  it('Starts with 0 points', function () {
    expect(scoreboard.totalScore()).toEqual(0);
  })

})
