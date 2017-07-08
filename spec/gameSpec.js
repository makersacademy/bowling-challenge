
describe("Game", function(){

  var game;

  beforeEach() {
    game = new Game();
  };

  describe("init", function(){
    it("will have an empty record of frames", function(){
      expect(frame._rolls.constructor).toBe(Array);
      expect(frame._rolls.length).toEqual(0);
    });
  });
  
});
