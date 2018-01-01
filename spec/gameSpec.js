describe('Game', () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game();
    frame = new Frame();
  });

  it('starts with 10 frames', () => {
    expect(game.frames.length).toBe(10);
  });

  it('allows player to take turns', () => {
    game.takeTurn(3)
    expect(game.frames[0].turnOne).toBe(3);
  });

  it('is able to get score for each frame', () => {
    game.takeTurn(3)
    game.takeTurn(4)
    expect(game.frames[0].score).toBe(7);
  });

  it('moves to next frame when current frame is complete', () => {
    game.takeTurn(3);
    game.takeTurn(3);
    game.takeTurn(3);
    expect(game.frames[1].turnOne).toBe(3)
  });

  it('moves to next frame when player gets strike', () => {
    game.takeTurn(10)
    expect(game.index).toBe(1);
  });

  it('can count the bonus score for spear frame', () => {
    game.takeTurn(5);
    game.takeTurn(5);
    game.takeTurn(3);
    console.log(game.frames)
    expect(game.frames[game.index - 1].score).toBe(13);
  });


  it('can count the bonus score for strike frame', () => {
    game.takeTurn(10);
    game.takeTurn(5);
    game.takeTurn(5);
    console.log(game.frames)
    expect(game.frames[game.index - 2].score).toBe(20);
  });

});