const Game = require('../src/game');

describe('Initializer', () => {
  let game;

  beforeEach(() => {
    game = new Game
  });

  it('start at 10 pins', () => {
    expect(game.pins).toBe(10);
  });

  it('start at frame 1', ()=>{
  	expect(game.frame).toBe(1);
  });

  it('start with score of 0', ()=>{
  	expect(game.score).toBe(0);
  })
})

describe('Frame', ()=>{
	  let game;

  beforeEach(() => {
    game = new Game
  });

	it('expect recorded score to deduct number of pins', ()=>{
	game.record(3);
	expect(game.pins).toBe(7);
});
})