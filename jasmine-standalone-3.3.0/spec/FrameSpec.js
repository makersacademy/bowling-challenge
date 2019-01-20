describe("Frame", function() {

  var frame1;
  var frame2;
  var frame3;

  function createFrame(array) {
    return new Frame(array);
  }

  it("Get the score from one frame", function() {
    frame1 = createFrame([4,2]);
    expect(frame1.oneframeScore()).toEqual(6);
  });

  it("Get score from one frame, no bonus", function() {
    frame1 = createFrame([5,1]);
    frame2 = createFrame([0,0]);
    expect(frame1.totalscore()).toEqual(6);
  });
// bonus for strike is the whole next frame (2 rolls)
  it("Get score from strike, including bonus", function() {
    frame1 = createFrame([10,0]);
    frame2 = createFrame([2,3]);
    expect(framte1.totalscore(frame2)).toEqual(15);
  });
  
  // bonus for spare is next roll

  it("Get score from spare, including bonys", function() {
    frame1 = createFrame([7,3])
    frame2 = createFrame([2,3])
    expect(frame1.totalscore(frame2)).toEqual(12);
  });
});
