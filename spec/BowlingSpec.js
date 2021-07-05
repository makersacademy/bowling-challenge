const Bowling = require('../lib/Bowling.js');

describe('Bowling', () => {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  it('Initial score is 0', () => {
    expect(game.score()).toEqual(0);
  });

  it('Game has frames', () => {
    expect(game.frames).toEqual([]);
  });

  it('Roll is stored in the current frame', () => {
    game.roll(5);

    expect(game.currentFrame).toContain(5);
  });

  it('Frame score is a sum of the rolls', () => {
    game.roll(4);
    game.roll(3);

    expect(game.score()).toEqual(7);
  });

  it('Frame is complete and stored', () => {
    game.roll(4);
    game.roll(6);

    expect(game.frames).toContain([4, 6]);
  });

  it('Current score after 2 completed frames is 15', () => {
    game.roll(4);
    game.roll(2);
    game.roll(3);
    game.roll(6);

    expect(game.score()).toEqual(15);
  });

  it('Player scores strike, next 2 rolls are added as bonus', () => {
    game.roll(10);
    game.roll(2);
    game.roll(3);

    expect(game.score()).toEqual(20);
  });

  it('Player scores spare, next 1 roll is added as bonus', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(3);

    expect(game.score()).toEqual(19);
  });

  it('Player scores 3 strikes and 2 regular rolls', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(3);
    game.roll(2);

    expect(game.score()).toEqual(75);
  });

  it('Game ends after 10 frames', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(2);
    }

    expect(game.gameOver()).toEqual(true);
  });

  it('10 strikes is a Perfect Game', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    console.log(' ');
    console.log('roll8 - ' + game.score());
    game.roll(10);
    console.log('roll9 - ' + game.score());
    game.roll(10);
    console.log('roll10 - ' + game.score());
    game.roll(10);
    console.log('roll11 - ' + game.score());
    game.roll(10);
    console.log('roll12 - ' + game.score());
    console.log(game.frames);

    expect(game.score()).toEqual(300);
    expect(game.perfectGame()).toEqual(true);
  });
});
