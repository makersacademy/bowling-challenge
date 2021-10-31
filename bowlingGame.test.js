const { expect, it } = require('@jest/globals');
const BowlingGame = require('./bowlingGame')

describe(BowlingGame, () => {
  beforeEach(() => {
    this.game = new BowlingGame();
  });
  it('handles a gutter game', () => {
    for(i = 0; i < 20; i++) {
      this.game.roll(0);
    };
    expect(this.game.score()).toBe(0)
  });
  it('handles standard rolls (no strikes or spares)', () => {
    for(i = 0; i < 10; i++) { // rolls 10 frames of 3 and 5
      this.game.roll(3);
      this.game.roll(5);  
    };
    expect(this.game.score()).toBe(80);
  });
  it('handles a spare then a six then all gutters', () => {
    this.game.roll(3);
    this.game.roll(7);
    this.game.roll(6);
    
    this.game.roll(1);  
    
    expect(this.game.score()).toBe(23); // 3 + 7 + 6 + bonus 6
  });
});


