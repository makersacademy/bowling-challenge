describe('Bowling', function () {

  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      expect(bowlingGame instanceof Bowling).toBe(true)
    })
  })

})
