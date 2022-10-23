const Game = require("./game");

describe('Game', () => {
  it('correctly calculates score', () => {
    const game = new Game; 

    // Example of Perfect Game where the score must be 300
    
    const mock_frame_1 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_1.firstRoll + mock_frame_1.secondRoll + mock_frame_1.bonus }
    };

    const mock_frame_2 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_2.firstRoll + mock_frame_2.secondRoll + mock_frame_2.bonus }
    };

    const mock_frame_3 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_3.firstRoll + mock_frame_3.secondRoll + mock_frame_3.bonus }
    };

    const mock_frame_4 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_4.firstRoll + mock_frame_4.secondRoll + mock_frame_4.bonus }
    };

    const mock_frame_5 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_5.firstRoll + mock_frame_5.secondRoll + mock_frame_5.bonus }
    };

    const mock_frame_6 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_6.firstRoll + mock_frame_6.secondRoll + mock_frame_6.bonus }
    };

    const mock_frame_7 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_7.firstRoll + mock_frame_7.secondRoll + mock_frame_7.bonus }
    };

    const mock_frame_8 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_8.firstRoll + mock_frame_8.secondRoll + mock_frame_8.bonus }
    };

    const mock_frame_9 = {
      bonus: 0,
      firstRoll: 10,
      secondRoll: 0,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_9.firstRoll + mock_frame_9.secondRoll + mock_frame_9.bonus }
    };

    const mock_frame_10 = {
      bonus: 10,
      firstRoll: 10,
      secondRoll: 10,
      isAStrike: () => { return true },
      isASpare: () => { return false },
      getTotal: () => { return mock_frame_10.firstRoll + mock_frame_10.secondRoll + mock_frame_10.bonus }
    };

    game.frames.push(mock_frame_1);
    game.frames.push(mock_frame_2);
    game.frames.push(mock_frame_3);
    game.frames.push(mock_frame_4);
    game.frames.push(mock_frame_5);
    game.frames.push(mock_frame_6);
    game.frames.push(mock_frame_7);
    game.frames.push(mock_frame_8);
    game.frames.push(mock_frame_9);
    game.frames.push(mock_frame_10);
    game.calculateBonus();
    game.calculateTotalScore();
    expect(mock_frame_1.bonus).toBe(20);
    expect(game.total).toBe(300);
  });
});
