describe ('Game', function () {

 });
  beforeEach(function () {
    game = new Game();
  });
   describe ('A bowling game', function () {
    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })
  })
