describe("Game", function(){

  beforeEach(function(){
    game = new Game
  });

  var game

  it("1. When I start the game I have score zero", function(){
      expect(game.score).toEqual(0);
    });

  it("2. When I start the game the frame number is zero", function(){
      expect(game.currentFrame).toEqual([]);
    });

  it("3. When I start the game, expect 10 pins", function(){
      expect(game.pinCount).toEqual(10);
    });

  it("4. I start a game with the first throw", function(){
      expect(game.firstThrow).toEqual(1);
    });

  it("5. Expect that we had two throw after second throw", function(){
      game.rollBall(1);
      expect(game.firstThrow).toEqual(2);
    });

  it("6. Expect that our result will be 1 and 1 after we twice hit one pin", function(){
      game.rollBall(1);
      game.rollBall(1);
      expect(game.scoreCard).toEqual([[1,1]]);
    });

  it("7. Expect that after we hit 3 pins, 7 pins are remained", function(){
      game.rollBall(3);
      expect(game.pinCount).toEqual(7);
    });

  it("8. You can't hit more than 10 pins", function(){
      expect(function() {game.rollBall(11)} ).toThrow(new Error("You can't hit more than 10 pins"));
    });

  it("9. We expect get 8 points in case of the ordinary game", function(){
      game.rollBall(3);
      game.rollBall(5);
      expect(game.score).toEqual(8);
    });

  it("10. Spare shouldn't add any points to the score in the current game", function(){
      game.rollBall(1);
      game.rollBall(9);
      expect(game.score).toEqual(0);
    });

  it("11. Expect get total 19 points after first Spare", function(){
      game.rollBall(9);
      game.rollBall(1);
      game.rollBall(4);
      game.rollBall(1);
      expect(game.score).toEqual(19);
    });

  it("12. The frame should change after the second throw if the first wasn't a strike", function(){
      game.rollBall(5);
      game.rollBall(5);
      expect(game.frameNumber()).toEqual(1);
    });

    it("13. It changes frame when you roll a strike", function(){
      game.rollBall(10);
      expect(game.frameNumber()).toEqual(1);
    });

  it("14. It should not give bonus points when a strike is rolled in current frame", function(){
      game.rollBall(10);
      expect(game.score).toEqual(0);
    });

  it("15. Adds points for two throws after a strike to the total score", function(){
      game.rollBall(10);
      game.rollBall(4);
      game.rollBall(4);
      expect(game.score).toEqual(26);
    });

  it("16. Adds points for two throws after two strikes to the total score", function(){
      game.rollBall(10);
      game.rollBall(10);
      game.rollBall(2);
      game.rollBall(1);
      expect(game.score).toEqual(25);
    });

  it("17. Adds points for two throws after three strikes to the total score", function(){
      game.rollBall(10);
      game.rollBall(10);
      game.rollBall(10);
      expect(game.score).toEqual(30);
    });

  it("18. Looser game!! it works", function () {
        for (var i = 0; i < 20; i++) {
          game.rollBall(0);
        };
        expect(game.score).toEqual(0);
    });

  it("19. Average game, without strikes and spares", function(){
        for (var i = 0; i < 20; i++) {
          game.rollBall(4);
        };
        expect(game.score).toEqual(80);
    });

  it("20. Best result - 300 points", function(){
        for (var i = 0; i < 12; i++) {
          game.rollBall(10);
        };
        expect(game.score).toEqual(300);
    });


   it("21. Game ends after 10 strikes", function(){
        for (var i = 0; i < 9; i++) {
          game.rollBall(10);
        };
        expect(game.isLastFrame()).toEqual(true);
     });


   it("22. Expect total score 270 after Spare in 10th frame" , function(){
        for (var i = 0; i < 9; i++) {
          game.rollBall(10);
        };
          game.rollBall(5);
          game.rollBall(5);
          game.rollBall(5);
        expect(game.score).toEqual(270);
    });



   it("23. Game score from the bowling challenge", function(){
      game.rollBall(1);
      game.rollBall(4);
      game.rollBall(4);
      game.rollBall(5);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(5);
      game.rollBall(5);
      game.rollBall(10);
      game.rollBall(0);
      game.rollBall(1);
      game.rollBall(7);
      game.rollBall(3);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(10);
      game.rollBall(2);
      game.rollBall(8);
      game.rollBall(6);
      expect(game.score).toEqual(133);
    });
});
