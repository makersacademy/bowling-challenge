'use strict';

var Bowling = require('../src/bowling');

describe('scoreboard', function() {
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  it('can get score of first frame roll', function() {
    bowling.play(1,6,0);
    expect(bowling.getFrameScore(1)).toEqual(6);
  });
});
