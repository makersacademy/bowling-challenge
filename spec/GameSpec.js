describe('Game', () => {

  let game;

  beforeEach(() => { game = new Game; });

  // Getters

  it('.getScore() returns the total score', () => {
    expect(game.getScore()).toEqual(0);
  });

  it('.getCurrentFrame() returns the current frame', () => {
    expect(game.getCurrentFrame()).toEqual(1);
  });

  it('.getCurrentRoll() returns the current roll', () => {
    expect(game.getCurrentRoll()).toEqual(1);
  });

  it('.getBonus() tracks any bonus gained from the previous frame', () => {
    expect(game.getBonus()).toEqual(0);
  });

  // Setters

  it('.newRoll() starts the next roll in the current frame', () => {
    game.newRoll();
    expect(game.getCurrentRoll()).toEqual(2);
  });

  it('.newFrame() starts the next frame and resets currentRoll to 1', () => {
    game.newRoll();
    game.newFrame();
    expect(game.getCurrentFrame()).toEqual(2);
    expect(game.getCurrentRoll()).toEqual(1);
  });

  it('.addScore(arg) adds a given number to the total score', () => {
    game.addScore(5);
    expect(game.getScore()).toEqual(5);
  });

  it('.addKnocks(arg) records the number of knocked pins and proceeds to next roll', () => {
    game.addKnocks(5);
    expect(game.getScore()).toEqual(5);
    expect(game.getCurrentRoll()).toEqual(2);
  });

  // 3 possible outcomes in a given frame

  describe('when player does not strike in a given frame', () => {

  });

  describe('when player strikes in the first roll of a frame', () => {

  });

  describe('when player has a spare within two rolls of a given frame', () => {

  });

});
