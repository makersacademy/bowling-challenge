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

describe('Pins', () =>{
	let game;

  beforeEach(() => {
    game = new Game
  });

  it('recorded score deducts number of pins', ()=>{
		game.record(3);
		expect(game.pins).toBe(7);
	});

})

describe('Frame', ()=>{
	let game;

  beforeEach(() => {
    game = new Game
  });

  it('strike advances frame', ()=>{
		game.frame = 4;
		game.record(10);
		expect(game.frame).toBe(5)
	});

  it('frame advances after 2 balls', ()=>{
  	game.frame = 4;
  	game.record(3);
  	game.record(5);
  	expect(game.frame).toBe(5);
  });

})

