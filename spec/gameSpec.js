describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  describe("Creation", function(){
    it("has a maximum of 10 frames", function(){
      expect(game.MAX_FRAMES).toEqual(10);
    })
    it("has an initial frame count of 1", function(){
      expect(game.frameCount).toEqual(1);
    })
    it("has an initial score of 0", function(){
      expect(game.score).toEqual(0);
    })
    it("has an initial empty points array", function(){
      expect(game.points).toEqual([]);
    })
  })






})
