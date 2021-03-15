describe('Frame', function() {

  it('should have a roll1, roll2, and a bonusScore, each null', function() {
    let frame = new Frame();
    expect(frame.framescore["roll1"]).toBe(null);
    expect(frame.framescore["roll2"]).toBe(null);
    expect(frame.framescore["bonusScore"]).toBe(null);
  });

})
