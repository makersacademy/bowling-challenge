'use strict';

var Bowling = require('../src/bowling');

describe('scoreboard', function() {
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  it('can get final score', function() {
    bowling.play(4);
    bowling.play(2);
    bowling.play(10);
    bowling.play(3);
    bowling.play(7);
    bowling.play(0);
    bowling.play(10);
    bowling.play(10);
    bowling.play(10);
    bowling.play(10);
    bowling.play(10);
    bowling.play(8);
    bowling.play(2);
    bowling.play(10);
    bowling.play(10);
    bowling.play(9);
    bowling.print();
    expect(bowling.getFrameScore(10)).toEqual(213);
  });

  it('can get score of intermediate an frame', function() {
    bowling.play(4);
    bowling.play(2);
    bowling.play(10);
    bowling.play(3);
    bowling.play(7);
    bowling.play(0);
    bowling.play(10);
    bowling.play(10);
    expect(bowling.getFrameScore(3)).toEqual(36);
  });
});
