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

  it('knows the amount of rolls', function() {
   frame.roll();
   expect(frame._rolls).toEqual(1);
  });

  it('ups points and downs pins with rolls', function() {
    spyOn(frame, '_hit').and.returnValue(7);
    frame.roll();
    expect(frame._points).toBe(7);
    expect(frame._standingPins).toBe(3);
   });

   it('knows when the frame is complete', function() {
     frame.roll();
     frame.roll();
     expect(frame.isDone()).toBe(true);
   })

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
});
