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
    for(i=0; i<16; i++){
      this.game.roll(0);
    };
    
    expect(this.game.score()).toBe(23); // 3 + 7 + 6 + bonus 6
  });
  it('handles a strike followed by standard rolls', () => {
    this.game.roll(10);
    this.game.roll(3);
    this.game.roll(2);
    for(i=0; i<16; i++){
      this.game.roll(0);
    };

    expect(this.game.score()).toBe(20);
  });
  it('handles two strikes in a row', () => {
    this.game.roll(10);
    this.game.roll(10);
    this.game.roll(4);
    this.game.roll(3);
    for(i=0; i<14; i++){
      this.game.roll(0);
    };

    expect(this.game.score()).toBe(10 + 14 + 10 + 7 + 4 + 3);
  });
  it('handles mix of strikes and spares', () => {
    this.game.roll(10);
    this.game.roll(5);
    this.game.roll(5);
    this.game.roll(10);
    this.game.roll(5);
    this.game.roll(3);
    for(i=0; i<12; i++){
      this.game.roll(0);
    };
    expect(this.game.score()).toBe(66);
  }); 
  it('handles perfect game', () => {
    for(i = 0; i < 12; i++){
      this.game.roll(10)
    };
    expect(this.game.score()).toBe(300);
    
  });
  it("doesn't let you roll more than 10", () => {
    expect(() => {
      this.game.roll(12)
    }).toThrowError('Invalid Roll')
  });
  it("doesn't let you knock down more than 10 in a frame", () => {
    expect(() => {
      this.game.roll(5);
      this.game.roll(6);
    }).toThrowError('Invalid Roll')
  });
});


