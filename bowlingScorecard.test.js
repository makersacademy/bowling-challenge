const BowlingScorecard = require('./bowlingScorecard')

describe('BowlingScorecard', () => {
  it('creates a game table and returns a tolal score', () => {
    const game = new BowlingScorecard;
    game.userInput(1); //f0
    game.populateGameArray();
    game.userInput(4);
    game.populateGameArray();
    game.userInput(4);  //f1
    game.populateGameArray();
    game.userInput(5);
    game.populateGameArray();
    game.userInput(6);  //f2
    game.populateGameArray();
    game.userInput(4);
    game.populateGameArray();
    game.userInput(5);  //f3
    game.populateGameArray();
    game.userInput(5);
    game.populateGameArray();
    game.userInput(10); //f4
    game.populateGameArray();
    game.userInput(0); //f5
    game.populateGameArray();
    game.userInput(1);
    game.populateGameArray();
    game.userInput(7);  //f6
    game.populateGameArray();
    game.userInput(3);
    game.populateGameArray();
    game.userInput(6); //f7
    game.populateGameArray();
    game.userInput(4);
    game.populateGameArray();
    game.userInput(10);   //f8
    game.populateGameArray();
    game.userInput(2);  //f9
    game.populateGameArray();
    game.userInput(8) ;
    game.populateGameArray();
    game.userInput(6);
    game.populateGameArray();
    game.scorecard();
    expect(game.getGameArray()).toEqual([ [ 1, 4 ], [ 4, 5 ],
        [ 6, 4 ], [ 5, 5 ],
        [ 10 ],   [ 0, 1 ],
        [ 7, 3 ], [ 6, 4 ],
        [ 10 ],   [ 2, 8, 6 ]]);
    expect(game.getScore()).toBe(133);
  });

});