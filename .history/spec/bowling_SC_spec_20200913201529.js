
describe('bowlingGame', function() {

  beforeEach(function() {
    game = new bowlingGame();
  });

  it('can create new game', function() {
    let game = new bowlingGame();
    expect(game).toBeInstanceOf(bowlingGame);
  });

  it('can roll a gutter game', function() {
    for (let i = 0; i < 20; i++) {
      game.firstRoll(0);
    }
    expect(game.runningScore).toBe(0);
  });

  it('returns a total score', function() {
    for (let i = 0; i < 20; i++) {
      game.firstRoll(2);
    }
    expect(game.runningScore).toEqual(40);  
  });
  
  describe('roll combinations', function() {

    it('rolls 1s for each roll, totalling 20 at the end of a game', function() {
      for (let i = 0; i < 20; i++) {
        game.firstRoll(1);
      }
      expect(game.runningScore).toBe(20);
    });

  });

  describe('spare calculator', function() {

    it('returns the expected score when a spare is rolled', function() {
      game.firstRoll(5);
      game.secondRoll(5);
      game.firstRoll(3);
      game.spareCalc();
      for (let i = 0; i < 17; i++) {
        game.firstRoll(0);
      }
      expect(game.runningScore).toEqual(16);
    });

  });  

  describe('strike calculator', function() {

    it('returns the expected score when a strike is rolled', function() {
      game.firstRoll(10);
      game.firstRoll(2);
      game.secondRoll(2);
      game.strikeCalc(); 
      for (let i = 0; i < 17; i++) {
        game.firstRoll(0);
      } 
      expect(game.runningScore).toBe(18);
    });
  });


});