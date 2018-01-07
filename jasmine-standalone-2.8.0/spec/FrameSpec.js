describe("Frame", function() {

  var frame, bowl1, bowl2;

  beforeEach(function() {
    frame = new Frame();
    bowl1 = new Bowl();
    bowl2 = new Bowl();
  })

  it("should know if a strike has been bowled", function() {
    bowl1.roll(10);
    frame.addBowl(bowl1);
    expect(frame.isStrike()).toBe(true);
  })

  it("should set second bowl to 0 if strike has been bowled", function() {
    bowl1.roll(10);
    frame.addBowl(bowl1);
    expect(frame.frameScore[1].pinsBowled).toEqual(0);
  })

  it("should know if a spare has been bowled", function() {
    bowl1.roll(6);
    frame.addBowl(bowl1);
    bowl2.roll(4);
    frame.addBowl(bowl2);
    expect(frame.isSpare()).toBe(true);
  })

  it("should know if the frame has been non-special", function() {
    bowl1.roll(1);
    frame.addBowl(bowl1);
    bowl2.roll(4);
    frame.addBowl(bowl2);
    expect(frame.nonSpecial()).toBe(true);
  })

})
