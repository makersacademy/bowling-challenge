// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.
'use strict';

describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function(){
    expect(frame).toBeDefined();
  });

  it("contains roll1 and roll2", function(){
    var _roll1;
    var _roll2
    expect(frame._roll1).toBeDefined();
    expect(frame._roll2).toBeDefined();
  });

  it("has a score", function(){
    var _score;
    expect(frame._score).toBeDefined();
  });

  it("has a bonus", function(){
    var _bonus;
    expect(frame._bonus).toBeDefined();
  });


});
