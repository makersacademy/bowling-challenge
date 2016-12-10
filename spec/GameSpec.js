describe("Game", function(){
  var game
  beforeEach(function(){
    game = new Game();
  });

it("should have an array to store scores", function(){
  game.startGame();
  expect(game.scoreArray).toEqual([]);
});

it("should give you 10 frames remaining when you start the game", function(){
  game.startGame();
  expect(game.numberOfFramesRemaining).toEqual(10);
});



});
