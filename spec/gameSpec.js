describe('Game', () => {

  beforeEach( function() {
    game = new Game();
  });

  it('is initialized with a score of zero', () => {
    expect(game.score).toEqual(0);
  });

  it('is initialized with an array of 10 frame instances', () => {
    expect(game.frames.length).toEqual(10);
    expect(game.frames[0]).toEqual(new Frame());
    expect(game.frames[7]).toEqual(new Frame());
  });

  xdescribe('getRoll', () => {
    it('returns zero for a gutter game', () => {
    });
  });

  xdescribe('play', () => {
    it('returns zero for a gutter game', () => {
    });
    it('returns the correct score for a mix of score, strikes and spares', () => {
    });
    it('returns 300 for a perfect game', () => {
    });
  });

});
