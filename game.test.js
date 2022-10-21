const Game = require('./game');
const Frame = require('./frame');

describe('Game', () => {
  it('Adds frame to frames', () => {
    let frame1 = new Frame();
    frame1.addRoll(2);
    frame1.addRoll(4);
    let game = new Game();
    game.addFrame(frame1);
    expect(game.frames.length).toEqual(1);
    expect(game.frames[0].roll1).toEqual(2);
  });

  it('Adds frame to frames', () => {
    let frame1 = new Frame();
    frame1.addRoll(2);
    frame1.addRoll(4);
    let game = new Game();
    game.addFrame(frame1);
    expect(game.frames.length).toEqual(1);
    expect(game.frames[0].roll1).toEqual(2);
  });

  it('totals the score', () => {
    let frame1 = new Frame();
    frame1.addRoll(2);
    frame1.addRoll(4);
    let frame2 = new Frame();
    frame2.addRoll(4);
    frame2.addRoll(4);
    let game = new Game();
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.frames.length).toEqual(2);
    expect(game.score()).toEqual(14);
  });

  it('checks double counter and adds points for strike', () => {
    let frame1 = new Frame();
    frame1.addRoll(10);
    let game = new Game();
    game.addFrame(frame1);
    game.addFrame(frame1);
    expect(game.score()).toEqual(30);
    expect(game.strikeCount).toEqual(2);
  });

  it('checks double counter and adds points for doubles', () => {
    let frame1 = new Frame();
    frame1.addRoll(10);
    let game = new Game();
    game.addFrame(frame1);
    game.addFrame(frame1);
    game.addFrame(frame1);
    expect(game.score()).toEqual(60);
    expect(game.strikeCount).toEqual(3);
  });

  it('spare behaviour', () => {
    let frame1 = new Frame();
    frame1.addRoll(6);
    frame1.addRoll(4);
    let frame2 = new Frame();
    frame2.addRoll(4);
    frame2.addRoll(4);
    let game = new Game();
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.score()).toEqual(22);
  });

  xit('checks the strike counter', () => {
    let frame1 = new Frame();
    frame1.addRoll(10);
    let frame2 = new Frame();
    frame2.addRoll(4);
    frame2.addRoll(4);
    let game = new Game();
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.score()).toEqual(36);
    expect(game.strikeCount).toEqual(0);
  });
});
