describe("Bowling", function(){

  beforeEach(function(){
    game = new Game;
  });

  describe("at the start of the game", function(){
    it("the score card is empty",function(){
      expect(game.scoreCard).toEqual([[],[],[],[],[],[],[],[],[],[]]);
    });

  });

  describe("at the roll of a ball", function(){

    it("it can strike pins", function(){
      expect(game.roll(1)).toEqual(1);
    });

    it("it can not strike any pins", function(){
      expect(game.roll(0)).toEqual(0);
    });

    it("it is a strike - when all ten pins are knocked down in first turn", function(){
      game.roll(10);
      expect(game.strike).toEqual(true);
    });

    it("it is a spare - when the ten pins knocked down with the two rolls of a frame", function(){
      game.roll(6);
      game.roll(4);
      expect(game.spare).toEqual(true);
    });
  });


  describe("scores", function(){

    it("after first trun the score is the number of pins struck", function(){
      game.roll(5);
      expect(game.scoreCard[0][0]).toEqual(game.pinsStruck);
    });

    it("after second trun the score is total of the score of the two turns", function(){
      game.roll(6);
      game.roll(4);
      expect(game.scoreCard[0]).toEqual([6, 4]);
    });

    it("when previous turn had a strike, then the score is added with bonus, points from next both turns)", function(){
      game.roll(10);
      game.roll(4);
      game.roll(3);
      expect(game.frameScore[1]).toEqual(24);
    });

    it("when previous turn had a spare, then the score is added with bonus, points from only next first turns)", function(){
      game.roll(5);
      game.roll(5);
      game.roll(4);
      game.roll(3);
      expect(game.frameScore[1]).toEqual(21);
    });
  });

  describe("last frame", function(){

    it("the last frame number is number 10", function(){
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      expect(game.frame).toEqual(9);
    });

    it("if strike then player gets a third turn", function(){
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(5);
      game.roll(2);
      game.roll(10);
      expect(game.canGoThirdTurn).toEqual(true);
    });


  });

});
