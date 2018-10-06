describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    score = jasmine.createSpy('score',['roll', 'total'])
  });

  describe('frame', function() {
    it('players can get total of a frame', function(){
      expect(game.totalFrame(2,3)).toEqual(5)
    });

    it('raises an error if user inserts numbers that totals > 10', function() {
      expect(function() {game.totalFrame(10, 2)}).toThrow('Cannot score more than 10 per frame')
    });
  });

  // describe('when rollone = 10', function() {
  //   it('user cannot input rolltwo', function() {
  //
  //   });
  // });
});
