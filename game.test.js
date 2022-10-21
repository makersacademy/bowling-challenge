Game = require('./game');

describe('Bowling', () => {
  it('calculates score after 10 frames - zero points - gutter game', () => {
    const game = new Game();
    const score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].forEach(element => {game.roll(element)});
    expect(game.calculate()).toEqual(0);
  });
  it('calculates score after 10 frames, no spare or strike bonus', () => {
    const game = new Game();
    const score = [5,3,3,2,6,2,4,5,4,5,4,5,5,2,3,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(78);
  });
  it('calculates spare bonus for two rounds', () => {
    const game = new Game();
    const score = [5,5,3,2,6,4,4,5,4,5,4,5,5,2,3,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(89);
  });
  it('calculates strike bonus for two rounds', () => {
    const game = new Game();
    const score = [5,3,10,6,2,4,5,4,5,10,5,2,3,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(99);
  });
  it('calculates strike and spare bonuses', () => {
    const game = new Game();
    const score = [5,3,10,3,3,5,5,4,5,10,6,3,5,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(113);
  });
  it('calculates strike and spare bonuses - consecutively - variation 1', () => {
    const game = new Game();
    const score = [5,5,10,3,3,4,5,4,5,10,6,3,5,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(120);
  });
  it('calculates strike and spare bonuses - consecutively - variation 2', () => {
    const game = new Game();
    const score = [10,5,5,3,3,4,5,4,5,10,6,3,5,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(117);
  });
  it('calculates strike and spare bonuses - consecutively - variation 3', () => {
    const game = new Game();
    const score = [10,10,5,5,4,5,5,5,10,6,3,5,5,7,2,3,3].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(148);
  });
  it('calculates perfect score', () => {
    const game = new Game();
    const score = [10,10,10,10,10,10,10,10,10,10,10,10].forEach((element) => {game.roll(element)});
    expect(game.calculate()).toEqual(300);
  });
});