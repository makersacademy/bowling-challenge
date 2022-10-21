const Game = require("./game");

describe('Game', () => {
  it('correctly calculates score', () => {
    const game = new Game; 
    
    const mock_frame_one = {
      bonus: 0,
      firstRoll: 5,
      secondRoll: 5,
      isAStrike: () => { return false },
      isASpare: () => { return true },
      getTotal: () => { return 13 }
    };

    const mock_frame_two = {
      bonus: 0,
      firstRoll: 3,
      secondRoll: 4,
      isAStrike: () => { return false },
      isASpare: () => { return false },
      getTotal: () => { return 7 }
    };

    game.frames.push(mock_frame_one);
    game.frames.push(mock_frame_two);
    game.calculateScore();
    expect(mock_frame_one.bonus).toBe(3);
    expect(game.total).toBe(20);
  });

  
});
