describe('Player', function() {

  beforeEach(function() {
    player = new Player();
    game = jasmine.createSpyObj('game', ['roll', 'runningScore'])
    player.game = game;
  });

  it('can be assigned a game', function() {
    expect(player.game).toEqual(game);
  });

  it('can be instantiated with a name if desired', function() {
    namedPlayer = new Player("Bob");
    expect(namedPlayer.name).toEqual("Bob");
  });

  it('can be given a name', function() {
    player.name = "James";
    expect(player.name).toEqual("James");
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