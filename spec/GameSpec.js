describe('Game', () => {

  let game;
  
  beforeEach(() => {
    game = new Game;
  });

  it('.score() tracks the total score', () => {
    expect(game.getScore()).toEqual(0);
  });

  it('.currentFrame() tracks the current frame', () => {
    expect(game.getCurrentFrame()).toEqual(1);
  });

  it('.getCurrentRoll() tracks the current roll', () => {
    expect(game.getCurrentRoll()).toEqual(1);
  });

});
