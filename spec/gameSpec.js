describe("The Bowling Game", function() {
  var game;
});

beforeEach(function(){
  game = new Game();
});

 it('is initialised with a frames array', function() {
  expect(game.frames.length).toEqual(0);
});

  it('is initialised with a frame object set to frame', function() {
    expect(game.frame()).toEqual(jasmine.objectContaining({}));
  });
