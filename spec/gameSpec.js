


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

  describe("#roll", function(){
    xit("will clear any old frames", function(){
      game._takeTurn();
      game._new();
      expect(game._frames.length).toBe(0);
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

 describe("#isFinished", function(){
   it("will return true when frames are equal or more than a game's def", function(){
     for(i=0; i <= 9; i++) {
      game._frames.push(new Frame(5, 5))
     };
     expect(game.isFinished()).toBeTruthy()
   });
   it("will return false when the game is extant", function(){
     for(i=0; i <= 3; i++) {
      game._frames.push(new Frame(5, 5))
     };
     expect(game.isFinished()).toBeFalsy()
   });
 });

 describe("#checkGame", function(){
   it("will throw en error if the game is over", function(){
     for(i=0; i <= 9; i++) {
      game._frames.push(new Frame(5, 5))
     };
     expect(function() {game.checkGame()}).toThrowError("Game's done!")
   });
   it("will throw nothing if the game is not over", function(){
     for(i=0; i <= 5; i++) {
      game._frames.push(new Frame(5, 5))
     };
     expect(function() {game.checkGame()}).not.toThrowError("Game's done!")
   });
 });




});
