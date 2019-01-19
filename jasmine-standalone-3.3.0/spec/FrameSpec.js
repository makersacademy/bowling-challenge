describe("Frame", function() {

  var frame1;
  var frame2;
  var frame3;


  function makeFrame(array) {
     return new Frame(array)
   }

  it("Get the score from one frame", function() {
    frame1 = makeFrame([4,2]);
    expect(frame1.oneframescore().toEqual(6);
  });


});
