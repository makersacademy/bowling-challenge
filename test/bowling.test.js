const Bowling = require('../lib/bowling')

describe('Bowling', () => {
	it('takes the players roll and returns a score', () => {
    const game = new Bowling([[1,3], [2,2], [5,4], [1,3], [1,3], [1,3], [1,3], [1,3], [1,3], [1,3]]);
    expect(game.sumTotal()).toEqual(45)
  });

  it('checks the current turn to see if a strike was rolled', () => {
    
  })
});