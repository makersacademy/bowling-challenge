const Game = require('./game.js')

describe('Game', () => {
  it("adds a frame to the list of frames", () => {
    const game = new Game
    game.addFrame(2,3);
    expect(game.frames.length).toEqual(1);
  });

  // it("does not allow more than 9 'normal' frames", () => {
  //   const game = new Game
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   game.addFrame(2,3);
  //   expect(game.frames.length).toEqual(10);
  //   expect(game.addFrame(2,3)).toEqual()});

  it("records correct perfect game score", () => {
    const game = new Game
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    game.addFrame(10,0);
    expect(game.frames.length).toEqual(10);
    expect(game.score()).toEqual(270);
  });

  // it("records correct game score", () => {
  //   const game = new Game
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(10,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   expect(game.frames.length).toEqual(10);
  //   expect(game.score()).toEqual(210);
  // });

  // it("records gutter game", () => {
  //   const game = new Game
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   expect(game.frames.length).toEqual(10);
  //   expect(game.score()).toEqual(0);
  // });

  // it("records gutter game", () => {
  //   const game = new Game
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(7,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,2);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   game.addFrame(0,0);
  //   expect(game.frames.length).toEqual(10);
  //   expect(game.score()).toEqual(9);
  // });
});
