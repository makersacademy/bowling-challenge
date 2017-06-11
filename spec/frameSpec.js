describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    role1 = new Role();
    role2 = new Role();
    role3 = new Role();
    role4 = new Role();
    role1.addPoints(3);
    role2.addPoints(5);
    role3.addPoints(8);
    role4.addPoints(10);
  });

  it("should be initialized with undefined number", function () {
    expect(frame.number).toEqual(undefined);
  });

  it("has functionality to add roles", function() {
    frame.add(role1);
    expect(frame.roles[0]).toEqual(role1);
  });

  it("should have functionality to calculate the score of the frame", function () {
    frame.add(role1);
    frame.add(role2);
    frame.calculateScore();
    expect(frame.score).toEqual(8);
  });

  it("should allow for a maximum of 10 regular points per frame", function() {
    frame.add(role1);
    expect( function(){frame.add(role3); } ).toThrow(new Error("Max total regular points are 10"))
  });

  it("should add a second 0-point role automatically if the first role was 10 points (strike)", function() {
    frame.play(10);
    expect(frame.roles[1].points).toEqual(0);
  });

  it("is expected to record strike in bonus mode if strike is scored", function () {
    frame.play(10);
    expect(frame.bonusMode).toEqual("strike");
  });

  it("is expected to record spare in bonus mode if spare is scored", function () {
    frame.play(8,2);
    expect(frame.bonusMode).toEqual("spare");
  });
});
