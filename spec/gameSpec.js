
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
  });

  describe("#takeTurn", function(){
    it("will add a frame", function(){
      expect(game._frames.length).toBe(0)
      game._takeTurn();
      expect(game._frames[0].constructor).toBe(Frame);
    });
  });

  describe("#getTotal",function(){
    it("will sum all frame scores", function(){
      game._takeTurn();
      game._takeTurn();
      expect(game._getTotal()).toEqual(30);
    });
  });

  describe("#playRound", function(){
    it("will play ten frames", function(){
      game.playRound();
      expect(game._frames.length).toBe(10)
    });
  });

  describe("#new", function(){
    it("will clear any old frames", function(){
      game._takeTurn();
      game._new();
      expect(game._frames.length).toBe(0);
    });
  });



});
