
describe('bowlingGame', function() {

  beforeEach(() => {
    game = new bowlingGame();
  });

  it('can create new game', function() {
    let game = new bowlingGame();

  });

  it('can roll a gutter game', function() {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);

  });
  
  describe('roll combinations', function() {

    it('rolls 1s for each roll, totalling 20 at the end of a game', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score).toBe(20);
    });

  });
  
  describe('total scores expected', function() {

    it('returns a total score', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(2);
      }
      expect(game.total_score()).toEqual(40);  
    });

  });


});