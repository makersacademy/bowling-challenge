describe ("Bowl", function() {

  var roll1;
  var bowl;
  bowl = new Bowl();




  it("should have a frame 1 with a score of 0 when created", function() {
    expect(bowl.frame1).toEqual(0);
  });

  it("should have a frame 2 with a score of 0 when created", function() {
    expect(bowl.frame2).toEqual(0);
  });

  it("should have 10 pins when created", function() {
    expect(bowl.pins).toEqual(10);
  });

  it("should be able to move onto the next frame", function() {
    bowl.nextFrame();
    expect(bowl.frameNumber).toEqual(2);
  });

  it("should let rolls hit pins", function() {
    bowl.pinHit();
    expect(bowl.pins).toEqual(9);
  });

  xit("should only let the roll have a maximum of 10", function() {
    roll1.roll;
    expect(bowl.roll1(11)).toEqual(10)
  });





});
