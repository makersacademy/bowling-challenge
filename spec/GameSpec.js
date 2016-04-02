
describe('Game', function()
  {
    var game;

    beforeEach(function()
      {
        game = new Game();
      }
    )

    it('scores a gutter game', function()
      {
        for(frame = 1; frame < 11; frame++ )
        {
          game.hit(0);
        }
        expect( game.totalScore() ).toEqual(0);
      }
    )
  }
)
