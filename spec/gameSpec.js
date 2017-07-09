
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



  describe("#new", function(){
    it("will clear any old frames", function(){
      game._takeTurn();
      game._new();
      expect(game._frames.length).toBe(0);
    });
  });



});
