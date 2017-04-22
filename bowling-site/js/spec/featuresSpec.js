// As a slightly sub-par player
// So that I can lose to all my mates
// I want to be able to play a gutter game

describe('Features',function(){
  var maximumThrows
  beforeEach(function() {
    maximumThrows = 21;
    game = new Game();
  });

  describe('Gutter Game', function(){
    it('Final Score is 0 after a gutter game of 20 throws',function(){
        for (i = 0; i < maximumThrows; i++) {
          console.log(i);
          game.throwBall(0);
        }
        expect(game.finalScore).toEqual(0);
      });
    });
});
