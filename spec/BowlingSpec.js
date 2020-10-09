describe("Bowling", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Bowling();
    frame = []
    
  });
     
  frame = [5, 5]
  expect(game.isSpare(frame)).toBe(true)

});

