describe("BowlingFrame", function() {
  var frame = new BowlingFrame();
  var frame1 = new BowlingFrame(2);
  var frame2 = new BowlingFrame(10);

  it("has a roll when created with fallen pins as argument", function() {

    expect(frame1.rolls).toEqual([2]);
  });


  it("can take a second roll", function() {
    frame1.saveRoll(3)
    expect(frame1.rolls).toEqual([2,3])
  });



});
