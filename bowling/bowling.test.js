const { test } = require('node:test');
const Scorecard = require('./bowling');

describe('scorecard methods', () => {
  it('returns a score of 0 at start of game ', () => {
    player1 = new Scorecard;
    expect(player1.calculateScore()).toBe(0);
  });
  it('returns a score of 9 after 1 frame', () => {
    player1 = new Scorecard;
    player1.addFrame(5, 4)
    expect(player1.calculateScore()).toBe(9);
  });
  it('adds the first roll of the next frame if current frame is 10+', () => {
    player1 = new Scorecard;
    player1.addFrame(5, 5)
    player1.addFrame(4, 5)
    expect(player1.calculateScore()).toBe(23);
  });
  it('Does not allow user to add 10+ frames ', () => {
    player1 = new Scorecard;
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10, 10)
    expect(player1.addFrame(10, 10, 10)).toBe('This game has been completed already.');
  });
  it('is able to count a Perfect Game ', () => {
    player1 = new Scorecard;
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10)
    player1.addFrame(10, 10, 10)
    expect(player1.calculateScore()).toBe(300);
  });
  it('is able to count a Gutter Game ', () => {
    player1 = new Scorecard;
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    player1.addFrame(0, 0)
    expect(player1.calculateScore()).toBe(0);
  });

});