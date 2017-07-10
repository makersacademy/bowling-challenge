


describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("init", function(){
    it("will have an empty record of frames", function(){
      expect(game._frames.constructor).toBe(Array);
      expect(game._frames.length).toEqual(0);
    });
    it("will have a max game length", function(){
      expect(game._gameSpan).toEqual(10);
    });
  });

  describe("#new", function(){
    xit("will clear any old frames", function(){
      game._takeTurn();
      game._new();
      expect(game._frames.length).toBe(0);
    });
  });

  describe("#checkRollIsLegal", function(){
    it("will throw error if roll is non-legit", function(){
    var illegalFrame;
    illegalFrame = new Frame(5, 20);
    expect(function() {game.checkRollIsLegal(illegalFrame)}).toThrowError("That cannot be!");
  });
});


});
