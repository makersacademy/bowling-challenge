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

  it("Get score from two frames, no bunus", function() {
    frame1 = createFrame([1,3]);
    frame2 = createFrame([0,0]);
    expect(frame1.totalscore()).toEqual(4);
  });


});
