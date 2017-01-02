describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });
  describe("recordRoll", function() {
    it("should be able to record roll results", function() {
      game.recordRoll(4);
      expect(game.rolls).toEqual([4]);
    });
  });

  describe("recordFrame", function() {
    it("should record a frame after two rolls", function() {
      for(var i=0; i < 2; i++){
        game.recordRoll(4);
      }
      expect(game.framez).toEqual([[4,4]])
    });

    it("should clean the rolls after frame is recorded", function() {
      for(var i=0; i < 2; i++){
        game.recordRoll(4);
      }
      expect(game.rolls).toEqual([])
    });

    describe("calculateStrike", function() {
      it("should record a frame after a strike", function() {
        game.recordRoll(10);
        expect(game.framez).toEqual([[10]])
      });

      it("should calculate correct score for a strike", function() {
        game.recordRoll(10);
        for(var i=0; i < 2; i++){
          game.recordRoll(4);
        }
        expect(game.framez).toEqual([[18],[4,4]])
      });

      it ("should calculate three strikes in a row", function() {
        for(var i=0; i < 3; i++){
          game.recordRoll(10);
        }
        expect(game.framez).toEqual([[30],[20],[10]])
      });
    });

    describe("calculateSpare", function() {
      it ("should calculate correct score for a spare", function() {
        game.recordRoll(7);
        for(var i=0; i < 2; i++){
          game.recordRoll(3);
        }
        game.recordRoll(5);
        expect(game.framez).toEqual([[7,6],[3,5]])
      });
    });

  });

  describe("calculateResult", function() {
    it("calculates results after 10 frames", function() {
      for(var i=0; i < 20; i++){
        game.recordRoll(4);
      }
      expect(game.result).toEqual(80)
    });

    it("calculates a perfect game", function() {
      for(var i=0; i < 22; i++){
        game.recordRoll(10);
      }
      expect(game.result).toEqual(300)
    });

    it("calculates a gutter game", function() {
      for(var i=0; i < 20; i++){
        game.recordRoll(0);
      }
      expect(game.result).toEqual(0)
    });

    it("calculates spare in tenth frame correctly", function() {
      for(var i=0; i < 19; i++){
        game.recordRoll(1);
      }
      for(var i=0; i < 3; i++){
        game.recordRoll(9);
      }
      expect(game.result).toEqual(37)
    });
  });




});
