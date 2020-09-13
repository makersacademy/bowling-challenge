
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
      game.roll(0);
    }
    expect(game.score()).toBe(0);

  });
  
  describe('roll combinations', function() {

    it('rolls 1s for each roll, totalling 20 at the end of a game', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toBe(20);
    });

    it('returns the expected score when a spare is rolled', function() {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      for (let i = 0; i < 17; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(16);
    });

  });
  
  describe('score', function() {

    it('returns a total score', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(2);
      }
      expect(game.score()).toEqual(40);  
    });

    it 

  });


});