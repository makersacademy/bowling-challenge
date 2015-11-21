describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("#roll", function() {
    it("Returns a number between 0 and 10", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      expect(game.roll()).toEqual(5);
    })
  })

})
