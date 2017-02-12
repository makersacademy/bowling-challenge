describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    spyOn(window, "startGame").and.callFake(function(){
      game._frames.push(frame);
    });
    spyOn(window, "addFrame").and.callFake(function(){
      let frame = new Frame
      frame._frameScore = 0
      game._frames.push(frame);
    });
  });

  describe ("when started", function() {
    it("adds a frame to the array of frames" , function(){
      startGame();
      expect(game._frames.length).toBe(1)
    });

    it("adds further frames to the array of frames", function(){
      startGame();
      addFrame();
      expect(game._frames.length).toBe(2)
    });

    it("allows a maximum of 10 frames to be added to a game", function(){
      for (let i = 0; i < 10; i++) {
      addFrame();
    }
      expect(game._frames.length).toBe(10)
    });
  });

  describe("during the game", function(){

    beforeEach(function() {
      frame = new Frame();
    });

    it("keeps the current score", function(){
      startGame();
      game.bowl(3);
      game.bowl(4);
      expect(game.viewCurrentScore()).toBe(7)
    });
  });

  // describe("at the end of the game", function(){
  //
  //   beforeEach(function() {
  //     frame = new Frame();
  //     for (var i = 0; i < 10; i++) {
  //       game.addFrame(frame)
  //     }
  //   });
  //
  //   it("notifies the player that the game is over", function(){
  //     frame.firstBowl(0)
  //     frame.secondBowl(0)
  //     expect(game.isComplete()).toBe(true)
  //   })
})
