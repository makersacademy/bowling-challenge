describe('Frame', function() {
  var frame;
  beforeEach(function() {
   frame = new Frame();
  })

  it('starts out empty', function() {
   expect(frame._points).toEqual(0);
 });

  it('has 10 pins', function() {
   expect(frame._standingPins).toBe(10);
  });

  it('knows how many times the player has rolled', function() {
   frame.roll();
   expect(frame._rolls).toEqual(1);
  });

  it('ups points and downs pins with rolls', function() {
    spyOn(frame, '_hit').and.returnValue(2);
    frame.roll();
    expect(frame._firstRoll).toBe(2);
    expect(frame._standingPins).toBe(8);
    frame.roll();
    expect(frame._secondRoll).toBe(2);
    expect(frame._standingPins).toBe(6);
   });

   it('knows when the frame is complete', function() {
     frame.roll();
     frame.roll();
     expect(frame.isDone()).toBe(true);
   })

  it('adds points together', function() {
    spyOn(frame, '_hit').and.returnValue(3);
    frame.roll();
    frame.roll();
    expect(frame._points).toEqual(6);
  });

   it('saves points', function() {
    frame.roll()
    expect(frame.savePoints()).toEqual(frame._points)
  });

   it('can have a gutter roll', function() {
     spyOn(frame, '_hit').and.returnValue(0);
     frame.roll();
     expect(frame._points).toBe(0);
   })

   it('has zero points with only gutter rolls', function() {
     spyOn(frame, '_hit').and.returnValue(0);
     frame.roll();
     frame.roll();
     expect(frame.isGutter()).toBe(true);
   })

   it('reads a spare', function() {
    spyOn(frame, '_hit').and.returnValue(5)
    frame.roll();
    frame.roll();
    expect(frame.isSpare()).toBe(true);
   });

  it('knows that strike ends the frame', function() {
   spyOn(frame, '_hit').and.returnValue(10);
   frame.roll();
   expect(frame.isStrike()).toBe(true);
   expect(frame.isDone()).toBe(true);
  });

  it('can add bonus points', function() {
    frame.addBonus(3);
    expect(frame.savePoints()).toEqual(3);
  });

  it('calculates and adds bonus points for spares', function() {
    spyOn(frame, '_hit').and.returnValue(3);
    frame.roll();
    // frame.roll();
    expect(frame.spareBonus()).toEqual(3);
  });
});
