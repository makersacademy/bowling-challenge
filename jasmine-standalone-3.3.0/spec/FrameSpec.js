describe("Frame", function() {

  var frame1;
  var frame2;
  var frame3;


  function makeFrame(array) {
     return new Frame(array);
   }

  it("Get the score from one frame", function() {
    frame1 = makeFrame([4,2]);
    expect(frame1.oneframeScore().toEqual(6);
  });


  it("Get score from two frames", function() {
    frame1 = makeFrame([4,2])
    frame2 = makeFrame([2,2])
    expect(frame1.totalscore(frame2)).toEqual(10);
  })

});
