describe("Game", function () {

  // used below site to check scores
  // https://www.sportcalculators.com/bowling-score-calculator

  let game;

  beforeEach(function () {
    game = new Game();
  });
  
  describe("full game score", function () {
    it("gutter game to equal 0", function () {
      const times = 20;
      for(let i=0; i < times; i++){
        game.roll(0);
      }
      expect(game.scoreTotal()).toEqual(0);
    });

    it("every bowl is a 4 results in 80", function () {
      const times = 20;
      for(let i=0; i < times; i++){
        game.roll(4);
      }
      expect(game.scoreTotal()).toEqual(80);
    });

    it("perfect game results in 300", function () {
      const times = 12;
      for(let i=0; i < times; i++){
        game.roll(10);
      }
      expect(game.scoreTotal()).toEqual(300);
    });

    it("every bowl is a 5 results in 150", function () {
      const times = 21;
      for(let i=0; i < times; i++){
        game.roll(5);
      }
      expect(game.scoreTotal()).toEqual(150);
    });

    it("every bowl is a 3 results in 60", function () {
      const times = 20;
      for(let i=0; i < times; i++){
        game.roll(3);
      }
      expect(game.scoreTotal()).toEqual(60);
    });

    it("alternate stike and spare", function () {
      const times = 5;
      for(let i=0; i < times; i++){
        game.roll(10);
        game.roll(5);
        game.roll(5);
      }
      game.roll(10);
      expect(game.scoreTotal()).toEqual(200);
    });

    it("alternate two 3's and strike", function () {
      const times = 5;
      for(let i=0; i < times; i++){
        game.roll(10);
        game.roll(3);
        game.roll(3);
      }
      expect(game.scoreTotal()).toEqual(110);
    });


  });


});
