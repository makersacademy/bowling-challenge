"use strict";
describe ('Frame', function() {
  let frame;
  
  beforeEach(function() {
    frame = new Frame ();
  })
  
  it('can score a rolls', function() {
    frame.roll(5);
    expect(frame.showScore()).toEqual([5])
  })
})