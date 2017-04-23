describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe("framesLeft", function(){
    it("Should begin at 10", function() {
      expect(game.framesLeft).toEqual(10);
    });
  });

  describe("play", function(){
    it("moves the current frame to frames array", function() {
      var frame = game._frame
      for(i = 1; i <= 2; i++) {
        game.play(4);
      };
      expect(game.frames).toContain(frame);
    });

    it("changes frame once played twice", function(){
      for(i = 1; i <= 2; i++) {
        game.play(4);
      }
      expect(game.currentFrame).toEqual(2);
    })
  });

  describe("bonusCalculator", function() {
    it("adds both bowls to score is strike has taken place", function() {
      game.play(10);
      game.play(1);
      game.play(2);
      expect(game.frames[0].score).toEqual(13);
    })

    it("adds three bowls if three strikes take place", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      expect(game.frames[0].score).toEqual(30);
    })

    it("adds first bowl to score is spare has taken place", function() {
      game.play(9);
      game.play(1);
      game.play(5);
      game.play(1);
      expect(game.frames[0].score).toEqual(15);
    });
  });
  describe("finalFrame", function() {
    it("should change the number of rolls left to 3", function() {
      for(i = 1;i <= 10; i++) {
        game.play(10);
      }
      expect(game._frame.rollsLeft).toEqual(3);
    })
  })
});
