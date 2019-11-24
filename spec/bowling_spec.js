describe("Game", function() {
  var game;
  beforeEach(function() {
    game  = new Game();
  });

    it("add the pinsKnockedDown to the frame score", function(){
      game.roll()
      game.add()
      expect(game.frameScore).toEqual(3)
    });

    it("change the roll number ", function(){
      game.roll()
      expect(game.no_of_rolls).toEqual(1)
    });

  describe("Frame", function(){

   
    it("the frame changes after 2 Rolls", function() {
      game.currentFrame = 1
      game.roll()
      game.roll()
      expect(game.currentFrame).toEqual(2)
    });


    it("", function(){
      expect().toEqual()
    })

});

  describe("Frame", function(){
  
    it("Reset the number of pins per frame ", function(){
      
      expect().toEqual()
    })

  });

    // it("rolls add to the score", function(){
    //   game.rolls()
    //   expect(game.pinsKnockedDown).toContain(game.score)
    // })
});
