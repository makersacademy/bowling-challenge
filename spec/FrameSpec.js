describe("Frame", function() {
  var frame
  var game


  beforeEach(function() {
    frame = new Frame();
    game = new Game(frame);
    spyOn(Math, "floor").and.returnValue(5)

  });
it("should have 10 pins to knock down for each frame", function() {
  expect(frame.pins).toEqual(10)
});

it("should have allow player to bowl first bowl", function() {
  frame.firstBowl()
  expect(frame.bowl1).toEqual(5)
});

it("should allow player to bowl twice per game", function() {
  frame.firstBowl()
  frame.secondBowl()
  expect(frame.bowl2).toEqual(5)
});
})
