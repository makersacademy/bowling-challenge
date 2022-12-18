const Frame = require('./frame');
const Game = require('./game');

describe('Game class', () => {
  it('returns the score for a gutter game', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(0);
    frame1.addRoll(0);

    const frame2 = new Frame;
    frame2.addRoll(0);
    frame2.addRoll(0);

    const frame3 = new Frame;
    frame3.addRoll(0);
    frame3.addRoll(0);

    const frame4 = new Frame;
    frame4.addRoll(0);
    frame4.addRoll(0);

    const frame5 = new Frame;
    frame5.addRoll(0);
    frame5.addRoll(0);

    const frame6 = new Frame;
    frame6.addRoll(0);
    frame6.addRoll(0);

    const frame7 = new Frame;
    frame7.addRoll(0);
    frame7.addRoll(0);

    const frame8 = new Frame;
    frame8.addRoll(0);
    frame8.addRoll(0);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(0);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.totalScore()).toEqual(0);
  })

  it('returns the score for a game with no strikes or spares', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(4);
    frame3.addRoll(5);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(0);
    frame6.addRoll(0);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.totalScore()).toEqual((55));
  })

  it('returns the score for a game with 2 strikes (not in 10th frame)', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(10);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(10);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.totalScore()).toEqual((83));
  })

  it('returns the score for a game with 2 spares (not in 10th frame)', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(5);
    frame3.addRoll(5);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(4);
    frame6.addRoll(6);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.totalScore()).toEqual((76));
  })
})