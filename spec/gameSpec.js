describe("The Bowling Game", function() {
  var game;
});

beforeEach(function(){
  game = new Game();
});

 it('is initialised with a frames array', function() {
  expect(game.frames.length).toEqual(0);
});
