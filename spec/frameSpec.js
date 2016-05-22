describe("Frame", function() {
  var frame
  var game


  beforeEach(function() {
    frame = new Frame();
    game = new Game(frame);
    spyOn(Math, "floor").and.returnValue(5)

  });
it("Has 10 pins per frame", function() {
  expect(frame.pins).toEqual(10)
});

it("Allows player to play the first game", function() {
  frame.firstBowl()
  expect(frame.bowl1).toEqual(5)
});

it("Player plays 2 times per frame", function() {
  frame.firstBowl()
  frame.secondBowl()
  expect(frame.bowl2).toEqual(5)
});
})
