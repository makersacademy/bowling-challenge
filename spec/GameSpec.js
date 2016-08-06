
describe('Game', function(){
  var game;

  it('starts a game in round 1', function(){
    game = new Game();
    expect(game.getRound()).toEqual(1);
  });
});
