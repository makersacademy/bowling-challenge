describe('Frame', function(){
  beforeEach(function(){
    frame = new Frame();
  });

  it("allows a score to be recorded for a frame", function(){
    frame.recordScore(3);
    expect(frame.balls).toContain(3);
  });

  it("sets the frame to not complete when scores have not been entered", function(){
    expect(frame.isComplete()).toBe(false);
  });

  it("sets the frame to be complete after two scores equalling less than 10", function(){
    frame.recordScore(3);
    frame.recordScore(4);
    expect(frame.isComplete()).toBe(true);
  });
});
