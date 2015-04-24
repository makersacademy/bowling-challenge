describe('Player', function() {

  beforeEach(function() {
    player = new Player();
    game = jasmine.createSpyObj('game', ['roll', 'runningScore'])
    player.game = game;
  });

  it('can be assigned a game', function() {
    expect(player.game).toEqual(game);
  });

  it('can roll rolls', function() {
    player.roll(3);
    expect(game.roll).toHaveBeenCalledWith(3);
  });

  it('has a score', function() {
    player.score();
    expect(game.runningScore).toHaveBeenCalled();
  });

});