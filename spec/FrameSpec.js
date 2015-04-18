describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  // inputs and outputs
  // Each frame has 2 rolls: x, y with knocked pins.
  // Frame 10 has an optional 3rd roll, z.
  // inputs are frame (increment), rolls 1 or 2 (&3), knockedpins.
  // outputs is framescore(array) and score(sum)

  it('starts with a score of 0', function(){
    expect(frame.score()).toEqual(0);
  });

  xit('knows which frame we are at when playing', function(){

  });

  xit('knows that the game ends after the 10th frame is done playing', function(){

  });

  xit('writes the score of x+y(+z) in the framescore if the sum differs from 10', function(){

  });

  xit('returns STRIKE! if we knock 10 pins in the first shot', function() {

  });

  xit('returns SPARE! if we knock 10 pins in the first shot', function() {
    // x+y but x!=0
  });

  xit('keeps the score by adding each frame (but waits for strikes and spares)', function(){

  });

  xit('can roll an extra 2 balls if strike on the 1st roll of the 10th frame', function() { 

  });

  xit('can roll an extra ball if spare on the 2nd roll of the 10th frame', function() { 

  });
});