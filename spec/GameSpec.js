describe('Bowling Game', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('the diferent scenarios', function(){
    it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function() {
      rolls(0, 20);
      expect(game.score()).toEqual(0);
    });

    it('Scores 20 points in a play when 1 pin has been down each roll', function() {
      rolls(1, 20);
      expect(game.score()).toEqual(20);
    });

    it('the score is correct after a spare, the bonus is correctly calculated', function(){
      game.play(6);
      game.play(4);
      game.play(3);
      rolls(0,17);
      expect(game.score()).toEqual(16);
    });

    it('the score is correct after a spare, the bonus is correctly calculate', function(){
      game.play(10);
      game.play(2);
      game.play(4);
      rolls(0,17);
      expect(game.score()).toEqual(22);
    });

    it('the score for the perfect game is 300 points', function(){
      rolls(10,12);
      expect(game.score()).toEqual(300);
    });

    it('the score for a ramdom game is correct', function(){
      game.play(3);
      game.play(6);
      game.play(10);
      game.play(10)
      game.play(4);
      game.play(6);
      game.play(2);
      rolls(4,13);
      expect(game.score()).toEqual(111);
    });

  });//second describe end.

  function rolls(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.play(pins);
    };
  };
  //first describe end.
});
