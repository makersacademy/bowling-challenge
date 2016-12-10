describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  describe("Creation", function(){
    it("has a maximum of 10 frames", function(){
      expect(game.MAX_FRAMES).toEqual(10);
    })
  })






})
