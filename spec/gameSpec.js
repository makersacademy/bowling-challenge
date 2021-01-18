describe('Game', () => {
  var game;
  var frame;

  beforeEach( function() {
    // frameDouble = jasmine.createSpyObj('fake frame',['score'])
    exampleFrame = new(Frame);
    game = new Game(frame);
  });

  it('is initialized with a score of zero', () => {
    expect(game.score).toEqual(0);
  });

  it('is initialized with an array of 10 frame instances', () => {
    expect(game.frames.length).toEqual(10);
    expect(game.frames[0]).toEqual(exampleFrame);
    expect(game.frames[7]).toEqual(exampleFrame);
  });
  it('is initialized 10 distinct frame instances', () => {
    expect(game.frames[0]).not.toBe(game.frames[1]);
  });

  describe('returnFrameScores', () => {
    it('prints out the score for all 10 frames', () => {
      spyOn(exampleFrame, 'score').and.returnValue(5);
      game.returnFrameScores()
      expect(game.returnFrameScores()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
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
