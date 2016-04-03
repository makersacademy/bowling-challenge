
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
        for( roll = 1; roll <= 20; roll++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(0);
      }
    )

    it('scores a non gutter game', function()
      {
        for( roll = 1; roll <= 20; roll++ )
          {
            game.hit(1);
          }
        expect( game.getTotal() ).toEqual(20);
      }
    )

    it('scores a spare', function()
      {
        game.hit(9);
        game.hit(1);
        game.hit(8);
        for( roll = 1; roll <= 17; roll++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(26);
      }
    )

    it('scores a strike', function()
      {
        game.hit(10);
        game.hit(3);
        game.hit(5);
        for( roll = 1; roll <= 17; roll++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(26);
      }
    )

    it('scores a perfect game', function()
      {

        for( roll = 1; roll <= 12; roll++ )
          {
            game.hit(10);
          }
        expect( game.getTotal() ).toEqual(300);
      }
    )

    it('scores mixed game', function()
      {
        game.rollScores = [6, 3, 7, 1, 8, 2, 7, 2, 10, 6, 2, 7, 3, 10, 8,0, 7, 3, 10];
        expect( game.getTotal() ).toEqual(135);
      }
    )

  }
)
