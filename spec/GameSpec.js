
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
        expect( game.calculateTotal() ).toEqual(0);
      }
    )

    it('scores a non gutter game', function()
      {
        for( roll = 1; roll <= 20; roll++ )
          {
            game.hit(1);
          }
        expect( game.calculateTotal() ).toEqual(20);
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
        expect( game.calculateTotal() ).toEqual(26);
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
        expect( game.calculateTotal() ).toEqual(26);
      }
    )

    it('scores a perfect game', function()
      {

        for( roll = 1; roll <= 12; roll++ )
          {
            game.hit(10);
          }
        expect( game.calculateTotal() ).toEqual(300);
      }
    )

    it('scores mixed game', function()
      {
        game.rollScores = [6, 3, 7, 1, 8, 2, 7, 2, 10, 6, 2, 7, 3, 10, 8,0, 7, 3, 10];
        expect( game.calculateTotal() ).toEqual(135);
      }
    )

    it('plays a max number of rolls', function()
      {

        for( roll = 1; roll <= 18; roll++ )
          {
            game.hit(0);
          }
        game.hit(10);
        game.hit(10);
        game.hit(10);
        expect( game.calculateTotal() ).toEqual(30);
      }
    )

    it('raises an error if pins hit is greater than 10', function()
      {
        expect(function() {
          game.hit(11);
        }).toThrowError("Illegal hit: Only hit 0 to 10 pins");
      }
    )

  }
)
