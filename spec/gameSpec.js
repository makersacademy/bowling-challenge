describe('Game', () => {
  var game;
  var frame;

  beforeEach( function() {
    class FrameClassDouble {
      constructor() {
        this.score = 0;
        this.bonus_rolls = 0;
      };
    }
    test = new FrameClassDouble();
    game = new Game();
    gameWithDoubles = new Game(FrameClassDouble);
  });

  it('is initialized with a score of zero', () => {
    expect(gameWithDoubles.score).toEqual(0);
  });
  it('by default is initialized with an array of 10 frame instances', () => {
    expect(gameWithDoubles.frames.length).toEqual(10);
    expect(gameWithDoubles.frames[0]).toEqual(test);
    expect(gameWithDoubles.frames[7]).toEqual(test);
  });
  it('by default is initialized 10 distinct frame instances', () => {
    expect(game.frames[0]).not.toBe(game.frames[1]);
  });
  it('random', () => {
  });

  describe('returnFrameScores', () => {
    it('prints out the score for all 10 frames', () => {
      expect(gameWithDoubles.returnFrameScores()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    });
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
