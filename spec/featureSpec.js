 'Use strict';


describe('bowling scorecard', function() {
  beforeEach(function() {
    game = new Game();
  });

  it('updates last frame if strike (1 roll)', function() {
    game.bowl(10);
    game.bowl(6);
    expect(game._previousFrame()._score).toEqual(16);
  });

  it('updates last frame if strike (2 rolls)', function() {
    game.bowl(10);
    game.bowl(6);
    game.bowl(3);
    expect(game._frameBeforeLast()._score).toEqual(19);
  });

  it('updates last frame if spare', function() {
    game.bowl(4);
    game.bowl(6);
    game.bowl(6);
    expect(game._previousFrame()._score).toEqual(16);
  });

  it('updates frame before last if 2 consecutive strikes', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(6);
    expect(game._frameBeforeLast()._score).toEqual(26);
  });
});