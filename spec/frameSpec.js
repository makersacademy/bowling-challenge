describe('Frame', function(){
  beforeEach(function(){
    frame = new Frame();
  });

  it("allows a score to be recorded for a frame", function(){
    frame.recordScore(3);
    expect(frame.balls).toContain(3);
  });
});
