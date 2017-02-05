// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.

describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function(){
    expect(frame).toBeDefined();
  });

  it("contains roll1 and roll2", function(){
    var roll1;
    var roll2
    expect(frame.roll1).toBeDefined();
    expect(frame.roll2).toBeDefined();
  });


});
