describe("Scorecard", function () {
  beforeEach(function () {
    game = new Game();
  });

  it('should return 0 for a game of all zeros', () => {
    for(let i=0;i<20;i++){ //for 20 rolls
      game.roll(0); //roll a 0
    }
    expect(game.score).toEqual(0); //check that the score = 0
  })

  it('should return 20 for game of all ones', () => {
    rollMany(20, 1); //roll 20 1's
    expect(game.score).toEqual(20); //check if the score = 20
  })
  
  it('handles a spare with correct bonus', () => {
    //roll a spare
    game.roll(5); 
    game.roll(5);
    game.roll(1); //roll a 1
    rollMany(17, 0); //roll 17 0's
    expect(game.score).toEqual(12); //check that the score = 12
  })

  it('handles a strike with correct bonus', () => {
    game.roll(10); //roll a strike
    game.roll(1); //roll a 1
    game.roll(1); //roll a 1
    rollMany(17, 0); //roll 17 0's
    expect(game.score).toEqual(14); //check that the score = 14
})

  function rollMany(rolls, pins){
    for(let i=0;i<rolls;i++){ //for number of rolls specified
        game.roll(pins); //roll the number of pins specified
    }
  }
});